<template>
    <div class="computed-demo2">
        <div>
            <button @click="gender = ''">全部</button>
            <button @click="gender = 'male'">男</button>
            <button @click="gender = 'female'">女</button>
        </div>
        <p>用户列表</p>
        <ul>
            <li
               v-for="(item, index) in displayList"
               :key="index"
            ><span>姓名：{{item.name}}</span>，<span>性别：{{item.gender}}</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            let id = 0
            const createUser = (name, gender) => {
                id += 1
                return {
                    id,
                    name,
                    gender,
                }
            }
            return {
                userList: [
                    createUser('张三', '女'),
                    createUser('李斯', '男'),
                    createUser('王悟', '女'),
                    createUser('陈柳', '男'),
                    createUser('杨齐', '女'),
                    createUser('赵魃', '男'),
                ],
                gender: ''
            }
        },
        computed: {
            displayList() {
                const hash = {
                    'male': '男',
                    'female': '女'
                }
                const { gender, userList } = this
                if (gender === '') {
                   return userList
                } else if(typeof gender === 'string') {
                    return userList.filter(user => user.gender === hash[gender])
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
        min-width: 66px;
        padding: 4px 10px;
        cursor: pointer;
        margin-right: 1em;
    }
</style>