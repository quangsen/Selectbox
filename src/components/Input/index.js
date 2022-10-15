import React, {
    Component
} from 'react';
import Keydown from 'react-icons/lib/fa/angle-down';

export default class Input extends Component {
    onfocus = () => {
        this.props.ActiveFocus();
    }

    onChange = (event) => {
        this.props.onChange(event.target.value)
    }

    render() { 
        let {valueinput} = this.props;
        return (
            <div className='input'>
                <input 
                    onFocus={this.onfocus} 
                    className={'input '}
                    placeholder={this.props.valueinput}
                    id='input'
                />
                <p>girl 1</p>
            </div>
        );
    }
}