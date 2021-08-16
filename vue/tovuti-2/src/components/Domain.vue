<template>
    <div id="brand-container" class="container-flex text-start">
        <div id="action-bar" class="tov-admin-actionbar p-3">
            <button class="btn btn-success" @click="save"><span class="icon-apply icon-white" aria-hidden="true"></span>Save</button>
            <button class="btn btn-outline-success" @click="() => { save();cancel(); }"><span class="icon-save" aria-hidden="true"></span>Save & Close</button>
            <button class="btn btn-outline-success" @click="saveAndNew"><span class="icon-save-new" aria-hidden="true"></span>Save & New</button>
            <button class="btn btn-outline-success" @click="saveAsCopy"><span class="icon-save-copy" aria-hidden="true"></span>Save as Copy</button>
            <button class="btn btn-danger" @click="cancel"><span class="icon-cancel" aria-hidden="true"></span>Cancel</button>
        </div>
        <div class="alert alert-success m-2" :class="{'d-none': !showSaveSuccessAlert}">
            <h4 class="alert-heading">Success</h4>
            <p>Domain Saved Successfully</p>
        </div>
        <div class="tab-content ms-4">
            <div id="basic-information" class="tab-pane active show fade mt-4" role="tabpanel">
                <div class="row mb-4 ">
                    <div class="col-lg-3 col-xl-2">
                        Domain Name
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="domain.domain" v-if="id == null"/>
                        <strong v-else>{{domain.domain}}</strong>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Language
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="domain.params.language">
                            <option value="en-GB">English</option>
                            <option value="es-ES">Spanish</option>,
                            <option value="fr-FR">French</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Associated Brand
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select id="brand" name="brand" v-model="domain.params.brand">
                            <option value="1">SiteName</option>
                            <option value="" selected="selected">Select</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        DNS
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div class="col-lg-9 col-xl-10">
                            <div>
                                <span>Add the following CNAME records to the DNS configuration for your domain. The procedure for adding CNAME records depends on your DNS service Provider. <a href="https://docs.aws.amazon.com/console/acm/dns/add-record" target="_blank">Learn more.</a></span>
                                <div>
                                    <table class="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                    <span id="dns_name" title="click to copy" name="copy_pre">dev-ben.tovuti.io</span> </div>
                                                </td>
                                                <td>CNAME</td>
                                                <td>
                                                    <div>
                                                    <span id="dns_value" title="click to copy" name="copy_pre">us-test.tovuti.io</span> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <span>Click fields to copy</span>
                                </div>
                                <div class="alert alert-success" id="success-alert" style="display:none">
                                    <strong>Success! </strong> copied to clipboard
                                    <button type="button" class="btn-close float-end" data-dismiss="alert"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import moment from 'moment';

import { default as defaultDomainConfig } from '../assets/defaultDomainConfig.json';

export default {
    name: 'Domain',
    data() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            id: urlParams.get('id'),
            domains: {},
            domain: {},
            showSaveSuccessAlert: false
        };
    },
    beforeMount() {
        // this.domains will be removed once we start getting data from the API
        this.domains = JSON.parse(window.localStorage.getItem('domains')) || {};
        this.domain = this.getDomain();
    },
    methods: {
        save() {
            if (this.id == null) {
                // This is a new domain, create an id for it and 
                // push to domains list
                const newId = uuid();
                this.id = newId;
                this.domain.id = newId;
                this.domain.created_date = moment().format('YYYY-MM-DD');
                this.domains.push(this.domain);
                window.location.replace('/administrator/index.php?option=com_domains&view=domain&id=' + this.id);
            } else {
                // Saving an existing domain, find it in the domains
                // array and update
                this.domains.forEach(domain => {
                    if (domain.id == this.id) {
                        domain = this.domain;
                    }
                });
            }

            this.showSaveSuccessAlert = true;
            setTimeout(() => this.showSaveSuccessAlert = false, 3000);
            
            window.localStorage.setItem('domains', JSON.stringify(this.domains));
        },
        saveAndNew() {
            this.save();
            window.location.replace('/administrator/index.php?option=com_domains&view=domain');
        },
        getDomain() {
            if (this.id == null) {
                // Load a domain with blank fields
                return defaultDomainConfig;
            }

            return this.domains.find(domain => domain.id == this.id);
        },
        cancel() {
            window.location.href = '/administrator/index.php?option=com_domains&view=domains';
        },
        saveAsCopy() {
            this.id = null;
            this.save();
        }
    }
}
</script>

<style scoped>
    #title-bar {
        color: white;
        background-color: #374151;
        padding: 5px;
    }
    #filters {
        margin-top: 5px;
    }
    #action-bar .btn {
        margin-top: 5px;
        margin-right: 12px;
    }
    .help-block {
        font-size: small;
        color: #6c757d;
        margin-top: 0.25rem;
    }
</style>
