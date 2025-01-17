import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: string;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    icon?: string;
    loading?: boolean;
    loadingIcon?: string;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
  }