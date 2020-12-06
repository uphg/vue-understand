<template>
  <div>
    <input
      :value="message"
      v-on:input="message = $event.target.value"
      type="text">
    <p>输入的内容 (message)：{{message}}</p>
    <LineRow />
    <p>实现的代码：</p>
    <pre class="js-code">{{html}}</pre>
  </div>
</template>
<script>
  import LineRow from "@/components/LineRow.vue";
  export default {
    name: 'v-model',
    components: { LineRow, },
    data() {
      return {
        message: '',
        html: `<input
    :value="message"
    v-on:input="message = $event.target.value"
    type="text"
  >
  <p>输入的内容 (message)：{{message}}</p>`
      }
    }
  }
</script>