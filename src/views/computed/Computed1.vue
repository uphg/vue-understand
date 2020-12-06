<template>
    <div class="computed-demo1">
        <div>用户信息：{{displayName}} <button @click="setName">修改</button></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    nickname: '方方',
                    email: '123@qq.com',
                    phone: '12345'
                }
            }
        },
        computed: {
            displayName: {
                get() {
                    const user = this.user
                    return user.nickname || user.email || user.phone;
                },
                set(value) {
                    this.user.nickname  = value
                }
            }
        },
        methods: {
            setName() {
                this.displayName = '小红'
            }
        }
    }
</script>
<style lang="scss" scoped>
button {
    cursor: pointer;
}
</style>