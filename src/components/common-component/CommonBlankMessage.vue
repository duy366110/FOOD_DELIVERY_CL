<template>
    <h3 class="blank-message">{{ message }}</h3>
</template>

<script>
    export default {
        name: "CommonBlankMessage",
        props: ["message"]
    }
</script>

<style scoped>
    .blank-message {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        padding: 3.5rem 0rem;
        text-align: center;
        text-transform: capitalize;
    }
</style>