<template>
  <div class="change-theme-button">
    <button @click="changeTheme">夜间/日间</button>
  </div>
</template>
<script>
  export default {
    inject: ['changeTheme']
  }
</script>
<style scoped>
  button {
    cursor: pointer;
    outline: none;
    border: 1px solid #979ba6;
  }
  .theme-dark button {
    color: #979ba6;
    background-color: #2a2c35;
  }
</style>