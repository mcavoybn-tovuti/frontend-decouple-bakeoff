<template>
    <div id="brands-container" class="container-flex text-start">
        <div id="title-bar">
            <h1><span class="icon-generic"></span>&nbsp;Domain Manager</h1>
        </div>
        <div id="action-bar" class="tov-admin-actionbar">
            <button class="btn btn-success" @click="goToNewDomainPage"><span class="icon-new icon-white" aria-hidden="true"></span> New</button>
            <button class="btn" @click="setAsDefault"><span class="icon-delete" aria-hidden="true"></span> Set As Default</button>
             <button class="btn btn-danger" @click="deleteDomains"><span class="icon-cancel" aria-hidden="true"></span>Delete</button>
             <button class="btn btn-warning float-end" @click="resetDomainsData">Load Dummy Domains Data</button>
        </div>
        <div id="filters">
            <div class="row p-3">
                <div class="col-md-12 col-xl-6">
                    <div class="float-start me-2">
                        <div class="input-group">
                            <input type="text" placeholder="Domain Name" class="form-control" v-model="search.domain" @keyup.enter="getDomains">
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip" 
                                title="Search"
                                @click="getDomains"
                            >
                                <i class="icon-search text-muted"></i>
                            </button>
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip"
                                title="Reset"
                                @click="() => { search.domain_name = ''; getDomains() }"
                            >
                                <i class="icon-remove text-muted"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-xl-6">
                    <select class="float-end ms-2" v-model="order.direction" @change="() => (pagination.currentPage = 1) && getDomains()">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                    <select class="float-end ms-2"  style="width:70px" v-model="pagination.pageSize" @change="() => (pagination.currentPage = 1) && getDomains()">
                        <option value="5">5</option>
                        <option value="10" selected="selected">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="0">All</option>
                    </select>
                    <select class="fload-end" v-model="order.column" @change="() => pagination.currentPage = 1 && getDomains()">
                        <option value="id">Id</option>
                        <option value="domain">Domain Name</option>
                        <option value="params.language">Domain Language</option>
                        <option value="params.brand">Associated Brand</option>
                        <option value="ssl_id">SSL Certificate</option>
                        <option value="default_domain">Default</option>
                        <option value="created_date">Added Date</option>
                    </select>
                </div>
            </div>
        </div>  
        <div id="items-list" class="p-4">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><input type="checkbox" @click="toggleCheckAll" v-model="checkAllChecked"></th>
                        <th scope="col"><a href="#" @click="orderBy('domain')">Domain Name</a></th>
                        <th scope="col"><a href="#" @click="orderBy('params.language')">Default Language</a></th>
                        <th scope="col"><a href="#" @click="orderBy('params.brand')">Associated Brand</a></th>
                        <th scope="col"><a href="#" @click="orderBy('ssl_id')">SSL Certificate</a></th>
                        <th scope="col"><a href="#" @click="orderBy('default_domain')">Default</a></th>
                        <th scope="col"><a href="#" @click="orderBy('created_date')">Added Date</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="domain in domains" :key="domain.id">
                        <th scope="row">{{ (pagination.currentPage - 1) * pagination.pageSize + domains.indexOf(domain) + 1 }}</th>
                        <td><input type="checkbox" class="domain-multiselect-checkbox" :data-domain-id="domain.id"></td>
                        <td><a :href="getDomainUrl(domain.id)">{{ domain.domain }}</a></td>
                        <td>{{ domain.language }}</td>
                        <td>{{ domain.params.brand }}</td>
                        <td>{{ domain.ssl_id }}</td>
                        <td>{{ domain.default_domain }}</td>
                        <td>{{ domain.created_date }}</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Pagination">
                <ul class="pagination">
                    <li class="page-item" @click="pagination.currentPage = 1">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li 
                        :class="{
                            'page-item': true,
                            active: n + 1 == pagination.currentPage
                        }" 
                        @click="() => { pagination.currentPage = n + 1; getDomains(); }"
                        v-for="n in Array(pagination.pageCount).keys()" 
                        :key="n"
                    >
                        <a class="page-link" href="#">{{ n + 1 }}</a>
                    </li>
                    <li class="page-item" @click="pagination.currentPage = pagination.pageCount">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { default as domainsDefault } from '../assets/domains.json';

export default {
    name: 'Domains',
    data() {
        return {
            domains: [],
            order: {
                direction: "ascending",
                column: "domain"
            },
            pagination: {
                currentPage: 1,
                pageCount: 1,
                pageSize: 10
            },
            search: {
                domain: '',
            },
            checkAllChecked: false
        }
    },
    beforeMount() {
        this.getDomains();
    },
    methods: {
        getDomains() {
            var allDomainData = JSON.parse(window.localStorage.getItem('domains'));
            console.log('a');
            console.log(allDomainData);

            allDomainData.sort((a, b) => {
                a = a[this.order.column].toUpperCase();
                b = b[this.order.column].toUpperCase();
                if (a[this.order.column] >= b[this.order.column]) {
                    return 0;
                }
                if (this.order.direction == 'ascending') {
                    return a > b ? 1 : -1;
                } else if (this.order.direction == 'descending') {
                    return a < b ? 1 : -1;
                }
            });
            console.log('b');
             console.log(allDomainData);

            if (this.search.domain != "") {
                allDomainData = allDomainData.filter(domain => domain.domain.toLowerCase().includes(this.search.domain.toLowerCase()));
            }
            console.log('c');
            console.log(allDomainData);
            
            this.pagination.pageCount = Math.ceil(allDomainData.length / this.pagination.pageSize);

            const pageStart = (this.pagination.currentPage - 1) * this.pagination.pageSize;
            const pageEnd = pageStart + this.pagination.pageSize;
            this.domains = allDomainData.slice(pageStart, pageEnd);
        },
        resetDomainsData() {
            window.localStorage.setItem('domains', JSON.stringify(domainsDefault));
            this.domains = window.localStorage.getItem('domains');
            window.location.reload();
        },
        getDomainUrl(id) {
            return '/administrator/?index.php&option=com_domains&view=domain&id=' + id;
        },
        goToNewDomainPage() {
            window.location.href ='/administrator/index.php?option=com_domains&view=domain';
        },
        orderBy(column) {
            this.order.column = column;
            this.getDomains();
        },
        getSelectedDomainIds() {
            return Array.from(document
                .getElementsByClassName('domain-multiselect-checkbox'))
                .filter(el => el.checked)
                .map(el => el.dataset.domainId);
        },
        setAsDefault() {
            let selectedDomainIds = this.getSelectedDomainIds();
            let allDomains = JSON.parse(window.localStorage.getItem('domains'));
            // If multiple are selected, just grab the first one
            var domain = allDomains.find(domain => domain.id == selectedDomainIds[0]);
            domain.domain_default = '1';

            var otherDomains = allDomains.filter(domain => !selectedDomainIds.includes(domain.id));
            otherDomains.forEach(domain => domain.domain_default = '0');

            this.domains = allDomains;
            window.localStorage.setItem('domains', JSON.stringify(allDomains));
        },
        deleteDomains() {
            if (!window.confirm("Are you sure you want to delete these domains?")) {
                return;
            }
            // Get all the checked brand rows and delete from db or set trashed = 0
            let selectedDomainIds = this.getSelectedDomainIds();
            let allDomains = JSON.parse(window.localStorage.getItem('domains'));
            allDomains = allDomains.filter(domain => !selectedDomainIds.includes(domain.id));

            this.domains = allDomains;
            window.localStorage.setItem('domains', JSON.stringify(allDomains));
        },
        toggleCheckAll() {
            Array.from(document.getElementsByClassName('domain-multiselect-checkbox')).forEach(el => {
                el.checked = !this.checkAllChecked;
            });
        }
    }
}
</script>

<style scoped lang="scss">
    #title-bar {
        color: white;
        background-color: #374151;
        padding: 5px;
    }
    #filters {
        margin-top: 5px;
    }
    #action-bar {
        padding: 15px 0px 10px 10px;

        .btn {
            margin-right: 12px;
        }
    }
</style>
