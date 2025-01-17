
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export type IconType = "primary" | "success" | "warning" | "danger" | "info";

export interface IconProps {
    icon: object | Array<string> | string | IconDefinition;
    size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
    type?: IconType;
    color?: string;
}