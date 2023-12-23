<template>
    <div class="common-loader-component" :class="{'active': $store.state.loader.status}">
        <div class="spinner-border text-dark" role="status">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonLoaderComponent"
    }
</script>

<style scoped>
    .common-loader-component {
        background-color: #b5b5b5ad;
        display: none;
        align-items: center;
        justify-content: center;
        left: 0px;
        height: 100%;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1001;
    }

    .active {
        display: flex;
    }

    .text-dark {
        font-size: 35px;
        height: 75px;
        width: 75px;
    }
</style>