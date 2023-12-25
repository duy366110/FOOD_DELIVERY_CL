<template>
    <button v-if="type === 'normal'" @click="btnClickHandler" class="common-button-component">{{ title }}</button>

    <button
        v-if="type === 'danger'"
        @click="btnClickHandler"
        class="common-button-component btn-danger">
        {{ title }}
    </button>

    <button
        v-if="type === 'primary'"
        @click="btnClickHandler"
        class="common-button-component btn-primary">
        {{ title }}
    </button>
</template>

<script>
    export default {
        name: "CommonButton",
        props: ['title', 'type'],
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
        margin: 0px 0.5rem;
        padding: 1rem 1.5rem;
        text-transform: uppercase;
    }

    .btn-danger {
        background-color: #dc3545;
    }

    .btn-primary {
        background-color: #174f8b;
    }

</style>