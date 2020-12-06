<template>
    <div>
        <Sidebar />
        <main>
            <router-view />
        </main>
    </div>
</template>
<script>
    import Sidebar from "./components/Sidebar";
    export default {
        components: {
            Sidebar
        }
    }
</script>