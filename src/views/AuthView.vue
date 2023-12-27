<template>
    <router-view />
    <CommonLoaderComponent />
    <CommonMessageComponent />
</template>

<script>
    import CommonLoaderComponent from "../components/common-component/CommonLoader.vue";
    import CommonMessageComponent from "@/components/common-component/CommonMessage.vue";

    export default {
        name: "AuthView",
        components: {
            CommonLoaderComponent,
            CommonMessageComponent
        }
    }
</script>