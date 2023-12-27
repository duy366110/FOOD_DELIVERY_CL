<template>
    <div class="common-input-component">
        <div class="form-group">
            <label class="form-label" :for="id">{{ label }}</label>
            <input
                :id="id"
                :type="type"
                class="form-control"
                :class="{'is-invalid': !valid?.status}"
                @blur="onBlurHandler"/>
            <small class="input-message-error" v-if="!valid?.status">{{ valid?.message }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonInput",
        props: ["label", "id", "type", "valid"],
        methods: {
            onBlurHandler(event) {
                this.$emit("onBlur", event);
            }
        }
    }
</script>

<style scoped>
    .form-control {
        margin-bottom: 1rem;   
    }
    .input-message-error {
        color: #dc3545;
        font-size: 1.4rem;
    }
</style>