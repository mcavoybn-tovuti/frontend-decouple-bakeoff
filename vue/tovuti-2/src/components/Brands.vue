<template>
    <div id="brands-container" class="container-flex text-start">
        <div id="title-bar">
            <h1>Tovuti: Brands</h1>
        </div>
        <div id="action-bar">
            <button class="btn btn-success">New</button>
            <button class="btn btn-success">Publish</button>
            <button class="btn btn-warning">Unpublish</button>
            <button class="btn btn-danger">Delete</button>
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
                        <td><a :href="brand.url">{{ brand.siteTitle }}</a></td>
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
// import api from '../tovuti-api';

export default {
  name: 'Brands',
  props: {
  },
  data() {
      return {
            brands: []
      }
  },
  mounted() {
      this.brands = this.getBrands();
  },
  methods: {
      getBrands: function() {
            return [
                {
                    id: 1,
                    siteTitle: 'Site Title', 
                    language: 'en-GB', 
                    favicon: '',
                    domains: 'dev-ben.tovuti.io,dev-ben.tovuti.net',
                    description: '',
                    url: '/administrator/?index.php&option=com_axs&view=brand&id=1'
                }
            ];
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
