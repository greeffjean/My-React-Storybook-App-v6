import * as React from 'react';
import Button from '../Atoms/Buttons/Button';
import { text, boolean } from '@storybook/addon-knobs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

type TArgs = {
    title: string;
    event: () => void;
    type: string;
    size: string;
    disabled?: boolean
}

export default {
    title: 'Button',
    component: Button as ComponentMeta<typeof Button>,
    args: {
        size: 'medium',
    }
}

const Template: ComponentStory<typeof Button> = (args: TArgs) => <Button {...args} />

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Log = Template.bind({});
export const Knob = Template.bind({});

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
    event: () => console.log("clicked!", process.env.STORYBOOK_THEME),
    type: 'secondary',
    disabled: boolean('Disabled', false)
}

// Components for reuse in Storybook
export const ButtonPrimary = () => <Button
    event={() => { }}
    size="medium"
    title="Primary Button"
    type="primary"
/>

