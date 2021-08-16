<template>
  <div id="app">
    <div id="brands" v-if="option == 'com_axs' && view == 'brands'">
      <Brands />
    </div>
    <div id="brand" v-if="option == 'com_axs' && view == 'brand'">
      <Brand />
    </div>
    <div id="domains" v-if="option == 'com_domains' && view == 'domains'">
      <Domains />
    </div>
    <div id="domain" v-if="option == 'com_domains' && view == 'domain'">
      <Domain />
    </div>
    <div id="footer" class="text-center">
      © SiteName 2021
    </div>
  </div>
</template>

<script>
import Brand from './components/Brand';
import Brands from './components/Brands';
import Domain from './components/Domain';
import Domains from './components/Domains';

export default {
  name: 'App',
  components: {
    Brand,
    Brands,
    Domain,
    Domains
  },
  data() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      option: urlParams.get('option'),
      view: urlParams.get('view'),
    };
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>
