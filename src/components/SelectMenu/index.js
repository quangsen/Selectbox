import React, {
    Component
} from 'react';

export default class SelectMenu extends Component {
    selectElement = (key) => {
        this.props.valueInput(key)
    }

    render() {
        let itemActive = this.props.SelectMenu;
        const listSelect = this.props.listItem.map((e, i) => {
            return (
                <li 
                    className={this.props.selected === i ? 'active item' : 'item'} 
                    onClick={() => this.selectElement(i)} 
                    key={i} 
                    value={e}
                >
                    {e}
                </li>
            );
        });

        return (
            <div className='SelectMenu' id='SelectMenu'>
                <ul>
                    {itemActive ? listSelect: ''}
                </ul>
            </div>
        );
    }
}