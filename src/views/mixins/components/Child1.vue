<template>
  <div>
    <h2>我是{{name}}</h2>
  </div>
</template>
<script>
  import MyVue from '../extends/MyVue.js'
  export default {
    extends: MyVue,
    data() {
      return {
        name: 'Child1'
      }
    },
  }
</script>
