<template>
    <div class="sidebar">
        <ul>
            <li
                v-for="(item, index) in linkList"
                :key="index"
            >
                <router-link
                    :to="{ name: item.name }"
                >{{item.meta.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import page from '@/router/page.js'
    export default {
        data() {
            return {
                linkList: page,
            }
        },
        created() {},
    }
</script>
<style lang="scss" scoped>
    .sidebar {
        li {
            a {
                color: inherit;
                text-decoration: none;
                display: block;
                padding: 3px 5px;
                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
</style>