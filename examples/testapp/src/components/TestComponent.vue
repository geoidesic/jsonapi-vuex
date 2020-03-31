<template>
  <div id="main-div">
    <h1>JSONAPI Vuex Test App</h1>
    <div id="devices" v-for="(name, index) in devices" :key="'search' + index">
      {{ name }}
    </div>
  </div>
</template>

<script>
// import { status, utils } from '../../../../src/jsonapi-vuex'

export default {
  name: 'JsonapiVuex',
  data: () => {
    return {}
  },
  computed: {
    devices() {
      return this.$store.getters['devices/get']('devices')
    },
  },
  created() {
    console.log('someGetter', this.$store.getters)
  },
  methods: {},
}
</script>
