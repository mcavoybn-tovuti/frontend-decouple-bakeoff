<template>
    <div id="brands-container" class="container-flex text-start">
        <div id="title-bar">
            <h1>Tovuti: Brands</h1>
        </div>
        <div id="action-bar" class="tov-admin-actionbar">
            <button class="btn btn-success" @click="goToNewBrandPage"><span class="icon-new icon-white" aria-hidden="true"></span> New</button>
            <button class="btn btn-success" @click="batchPublish"><span class="icon-publish" aria-hidden="true"></span> Publish</button>
            <button class="btn btn-warning" @click="batchUnpublish"><span class="icon-unpublish" aria-hidden="true"></span> Unpublish</button>
            <button class="btn btn-danger" @click="batchDelete"><span class="icon-delete" aria-hidden="true"></span> Delete</button>
            <button class="btn btn-warning float-end" @click="resetBrandsData">Load Dummy Brands Data</button>
        </div>
        <div id="filters">
            <div class="row p-3">
                <div class="col-md-12 col-xl-6">
                    <div class="float-start me-2">
                        <div class="input-group">
                            <input type="text" placeholder="Site Title" class="form-control" v-model="search.site_title" @keyup.enter="getBrands">
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip" 
                                title="Search"
                                @click="getBrands"
                            >
                                <i class="icon-search text-muted"></i>
                            </button>
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip"
                                title="Reset"
                                @click="() => { search.site_title = ''; getBrands() }"
                            >
                                <i class="icon-remove text-muted"></i>
                            </button>
                        </div>
                    </div>
                    <div class="float-start me-2">
                        <div class="input-group float-start">
                            <input type="text" placeholder="Language" class="form-control" v-model="search.language" @keyup.enter="getBrands">
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip" 
                                title="Search"
                                @click="getBrands"
                            >
                                <i class="icon-search text-muted"></i>
                            </button>
                            <button 
                                class="btn border" 
                                data-bs-toggle="tooltip" 
                                title="Reset"
                                @click="() => { search.language = ''; getBrands() }"
                            >
                                <i class="icon-remove text-muted"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-xl-6">
                    <select class="float-end ms-2" v-model="order.direction" @change="() => (pagination.currentPage = 1) && getBrands()">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                    <select class="float-end ms-2"  style="width:70px" v-model="pagination.pageSize" @change="() => (pagination.currentPage = 1) && getBrands()">
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
                    <select v-model="order.column" @change="() => pagination.currentPage = 1 && getBrands()">
                        <option value="site_title">Site Title</option>
                        <option value="id">Id</option>
                        <option value="ordering">Ordering</option>
                        <option value="language">Language</option>
                        <option value="favicon">Favicon</option>
                        <option value="domains">Domains</option>
                        <option value="description">Description</option>
                    </select>
                </div>
            </div>
        </div>  
        <div id="items-list" class="p-4">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><input type="checkbox"></th>
                        <th scope="col"><a href="#" @click="orderBy('site_title')">Site Title</a></th>
                        <th scope="col"><a href="#" @click="orderBy('language')">Language</a></th>
                        <th scope="col"><a href="#" @click="orderBy('favicon')">Favicon</a></th>
                        <th scope="col"><a href="#" @click="orderBy('domains')">Domains</a></th>
                        <th scope="col"><a href="#" @click="orderBy('description')">Description</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="brand in brands" :key="brand.id">
                        <th scope="row">{{ (pagination.currentPage - 1) * pagination.pageSize + brands.indexOf(brand) + 1 }}</th>
                        <td><input type="checkbox" class="brand-multiselect-checkbox" :data-brand-id="brand.id"></td>
                        <td><a :href="getBrandUrl(brand.id)">{{ brand.site_title }}</a></td>
                        <td>{{ brand.language }}</td>
                        <td>{{ brand.favicon }}</td>
                        <td>{{ brand.domains }}</td>
                        <td>{{ brand.description }}</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
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
                        @click="() => { pagination.currentPage = n + 1; getBrands(); }"
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
import { default as brandsDefault } from '../assets/brands.json';

export default {
    name: 'Brands',
    data() {
        return {
            brands: [],
            order: {
                direction: "ascending",
                column: "site_title"
            },
            pagination: {
                currentPage: 1,
                pageCount: 1,
                pageSize: 10
            },
            search: {
                site_title: '',
                language: ''
            }
        }
    },
    beforeMount() {
        this.getBrands();
    },
    methods: {
        getBrands() {
            var allBrandData = JSON.parse(window.localStorage.getItem('brands'));

            allBrandData.sort((a, b) => {
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

            if (this.search.site_title != "") {
                allBrandData = allBrandData.filter(brand => brand.site_title.toLowerCase().includes(this.search.site_title.toLowerCase()));
            }
            if (this.search.language != "") {
                allBrandData = allBrandData.filter(brand => brand.language.toLowerCase().includes(this.search.language.toLowerCase()));
            }
            
            this.pagination.pageCount = Math.ceil(allBrandData.length / this.pagination.pageSize);

            const pageStart = (this.pagination.currentPage - 1) * this.pagination.pageSize;
            const pageEnd = pageStart + this.pagination.pageSize;
            this.brands = allBrandData.slice(pageStart, pageEnd);
        },
        resetBrandsData() {
            window.localStorage.setItem('brands', JSON.stringify(brandsDefault));
            this.brands = window.localStorage.getItem('brands');
            window.location.reload();
        },
        getBrandUrl(id) {
            return '/administrator/?index.php&option=com_axs&view=brand&id=' + id;
        },
        goToNewBrandPage() {
            window.location.href ='/administrator/index.php?option=com_axs&view=brand';
        },
        getSelectedBrandIds() {
            return Array.from(document
                .getElementsByClassName('brand-multiselect-checkbox'))
                .filter(el => el.checked)
                .map(el => el.dataset.brandId);
        },
        batchPublish() {
             // Get all the checked brand rows and set published = 1
            let selectedBrandIds = this.getSelectedBrandIds();
            selectedBrandIds.forEach(brand => brand.published = '1');
            window.localStorage.setItem('brands', JSON.stringify(this.brands));
        },
        batchUnpublish() {
            // Get all the checked brand rows and set published = 0
            let selectedBrandIds = this.getSelectedBrandIds();
            selectedBrandIds.forEach(brand => brand.published = '0');
            window.localStorage.setItem('brands', JSON.stringify(this.brands));
        },
        batchDelete() {
            if (!window.confirm("Are you sure you want to delete these brands?")) {
                return;
            }
            // Get all the checked brand rows and delete from db or set trashed = 0
            let selectedBrandIds = this.getSelectedBrandIds();
            let allBrands = JSON.parse(window.localStorage.getItem('brands'));
            allBrands = allBrands.filter(brand => !selectedBrandIds.includes(brand.id));

            this.brands = allBrands;
            window.localStorage.setItem('brands', JSON.stringify(allBrands));
        },
        orderBy(column) {
            this.order.column = column;
            this.getBrands();
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
