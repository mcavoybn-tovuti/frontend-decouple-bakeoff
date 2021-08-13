<template>
    <div id="brand-container" class="container-flex text-start">
        <div id="action-bar" class="tov-admin-actionbar p-3">
            <button class="btn btn-success" @click="save"><span class="icon-apply icon-white" aria-hidden="true"></span>Save</button>
            <button class="btn btn-outline-success" @click="() => { save();cancel(); }"><span class="icon-save" aria-hidden="true"></span>Save & Close</button>
            <button class="btn btn-outline-success" @click="saveAndNew"><span class="icon-save-new" aria-hidden="true"></span>Save & New</button>
            <button class="btn btn-outline-success" @click="saveAsCopy"><span class="icon-save-copy" aria-hidden="true"></span>Save as Copy</button>
            <button class="btn btn-danger" @click="cancel"><span class="icon-cancel" aria-hidden="true"></span>Cancel</button>
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
                        <div class="help-block">The domains that the brand is connected to.</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.site_title">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Site Name
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
                        <textarea rows="12" class="form-control" v-model="brand.description"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Published
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" multiple v-model="brand.site_details.plans_for_active">
                            <option value="1">Registration</option>
                            <option value="2">paid</option>,
                        </select>
                        <div class="help-block">Which plan(s) do members need to be in to be considered active?<br/>Hold Ctrl to select multiple.</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Base font for brand
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                        <div class="help-block">Whitch languages are available in the language selector</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.language_selector == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Language
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
                        Repeatable modal
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Global Currency
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        Currency field
                        <div class="help-block">Currentcy to be used throughout the site and will be used in billing.<br/>
                        <em><strong>Make sure that the chosen currency is supported by your credit card processor</strong></em></div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Reprocess declines?
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                        <div class="help-block">If set to Yes, charging for declined subscription payments will be reattempted on a regular basis (within a 28 day billing cycle).</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.auto_reprocess_declines == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Days Between Rebilling
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select id="auto_reprocess_days" name="auto_reprocess_days" class="form-select" aria-invalid="false" v-model="brand.billing.auto_reprocess_days">
                            <option v-for="x in Array(27).keys()" :key="x + 1" :value="x + 1">{{x + 1}}</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Bill on Weekends?
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                        <div class="help-block">If set to No, the system will bill those users on friday or monday, based on your settings below.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.weekend_billing == '0'">
                    <div class="col-lg-3 col-xl-2">
                        No weekend billing fallback
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                        <div class="help-block">When should we bill if you have weekend billing turned off?</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Late Payment Grace Period
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="brand.billing.grace_period" aria-invalid="false">
                            <option v-for="x in Array(366).keys()" :key="x" :value="x">{{x}}</option>
                        </select>
                    </div>
                    <div class="help-block">Number of late days a member has before their subscription expires</div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Should we show an alert message for past unpaid subscription periods?
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                        <div class="help-block">If set to Yes, an alert message will be shown even if the member is current on their dues but has a past unpaid balance.</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Select gateway type
                    </div>
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="col-lg-9 col-xl-10">
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
                    <div class="help-block">Send requests to production gateway or development.</div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production Merchant ID
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_merchant_id">
                        <div class="help-block">This is the merchant id for the payment account.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production User ID
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_user_id">
                        <div class="help-block">This is the account user id.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Production PIN
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_prod_account_pin">
                        <div class="help-block">This is the account pin.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer Merchant ID
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_merchant_id">
                        <div class="help-block">This is the merchant id for the payment account.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer User ID
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_user_id">
                        <div class="help-block">This is the account user id.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.billing.gateway_type == 'converge' && brand.billing.converge_production_mode == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Developer PIN
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.billing.converge_dev_account_pin">
                        <div class="help-block">This is the account pin.</div>
                    </div>
                </div>
                
            </div>
            <div id="site-logos" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Favicon
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        Media Field
                        <div class="help-block">The favicon for the browser tab.</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Video Cover Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        Media Field
                        <div class="help-block">Default preview image for videos.</div>
                    </div>
                </div>
            </div>
            <div id="legal-information" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Privacy Policy
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.legal.privacy_policy"></froala>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Terms of Use
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.legal.terms_of_use"></froala>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Member Agreement
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.legal.member_agreement"></froala>
                    </div>
                </div>
            </div>
            <div id="social-media" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Facebook Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.facebook_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Twitter Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.twitter_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Instagram Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.instagram_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Pinterest Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.pinterest_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Google Plus Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.google_plus_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Youtube Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.youtube_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        LinkedIn Link
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.social.linkedin_link">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Social Media Homepage Header Text
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.social.socialmedia_text"></froala>
                        <div class="help-block">Text or information that will be on the opposite side from the links. Can be useful for phone numbers, etc.</div>
                    </div>
                </div>
            </div>
            <div id="home-page" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        View Type
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="homepage_type" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="homepage_type0"
                                value="landing_page"
                                class="btn-check"
                                v-model="brand.site_details.homepage_type"
                            >			
                            <label 
                                for="homepage_type0"
                                class="btn btn-outline-success"
                            >Landing Page</label>		
                            <input 
                                type="radio"
                                id="homepage_type1"
                                value="login_page"
                                class="btn-check"
                                v-model="brand.site_details.homepage_type"
                            >
                            <label 
                                for="homepage_type1"
                                class="btn btn-outline-secondary"
                            >Login Page</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.homepage_type == 'login_page'">
                    <div class="col-lg-3 col-xl-2">
                        Login Page
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="brand.homepage.login_page">
                            <option value="1">Default Login Page</option>
                        </select>
                        <div class="help-block">Which Login Page should this brand use.</div>
                    </div>
                </div>
                 <div class="row mb-4" v-if="brand.site_details.homepage_type == 'landing_page'">
                    <div class="col-lg-3 col-xl-2">
                        Multilingual
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="dashboard_multilingual" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="dashboard_multilingual0"
                                name="dashboard_multilingual"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.homepage.multilingual"
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
                                v-model="brand.homepage.multilingual"
                            >
                            <label 
                                for="dashboard_multilingual1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.homepage_type == 'landing_page' && brand.homepage.multilingual == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Landing Page
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="brand.homepage.login_page">
                            <option value="1">Default Login Page</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_details.homepage_type == 'landing_page' && brand.homepage.multilingual == '1'">
                    <!-- TODO this needs some extra work to save the data properly -->
                    <div class="col-lg-3 col-xl-2">
                        Landing Page Per Language
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        English
                        <select class="form-select" v-model="brand.homepage.login_page">
                            <option value="1">Default Login Page</option>
                        </select>
                        Spanish
                        <select class="form-select" v-model="brand.homepage.login_page">
                            <option value="1">Default Login Page</option>
                        </select>
                        French
                        <select class="form-select" v-model="brand.homepage.login_page">
                            <option value="1">Default Login Page</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="dashboard" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Multilingual
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="dashboard_multilingual" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="dashboard_multilingual0"
                                name="dashboard_multilingual"
                                value="yes"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.dashboard.multilingual"
                            >			
                            <label 
                                for="dashboard_multilingual0"
                                class="btn btn-outline-success"
                            >Yes</label>		
                            <input 
                                type="radio"
                                id="dashboard_multilingual1"
                                name="dashboard_multilingual"
                                value="no"
                                class="btn-check"
                                v-model="brand.dashboard.multilingual"
                            >
                            <label 
                                for="dashboard_multilingual1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.dashboard.multilingual == 'no'">
                    <div class="col-lg-3 col-xl-2">
                        Dashboard
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="brand.dashboard.learner_dashboard_id">
                            <option value="1">Default Learner Dashboard</option>
                        </select>
                        <div class="help-block">Which dashboard should this brand use.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.dashboard.multilingual == 'yes'">
                    <div class="col-lg-3 col-xl-2">
                        Dashboard Per Language
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <!-- TODO this needs some extra work to save the data properly -->
                        English <br />
                        <select class="form-select" v-model="brand.dashboard.learner_dashboard_id">
                            <option value="1">Default Learner Dashboard</option>
                        </select>
                        French <br />
                        <select class="form-select" v-model="brand.dashboard.learner_dashboard_id">
                            <option value="1">Default Learner Dashboard</option>
                        </select>
                        Spanish <br />
                        <select class="form-select" v-model="brand.dashboard.learner_dashboard_id">
                            <option value="1">Default Learner Dashboard</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="site-faq" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        FAQ Heading
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.site_faq.faq_heading"></froala>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Content
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="faq_type" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="faq_type1"
                                name="faq_type"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.site_faq.type"
                            >			
                            <label 
                                for="faq_type1"
                                class="btn btn-outline-success"
                            >Auto Generated</label>		
                            <input 
                                type="radio"
                                id="faq_type0"
                                name="faq_type"
                                value="0"
                                class="btn-check"
                                v-model="brand.site_faq.type"
                            >
                            <label 
                                for="faq_type0"
                                class="btn btn-outline-secondary"
                            >Free Form</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_faq.type == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Auto Generated List
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        Repeatable modal
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.site_faq.type == '0'">
                    <div class="col-lg-3 col-xl-2">
                        Free Form
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <froala :tag="'textarea'" :config="froalaConfig" v-model="brand.site_faq.faq_heading"></froala>
                    </div>
                </div>
            </div>
            <div id="email" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        From Name:
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.fromname">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Reply To Name
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.replytoname">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Use Custom SMTP
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="email_custom_smtp" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="email_custom_smtp0"
                                name="email_custom_smtp"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.email.email_custom_smtp"
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
                                v-model="brand.email.email_custom_smtp"
                            >
                            <label 
                                for="email_custom_smtp1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Mail From:
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.mailfrom">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Authorize
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <select class="form-select" v-model="brand.email.smtpauth">
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        SMTP User
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.smtpuser">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        SMTP Password
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.smtppass">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Host
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.smtphost">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Reply To
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.replyto">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Security
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.smtpsecure">
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.email.email_custom_smtp == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Port
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.email.smtpport">
                    </div>
                </div>
            </div>
            <div id="default-settings" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Course Category Cover Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        media field
                        <div class="help-block">This is the default image to use as the cover image for the courses category view</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Course Cover Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        media field
                        <div class="help-block">This is the default image to use as the cover image for the courses</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Event Category Cover Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        media field
                        <div class="help-block">This is the default image to use as the cover image for the event category view</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Event Cover Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        media field
                        <div class="help-block">This is the default image to use as the cover image for the events</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Default Avatar Image
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        media field
                        <div class="help-block">This is the default image to use as the user profile avatar</div>
                    </div>
                </div>
            </div>
            <div id="integrations" class="tab-pane fade mt-4">
                <div class="row mb-4">
                    <div class="col-lg-3 col-xl-2">
                        Use Zoom Integration
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <div role="group" id="zoom_integration" class="btn-group btn-group rounded">
                            <input 
                                type="radio"
                                id="zoom_integration0"
                                name="zoom_integration"
                                value="1"
                                checked="checked"
                                class="btn-check"
                                v-model="brand.api_settings.zoom_integration"
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
                                v-model="brand.api_settings.zoom_integration"
                            >
                            <label 
                                for="zoom_integration1"
                                class="btn btn-outline-secondary"
                            >No</label>
                        </div>
                        <div class="help-block">Select Yes if you want to integrate the Zoom API with your Tovuti LMS brand.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.api_settings.zoom_integration == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Zoom API Public Key
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.api_settings.zoom_api_public_key">
                        <div class="help-block">This is the Zoom API public key that will allow you to use your Zoom API within supported areas of your admin site.</div>
                    </div>
                </div>
                <div class="row mb-4" v-if="brand.api_settings.zoom_integration == '1'">
                    <div class="col-lg-3 col-xl-2">
                        Zoom API Secret Key
                    </div>
                    <div class="col-lg-9 col-xl-10">
                        <input type="text" class="form-control" v-model="brand.api_settings.zoom_api_secret_key">
                        <div class="help-block">This is the Zoom API secret (private) key that will allow you to use your Zoom API within supported areas of your admin site.</div>
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
            brand: {},
            froalaConfig: {
                events: {
                    'froalaEditor.initialized': function () {
                        console.log('initialized')
                    }
                }
            },
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
