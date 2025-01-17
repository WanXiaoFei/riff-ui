<script setup lang="ts">
import { ref } from "vue"
import type { ButtonProps } from "./types"

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

</script>


<template>
    <component :is="tag" ref="_ref" class="r-button" :type="tag === 'button' ? nativeType : void 0" :class="{
        [`r-button--${type}`]: type,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
    }">
        <span>
            <slot></slot>
        </span>
    </component>
</template>

<style scoped>
@import "./style.css";
</style>