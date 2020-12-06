export default {
  data() {
    return {
      name: '',
      time: ''
    }
  },
  created() {
    this.time = new Date()
    console.log(`${this.name}出生了`)
  },
  beforeDestroy() {
    const afterTime = new Date()
    console.log(`${this.name}死亡，共存活了${afterTime - this.time}ms`)
  }
}