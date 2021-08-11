<template>
  <div id="app">
    <div id="brands" v-if="option == 'com_axs' && view == 'brands'">
      <Brands />
    </div>
    <div id="brand" v-if="option == 'com_axs' && view == 'brand'">
      <Brand />
    </div>
    <div id="footer">
      © SiteName 2021
    </div>
  </div>
</template>

<script>

import Brand from './components/Brand';
import Brands from './components/Brands';

export default {
  name: 'App',
  components: {
    Brand,
    Brands
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

<style>
</style>
