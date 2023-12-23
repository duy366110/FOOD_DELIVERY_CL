<template>
    <router-view />
    <CommonLoaderComponent />
</template>

<script>
    import CommonLoaderComponent from "../components/common-component/CommonLoader.vue";

    export default {
        name: "AuthView",
        components: {
            CommonLoaderComponent
        }
    }
</script>