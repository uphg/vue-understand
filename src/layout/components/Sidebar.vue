<template>
    <div class="sidebar">
        <ul>
            <li>
                <router-link :to=""></router-link>
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
        created() {
            console.log('this.linkList');
            console.log(this.linkList);
        }
    }
</script>