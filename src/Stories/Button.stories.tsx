import * as React from 'react';
import Button from '../Atoms/Buttons/Button'; 
import { text, boolean } from '@storybook/addon-knobs';

type TArgs = {
    title: string;
    event: () => void;
    type: string;
    size: string;
    disabled?: boolean
}

export default {
    title: 'Button',
    component: Button,
    args: {
        size: 'medium',
    }
}

const Template = (args: TArgs) => <Button {...args}/>

export const Primary = Template.bind({}) as any
export const Secondary = Template.bind({}) as any
export const Log = Template.bind({}) as any
export const Knob = Template.bind({}) as any

Primary.args = {
    title: 'Primary',
    event: () => window.alert('Primary'),
    type: 'primary'
}
Secondary.args = {
    title: 'Secondary',
    event: () => window.alert('Secondary'),
    type: 'secondary'
}
Log.args = {
    title: 'Secondary',
    event: () => console.log("clicked!"),
    type: 'secondary'
}
Knob.args = {
    title: text('Label', 'Knob Button'),
    event: () => console.log("clicked!"),
    type: 'secondary',
    disabled: boolean('Disabled', false)
}

