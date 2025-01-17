<script setup lang="ts">
import { computed } from "vue";
import { omit } from "lodash-es";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";

defineOptions({
    name: "RIcon",
    inheritAttrs: false,
});

const props = defineProps<IconProps>();

const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
    <i class="r-icon" :class="{ [`r-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>

<style scoped>
@import "./Icon.css";
</style>