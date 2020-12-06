<template>
  <div>
    <Child1 v-if="isChild1" /><button @click="isChild1 = false">关闭</button>
    <Child2 v-if="isChild2" /><button @click="isChild2 = false">关闭</button>
    <Child3 v-if="isChild3" /><button @click="isChild3 = false">关闭</button>
    <Child4 v-if="isChild4" /><button @click="isChild4 = false">关闭</button>
    <Child5 v-if="isChild5" /><button @click="isChild5 = false">关闭</button>
  </div>
</template>
<script>
  import Child1 from './components/Child1.vue'
  import Child2 from './components/Child2.vue'
  import Child3 from './components/Child3.vue'
  import Child4 from './components/Child4.vue'
  import Child5 from './components/Child5.vue'

  export default {
    components: { Child1, Child2, Child3, Child4, Child5, },
    data() {
      return {
        isChild1: true,
        isChild2: true,
        isChild3: true,
        isChild4: true,
        isChild5: true,
      }
    }
  }
</script>