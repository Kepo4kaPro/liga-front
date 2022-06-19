<template>
    <div class="ui-autocomplete">
        <v-autocomplete
            v-bind="$attrs"
        ></v-autocomplete>
    </div>
</template>

<script>
export default {
    name: 'UiAutocomplete'
}
</script>

<style lang="scss">
.ui-autocomplete {
    height: 56px;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;

    & .v-field__overlay {
        opacity: 0;
    }

    & .v-field__outline {
        display: none;
    }
}
</style>