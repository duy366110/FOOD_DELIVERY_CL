<template>
    <div v-if="$store.state.message.status" class="common-message-component">
        <p>{{ $store.state.message.content }}</p>
    </div>
</template>

<script>
    export default {
        name: "CommonMessage",
    }
</script>

<style scoped>
    .common-message-component {
        background-color: #174f8b;
        left: 0px;
        position: fixed;
        top: 0px;
        width: 100%;
    }
    .common-message-component p {
        color: #ffffff;
        font-size: 1.5rem;
        letter-spacing: .3px;
        margin-bottom: 0px;
        padding: 1.5rem 0rem;
        text-align: center;
    }
</style>