import type { Component } from "vue";
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";

export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    nativeType?: string;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
}