import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';

import { RButton } from 'riff-ui';

type Story = StoryObj<typeof RButton> & {argTypes: ArgTypes};

const meta: Meta<typeof RButton> = {
    title: 'Example/Button',
    component: RButton,
    tags: ["autodocs"],
    argTypes: {
        tag: {
            control: { type: 'select' },
            options: ['button', 'a', 'div'],
        },
        type: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'danger', 'warning', 'info'],
        },
        nativeType: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
        plain: {
            control: { type: 'boolean' },
        },
        round: {
            control: { type: 'boolean' },
        },
        circle: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        loading: {
            control: { type: 'boolean' },
        },
    }
}

const container = (val: string) => {
    return `<div style="padding: 10px;">${val}</div>`
}

export const Default: Story & {args: {content: string}} = {
    argTypes: {
        content: {
            control: { type: 'text' },
        }
    },
    args: {
        type: 'primary',
        content: 'Button',
        nativeType: 'button',
        plain: false,
        round: false,
        circle: false,
        disabled: false,
        loading: false,
    },
    render: (args) => ({
        components: {
            RButton
        },
        setup() {
            return { args }
        },
        template: container(
            `
            <r-button v-bind="args">{{args.content}}</r-button>
            <r-button v-bind="args">{{args.content}}</r-button>
            `
        )
    })
}

export default meta;
