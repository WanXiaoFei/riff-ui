import { describe, it, test, vi, expect } from "vitest"
import { mount } from "@vue/test-utils"
import type { ButtonType } from "./types";

import Button from "./Button.vue"

describe("Button.vue", () => {
    // Props: tag
    it("设置tag prop时，应该呈现自定义标签", () => {
        const wrapper = mount(Button, {
            props: { tag: "a" },
        });
        expect(wrapper.element.tagName.toLowerCase()).toBe("a");
    });
    // Props: type
    it("设置type prop时，应该具有正确的类型类", () => {
        const types = ["primary", "success", "warning", "danger", "info"];
        types.forEach((type) => {
            const wrapper = mount(Button, {
                props: { type: type as ButtonType },
            });
            expect(wrapper.classes()).toContain(`r-button--${type}`);
        });
    });
    // Props: nativeType
    it("设置nativeType prop时，应该具有正确的nativeType属性", () => {
        const wrapper = mount(Button, {
            props: { nativeType: "submit" },
        });
        expect(wrapper.element.tagName).toBe("BUTTON");
        expect((wrapper.element as any).type).toBe("submit");
    });

    it.each([
        ["plain", "is-plain"],
        ["round", "is-round"],
        ["circle", "is-circle"],
        ["disabled", "is-disabled"],
        ["loading", "is-loading"],
      ])(
        "当prop %s 设置为true时，应该具有正确的类",
        (prop, className) => {
          const wrapper = mount(Button, {
            props: { [prop]: true }
          });
          expect(wrapper.classes()).toContain(className);
        }
      );
})
