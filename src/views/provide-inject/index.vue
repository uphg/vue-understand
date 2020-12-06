<template>
  <div class="provide-inject" :class="`theme-${themeColor}`">
    <h2>实现换肤功能</h2>
    <div>
      <change-theme-button></change-theme-button>
    </div>
  </div>
</template>
<script>
  import Child from './components/child.vue'
  import ChangeThemeButton from "./components/ChangeThemeButton";
  export default {
    components: {
      Child,
      ChangeThemeButton
    },
    data() {
      return {
        themeColor: 'light'
      }
    },
    provide() {
      return {
        changeTheme: this.changeTheme,
      }
    },
    methods: {
      changeTheme() {
        if(this.themeColor === 'light') {
          this.themeColor = 'dark'
        } else {
          this.themeColor = 'light'
        }
      }
    }
  }
</script>
<style scoped>
  h2 {
    margin: 0 0 10px;
  }
  .theme-dark {
    color: #979ba6;
    background-color: #2a2c35;
  }
  .provide-inject {
    height: 100%;
    padding: 26px;
    box-sizing: border-box;
  }
</style>