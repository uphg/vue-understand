<template>
  <div class="watch1">
    <div class="number">{{ number }}</div>
    <LineRow />
    <div class="control">
      <button @click="number += 1">+1</button>
      <button @click="number -= 1">-1</button>
      <button @click="number += 2">+2</button>
      <button @click="number -= 2">-2</button>
    </div>
    <LineRow />
    <div class="go-back">
      <button @click="clickGoBack">撤销</button>
    </div>
    <LineRow />
    <div class="display-data">
      <div class="js-code">{{ history }}</div>
    </div>
  </div>
</template>
<script>
import LineRow from "@/components/LineRow.vue";
export default {
  components: {
    LineRow,
  },
  data() {
    return {
      number: 0,
      history: [],
      inUndoMode: false,
    };
  },
  watch: {
    number(newValue, oldValue) {
      if (!this.inUndoMode) {
        this.history.push({ form: oldValue, to: newValue });
      }
    },
  },
  methods: {
    clickGoBack() {
      const length = this.history.length;
      if (length && length > 0) {
        const last = this.history.pop();
        const oldValue = last.form;
        this.inUndoMode = true;
        console.log("last");
        console.log(last);
        this.number = oldValue;
        this.$nextTick(() => {
          this.inUndoMode = false;
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.js-code {
  font-family: Consolas;
  line-height: 2;
}
</style>