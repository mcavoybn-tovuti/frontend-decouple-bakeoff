<template>
    <div id="brand-container" class="container-flex text-start">
        <div id="action-bar">
            <button class="btn btn-success" @click="save">Save</button>
            <button class="btn btn-secondary" @click="saveAndNew">Save & New</button>
        </div>
        <nav id="tabs" class="mt-2">
            <div class="nav nav-tabs" role="tablist">
                <button 
                    class="nav-link active" 
                    id="nav-basic-information-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#basic-information" 
                    type="button" 
                    role="tab" 
                    aria-controls="basic-information"
                    aria-selected="true"
                >Basic Information</button>
                <button 
                    class="nav-link" 
                    id="nav-site-details-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#site-details" 
                    type="button" 
                    role="tab" 
                    aria-controls="site-details"
                >Site Details</button>
                <button 
                    class="nav-link" 
                    id="nav-site-billing-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#site-billing" 
                    type="button" 
                    role="tab" 
                    aria-controls="site-billing"
                >Site Billing</button>
                <button 
                    class="nav-link" 
                    id="nav-site-logos-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#site-logos" 
                    type="button" 
                    role="tab" 
                    aria-controls="site-logos"
                >Site Logos</button>
                <button 
                    class="nav-link" 
                    id="nav-legal-information-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#legal-information" 
                    type="button" 
                    role="tab" 
                    aria-controls="legal-information"
                >Legal Information</button>
                <button 
                    class="nav-link" 
                    id="nav-social-media-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#social-media" 
                    type="button" 
                    role="tab" 
                    aria-controls="social-media"
                >Social Media</button>
                <button 
                    class="nav-link" 
                    id="nav-home-page-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#home-page" 
                    type="button" 
                    role="tab" 
                    aria-controls="home-page"
                >Home Page</button>
                <button 
                    class="nav-link" 
                    id="nav-dashboard-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#dashboard" 
                    type="button" 
                    role="tab" 
                    aria-controls="dashboard"
                >Dashboard</button>
                <button 
                    class="nav-link" 
                    id="nav-site-faq-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#site-faq" 
                    type="button" 
                    role="tab" 
                    aria-controls="site-faq"
                >Site FAQ</button>
                <button 
                    class="nav-link" 
                    id="nav-email-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#email" 
                    type="button" 
                    role="tab" 
                    aria-controls="email"
                >Email</button>
                <button 
                    class="nav-link" 
                    id="nav-default-settings-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#default-settings" 
                    type="button" 
                    role="tab" 
                    aria-controls="default-settings"
                >Default Settings</button>
                <button 
                    class="nav-link" 
                    id="nav-integrations-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#integrations" 
                    type="button" 
                    role="tab" 
                    aria-controls="integrations"
                >Integrations</button>

            </div>
        </nav>
        <div class="tab-content">
            <div id="basic-information" class="tab-pane active show fade mt-4" role="tabpanel">
                <div class="row mb-4 ">
                    <div class="col-lg-3 col-xl-2">
                        Domains
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <!-- @TODO replace this with domains stuff -->
                        <div>Domains stuff goes here</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select">
                            <option value="en-GB">English</option>
                            <option value="es-ES">Spanish</option>,
                            <option value="fr-FR">French</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Brand Title *
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" :value="brand.title">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Site Name
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Site Description
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <textarea rows="12" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Published
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="published" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="published0"
                                name="published"
                                value="1"
                                checked="checked"
                                class="btn-check"
                            >			
                            <label 
                                for="language_selector0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="published1"
                                name="published"
                                value="0"
                                class="btn-check"
                            >
                            <label 
                                for="language_selector1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="site-details" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Plans for Active Memebership
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" multiple>
                            <option value="1">Registration</option>
                            <option value="2">paid</option>,
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Base font for brand
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select">
                            <option value="Arial">Arial</option>
                            <option value="Verdana">Verdana</option>,
                            <option value="Impact">Impact</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Open Sans">Open Sans</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language Selector
                    </div>
                    <div class="col-lg-4 col-xl-3">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Brand Title*
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select">
                            <option value="en-GB">English</option>
                            <option value="es-ES">Spanish</option>,
                            <option value="fr-FR">French</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="site-billing" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="site-logos" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="legal-information" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="social-media" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="home-page" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="dashboard" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="site-faq" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="email" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="default-settings" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="integrations" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        FieldContent
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
  name: 'Brand',
  data() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      id: urlParams.get('id'),
      brands: {},
    };
  },
  mounted() {
      this.brands = JSON.parse(window.localStorage.getItem('brands')) || {};
      this.brand = this.getBrand();
  },
  methods: {
      save() {
            if (this.id == null) {
                const newId = uuid();
                this.id = newId;
                this.brand.id = newId;
            }

            this.brands[this.id] = this.brand;
            window.localStorage.setItem('brands', JSON.stringify(this.brands));
            // window.location.replace('/administrator/index.php?option=com_axs&view=brand&id=' + this.id);
      },
      saveAndNew() {
          this.save();
          window.location.replace('/administrator/index.php?option=com_axs&view=brand');
      },
      getBrand() {
          if (this.id == null) {
              return {
                  title: 'foo'
              };
          }

          this.brand = this.brands[this.id];
      }
  }
}
</script>

<style scoped>
    #brand-container {
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
