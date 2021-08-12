<template>
    <div id="brands-container" class="container-flex text-start">
        <div id="title-bar">
            <h1>Tovuti: Brands</h1>
        </div>
        <div id="action-bar">
            <button class="btn btn-success" @click="goToNewBrandPage">New</button>
            <button class="btn btn-success" @click="batchPublish">Publish</button>
            <button class="btn btn-warning" @click="batchUnpublish">Unpublish</button>
            <button class="btn btn-danger" @click="batchDelete">Delete</button>
            <button class="btn btn-warning float-end" @click="resetBrandsData">Load Dummy Brands Data</button>
        </div>
        <div id="filters">
            <div class="row">
                <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="input-group">
                        <input type="text" placeholder="Search..." class="form-control">
                        <button class="btn btn-light border">Search</button>
                    </div>
                </div>
            </div>
        </div>  
        <div id="filter-bar">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><input type="checkbox"></th>
                        <th scope="col">Site Title</th>
                        <th scope="col">Language</th>
                        <th scope="col">Favicon</th>
                        <th scope="col">Domains</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="brand in brands" :key="brand.id">
                        <th scope="row">1</th>
                        <td><input type="checkbox"></td>
                        <td><a :href="getBrandUrl(brand.id)">{{ brand.site_title }}</a></td>
                        <td>{{ brand.language }}</td>
                        <td>{{ brand.favicon }}</td>
                        <td>{{ brand.domains }}</td>
                        <td>{{ brand.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { default as brandsDefault } from '../assets/brands.json';

export default {
    name: 'Brands',
    data() {
        return {
            brands: []
        }
    },
    mounted() {
        this.brands = this.getBrands();
    },
    methods: {
        getBrands() {
            return JSON.parse(window.localStorage.getItem('brands'));
        },
        resetBrandsData() {
            window.localStorage.setItem('brands', JSON.stringify(brandsDefault));
            this.brands = window.localStorage.getItem('brands');
        },
        getBrandUrl(id) {
            return '/administrator/?index.php&option=com_axs&view=brand&id=' + id;
        },
        goToNewBrandPage() {
            window.location.href ='/administrator/index.php?option=com_axs&view=brand';
        },
        batchPublish() {
            // Get all the checked brand rows and set published = 1
        },
        batchUnpublish() {
            // Get all the checked brand rows and set published = 0
        },
        batchDelete() {
            // Get all the checked brand rows and delete from db or set trashed = 0
        },
        filterBy(fieldpath) {
            // Filter based on the fieldpath
            return fieldpath;
        },
        orderBy(fieldpath) {
            // Order by based on the fieldpath
            return fieldpath;
        }
    }
}
</script>

<style scoped>
    #brands-container {
        margin: 5px;
    }
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
        margin-right: 5px;
    }
</style>
