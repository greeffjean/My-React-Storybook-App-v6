import * as Input from './Input.stories';
import * as Button from './Button.stories';


export default {
    titile: 'Subscription'
}

export const Subscription = () => {
    return (
        <form>
            <h4>Subscription Form</h4>
            <Input.Text />
            <Input.Number/>
            <br/>
            <br/>
            <Button.Secondary />
        </form>
    )
}