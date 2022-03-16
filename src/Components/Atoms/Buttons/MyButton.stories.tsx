import * as React from 'react';
import Button from './Button'; 

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button title={'Primary'} event={() => window.alert('Primary')} type={'primary'} size={'medium'} />;
export const Secondary = () => <Button title={'Secondary'} event={() => window.alert('Secondary')} type={'secondary'} size={'large'} />;

/* I prefer the current story naming but for future reference, the stories can be renamed as seen below! */
// Primary.storyName = 'Button Primary';
// Secondary.storyName = 'Button Secondary';
