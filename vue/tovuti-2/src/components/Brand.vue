<template>
    <div id="brand-container" class="container-flex text-start">
        <div id="action-bar">
            <button class="btn btn-success" @click="save">Save</button>
            <button class="btn btn-secondary" @click="saveAndNew">Save & New</button>
            <button class="btn btn-danger" @click="cancel">Cancel</button>
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
                    <div class="col-lg-4 col-xl-3">
                        <!-- @TODO replace this with domains stuff -->
                        <div>Domains stuff goes here</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select" v-model="brand.language">
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
                        <input type="text" class="form-control" v-model="brand.site_title">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Site Name
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input 
                            type="text" 
                            class="form-control" d
                            v-model="brand.email.sitename"
                        >
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Site Description
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <textarea rows="12" class="form-control" v-model="brand.description"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Published
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="published" class="btn-group btn-group rounded">
                            <input
                                id="published0"
                                type="radio"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.published"
                            >			
                            <label 
                                for="published0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input
                                id="published1"
                                type="radio"
                                value="0"
                                class="btn-check"
                                v-model="brand.published"
                            >
                            <label 
                                for="published1"
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
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select" multiple v-model="brand.site_details.plans_for_active">
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
                        <select class="form-select" v-model="brand.site_details.default_font">
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
                        Three Color Design
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="tovuti_root_styles" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="tovuti_root_styles0"
                                name="tovuti_root_styles"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.site_details.tovuti_root_styles"
                            >			
                            <label 
                                for="tovuti_root_styles0"
                                class="btn btn-outline-success"
                            >On</label>		
                            <input 
                                type="radio"
                                id="tovuti_root_styles1"
                                name="tovuti_root_styles"
                                value="0"
                                class="btn-check"
                                v-model="brand.site_details.tovuti_root_styles"
                            >
                            <label 
                                for="tovuti_root_styles1"
                                class="btn btn-outline-secondary"
                            >Off</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.tovuti_root_styles == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Primary Color
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input
                            type="color" 
                            v-model="brand.site_details.root_primary_color"
                        >
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.tovuti_root_styles == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Accent Color
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input
                            type="color"
                            v-model="brand.site_details.root_accent_color"
                        >
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.tovuti_root_styles == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Base Color
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input
                            type="color"
                            v-model="brand.site_details.root_base_color" 
                        >
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language Selector
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="language_selector" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="language_selector0"
                                name="language_selector"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.site_details.language_selector"
                            >			
                            <label 
                                for="language_selector0"
                                class="btn btn-outline-success"
                            >On</label>		
                            <input 
                                type="radio"
                                id="language_selector1"
                                name="language_selector"
                                value="0"
                                class="btn-check"
                                v-model="brand.site_details.language_selector"
                            >
                            <label 
                                for="language_selector1"
                                class="btn btn-outline-secondary"
                            >Off</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.language_selector == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select 
                            class="form-select"
                            multiple
                            v-model="brand.site_details.language_selector_options"
                        >
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
                        Admin Email Addresses
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Repeatable modal
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Global Currency
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Currency field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Reprocess declines?
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="auto_reprocess_declines" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="auto_reprocess_declines0"
                                name="auto_reprocess_declines"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.billing.auto_reprocess_declines"
                            >			
                            <label 
                                for="auto_reprocess_declines0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="auto_reprocess_declines1"
                                name="auto_reprocess_declines"
                                value="0"
                                class="btn-check"
                                v-model="brand.billing.auto_reprocess_declines"
                            >
                            <label 
                                for="auto_reprocess_declines1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.auto_reprocess_declines == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Days Between Rebilling
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select id="auto_reprocess_days" name="auto_reprocess_days" class="form-select" aria-invalid="false" v-model="brand.billing.auto_reprocess_days">
                            <option v-for="x in Array(27).keys()" :key="x + 1" :value="x + 1">{{x + 1}}</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Bill on Weekends?
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="weekend_billing" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="weekend_billing1"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.billing.weekend_billing"
                            >			
                            <label 
                                for="weekend_billing1"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="weekend_billing0"
                                value="0"
                                class="btn-check"
                                v-model="brand.billing.weekend_billing"
                            >
                            <label 
                                for="weekend_billing0"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.weekend_billing == '0'">
                    <div class="col-lg-3 col-xl-2">
                        No weekend billing fallback
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="weekend_fallback" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="weekend_fallback1"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.billing.weekend_fallback"
                            >			
                            <label 
                                for="weekend_fallback1"
                                class="btn btn-outline-success"
                            >Friday</label>		
                            <input 
                                type="radio"
                                id="weekend_fallback0"
                                value="0"
                                class="btn-check"
                                v-model="brand.billing.weekend_fallback"
                            >
                            <label 
                                for="weekend_fallback0"
                                class="btn btn-outline-secondary"
                            >Monday</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Late Payment Grace Period
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select" v-model="brand.billing.grace_period" aria-invalid="false">
                            <option v-for="x in Array(366).keys()" :key="x" :value="x">{{x}}</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Should we show an alert message for past unpaid subscription periods?
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="show_unpaid_alert" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="show_unpaid_alert1"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.billing.show_unpaid_alert"
                            >			
                            <label 
                                for="show_unpaid_alert1"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="show_unpaid_alert0"
                                value="0"
                                class="btn-check"
                                v-model="brand.billing.show_unpaid_alert"
                            >
                            <label 
                                for="show_unpaid_alert0"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Select gateway type
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select id="gateway_type" name="gateway_type" v-model="brand.billing.gateway_type" class="form-select" aria-invalid="false">
                            <option value="converge">Converge</option>
                            <option value="authnet">Authorize.Net</option>
                            <option value="stripe" selected="selected">Stripe</option>
                            <option value="heartland">Heartland</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge'">
                    <div class="col-lg-3 col-xl-2">
                        Account Mode
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="converge_production_mode" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="converge_production_mode0"
                                value="0"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.billing.converge_production_mode"
                            >			
                            <label 
                                for="converge_production_mode0"
                                class="btn btn-outline-success"
                            >Development</label>		
                            <input 
                                type="radio"
                                id="converge_production_mode1"
                                value="1"
                                class="btn-check"
                                v-model="brand.billing.converge_production_mode"
                            >
                            <label 
                                for="converge_production_mode1"
                                class="btn btn-outline-secondary"
                            >Production</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production Merchant ID
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_merchant_id">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production User ID
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_user_id">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production PIN
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_account_pin">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer Merchant ID
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_merchant_id">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer User ID
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_user_id">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer PIN
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_account_pin">
                    </div>
                </div>
                
            </div>
            <div id="site-logos" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Favicon
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Media Field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Video Cover Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Media Field
                    </div>
                </div>
            </div>
            <div id="legal-information" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Privacy Policy
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Terms of Use
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Member Agreement
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
            </div>
            <div id="social-media" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Facebook Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Twitter Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Instagram Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Pinterest Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Google Plus Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Youtube Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        LinkedIn Link
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Social Media Homepage Header Text
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
            </div>
            <div id="home-page" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        View Type
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        FieldContent
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FieldName
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        FieldContent
                    </div>
                </div>
            </div>
            <div id="dashboard" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Multilingual
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="dashboard_multilingual" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="dashboard_multilingual0"
                                name="dashboard_multilingual"
                                value="1"
                                checked="checked"
                                class="btn-check"
                            >			
                            <label 
                                for="dashboard_multilingual0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="dashboard_multilingual1"
                                name="dashboard_multilingual"
                                value="0"
                                class="btn-check"
                            >
                            <label 
                                for="dashboard_multilingual1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Dashboard
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Select dropdown of all the learner_dashboards
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Dashboard Per Language
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        English <br />
                        select dropdown <br />
                        French <br />
                        select dropdown <br />
                        Spanish <br />
                        select dropdown <br />
                    </div>
                </div>
            </div>
            <div id="site-faq" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FAQ Heading
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Content
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="faq_type" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="faq_type0"
                                name="faq_type"
                                value="1"
                                checked="checked"
                                class="btn-check"
                            >			
                            <label 
                                for="faq_type0"
                                class="btn btn-outline-success"
                            >Auto Generated</label>		
                            <input 
                                type="radio"
                                id="faq_type1"
                                name="faq_type"
                                value="0"
                                class="btn-check"
                            >
                            <label 
                                for="faq_type1"
                                class="btn btn-outline-secondary"
                            >Free Form</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Auto Generated List
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        Repeatable modal
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Free Form
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        WYSIWG editor
                    </div>
                </div>
            </div>
            <div id="email" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        From Name:
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Reply To Name
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Use Custom SMTP
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="email_custom_smtp" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="email_custom_smtp0"
                                name="email_custom_smtp"
                                value="1"
                                checked="checked"
                                class="btn-check"
                            >			
                            <label 
                                for="email_custom_smtp0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="email_custom_smtp1"
                                name="email_custom_smtp"
                                value="0"
                                class="btn-check"
                            >
                            <label 
                                for="email_custom_smtp1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Mail From:
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Authorize
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <select class="form-select">
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        SMTP User
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        SMTP Password
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Host
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Reply To
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Security
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Port
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div id="default-settings" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Course Category Cover Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        media field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Course Cover Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        media field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Event Category Cover Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        media field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Event Cover Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        media field
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Avatar Image
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        media field
                    </div>
                </div>
            </div>
            <div id="integrations" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Use Zoom Integration
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div role="group" id="zoom_integration" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="zoom_integration0"
                                name="zoom_integration"
                                value="1"
                                checked="checked"
                                class="btn-check"
                            >			
                            <label 
                                for="zoom_integration0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="zoom_integration1"
                                name="zoom_integration"
                                value="0"
                                class="btn-check"
                            >
                            <label 
                                for="zoom_integration1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Zoom API Public Key
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Zoom API Secret Key
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

import { default as defaultBrandConfig } from '../assets/defaultBrandConfig.json';

export default {
    name: 'Brand',
    data() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            id: urlParams.get('id'),
            brands: {},
            brand: {}
        };
    },
    beforeMount() {
        // this.brands will be removed once we start getting data from the API
        this.brands = JSON.parse(window.localStorage.getItem('brands')) || {};
        this.brand = this.getBrand();
    },
    methods: {
        save() {
            if (this.id == null) {
                // This is a new brand, create an id for it and 
                // push to brands list
                const newId = uuid();
                this.id = newId;
                this.brand.id = newId;
                this.brands.push(this.brand);
                window.location.replace('/administrator/index.php?option=com_axs&view=brand&id=' + this.id);
            } else {
                // Saving an existing brand, find it in the brands
                // array and update
                this.brands.forEach(brand => {
                    if (brand.id == this.id) {
                        brand = this.brand;
                    }
                });
            }
            
            window.localStorage.setItem('brands', JSON.stringify(this.brands));
        },
        saveAndNew() {
            this.save();
            window.location.replace('/administrator/index.php?option=com_axs&view=brand');
        },
        getBrand() {
            if (this.id == null) {
                // Load a brand with blank fields
                return defaultBrandConfig;
            }

            return this.brands.find(brand => brand.id == this.id);
        },
        cancel() {
            window.location.href = '/administrator/index.php?option=com_axs&view=brands';
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
