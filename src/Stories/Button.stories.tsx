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
        event: () => window.alert('Alert')
    }
}

export const Primary = () => <Button title={'Primary'} event={() => window.alert('Primary')} type={'primary'} size={'medium'} />;
export const Secondary = () => <Button title={'Secondary'} event={() => window.alert('Secondary')} type={'secondary'} size={'small'} />;

/* I prefer the current story naming but for future reference, the stories can be renamed as seen below! */
// Primary.storyName = 'Button Primary';
// Secondary.storyName = 'Button Secondary';

const Template = (args: TArgs) => <Button {...args}/>

export const ButtonControls = Template.bind({}) as any

ButtonControls.args = {
    title: 'Button',
    event: () => null,
    type: 'secondary',
    size: 'small'
}

ButtonControls.storyName = 'Button Controls'
