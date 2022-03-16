import * as React from 'react';
import Button from '../Atoms/Buttons/Button'; 

type TArgs = {
    title: string;
    event: () => void;
    type: string;
    size: string
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

