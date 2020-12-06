<template>
  <div class="direcive1">
    <h1 v-log><span>Hello Word</span></h1>
    <div>
      <input v-focus type="text">
    </div>
    <div>
      <button v-on2:click="add">点击按钮</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      add() {
        console.log('我被点击了')
      }
    }
  }
</script>