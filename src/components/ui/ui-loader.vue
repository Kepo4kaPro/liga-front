<template>
    <slot></slot>

    <div
        v-if="modelValue"
        class="ui-loader"
    >
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script>
export default {
    name: 'UiLoader',

    props: {
        modelValue: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style lang="scss">
.ui-loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .75);
}
</style>