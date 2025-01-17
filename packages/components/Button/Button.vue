<script setup lang="ts">
import { ref, computed } from "vue"
import type { ButtonProps, ButtonInstance } from "./types"
import { RIcon } from "../Icon"

defineOptions({
    name: 'RButton'
});

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    type: 'primary',
    nativeType: 'button',
});

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const iconStyle = computed(() => ({
    marginRight: slots.default ? "6px" : "0px",
}));

defineExpose<ButtonInstance>({
    ref: _ref,
});

</script>


<template>
    <component :is="tag" ref="_ref" class="r-button" :type="tag === 'button' ? nativeType : void 0" :class="{
        [`r-button--${type}`]: type,
        [`r-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
    }" :disabled="disabled || loading ? true : void 0">
        <template v-if="loading">
            <slot name="loading">
                <r-icon class="loading-icon" :icon="loadingIcon || 'spinner'" :style="iconStyle" size="1x" spin />
            </slot>
        </template>
        <r-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle" />
        <span>
            <slot></slot>
        </span>
    </component>
</template>

<style scoped>
@import "./Button.css";
</style>