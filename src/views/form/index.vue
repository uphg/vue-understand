<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="onSubmit">
      <label>
        <span>用户名：</span>
        <input type="text" v-model="user.username" />
      </label>
      <label>
        <span>密码：</span>
        <input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('# this.user')
        console.log(this.user)
      }
    }
  }
</script>
<style>
  label {
    display: block;
    margin-bottom: 1em;
  }
  label span {
    display: inline-block;
    min-width: 4em;
    text-align: end;
  }
</style>