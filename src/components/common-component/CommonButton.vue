<template>
    <button @click="btnClickHandler" class="common-button-component">{{ title }}</button>
</template>

<script>
    export default {
        name: "CommonButton",
        props: ['title'],
        methods: {
            btnClickHandler(payload) {
                this.$emit("btnClick", payload);
            }
        }
    }
</script>

<style scoped>
    .common-button-component {
        border: none;
        font-size: 1.8rem;
        outline: none;
        padding: 1rem 1.5rem;
        text-transform: uppercase;
    }
</style>