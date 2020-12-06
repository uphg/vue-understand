<template>
  <div>
    <h2>我是{{name}}</h2>
  </div>
</template>
<script>
  import log from '../mixins/log.js'
  export default {
    mixins: [log],
    data() {
      return {
        name: 'Child5'
      }
    },
  }
</script>
