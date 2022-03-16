import Input from '../Atoms/Inputs/Input';

export default {
    title: 'Form/Input',
    component: Input
}

export const Text = () => <Input
    name={'text'}
    type={'text'}
    placeHolder={'My Input'}
    required={false}
    className={'primary'}
    label={'My Label'} />;

    export const Number = () => <Input
    name={'number'}
    type={'number'}
    placeHolder={'My Input'}
    required={true}
    className={'secondary'}
    label={'My Label'} />;






