import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';

import { RIcon } from 'riff-ui';

type Story = StoryObj<typeof RIcon> & {argTypes: ArgTypes};

const meta: Meta<typeof RIcon> = {
    title: 'Example/Icon',
    component: RIcon,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'danger', 'warning', 'info'],
        },
        icon: {
            control: { type: 'text' },
        },
        color: {
            control: { type: 'color' },
        },
        size: {
            control: { type: 'select' },
            options: ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
        },
    }
}

const container = (val: string) => {
    return `<div style="padding: 10px;">${val}</div>`
}

export const Default: Story = {
    argTypes: {},
    args: {
        type: 'primary',
        icon: 'spinner',
        color: '#000',
        size: '2xl',
    },
    render: (args) => ({
        components: {
            RIcon
        },
        setup() {
            return { args }
        },
        template: container(
            `
            <r-icon v-bind="args" />
            `
        )
    })
}

export default meta;
