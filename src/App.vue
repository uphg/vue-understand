<template>
  <div id="app">
    <Sidebar />
    <main class="pages">
      <router-view />
    </main>
  </div>
</template>
<script>
  import Sidebar from "@/components/Sidebar";
  export default {
    components: {
      Sidebar
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  #app {
    max-width: 1200px;
    margin: 30px auto 0;
    display: flex;
  }
  .sidebar {
    padding: 20px 26px;
    width: 300px;
  }
  .pages {
    width: calc(100% - 300px);
    min-height: 360px;
    background-color: #f1f3f4;
    padding: 20px;
    margin: 26px 20px;
  }
.js-code {
  font-family: Consolas;
  line-height: 2;
}
</style>
