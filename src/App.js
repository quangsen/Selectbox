import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import SelectMenu from './components/SelectMenu';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SelectMenu: false,
            inputValue: '',
            listItem: [
                'Nguyen Van Quang',
                'Vu Hien',
                'Nguyen Van Dam',
                'Nguyen Chi Quang',
                'Chuong Van Minh',
            ],
            inputs: {
                active: 0
            },
            selected: 0,
            icon: {
                key: ''
            }
        };
    }

    ActiveFocus = (value) => {
        this.setState({
            SelectMenu: true,
        })
    }

    valueInput = (key) => {
        this.setState({
            inputValue: this.state.listItem[key],
            SelectMenu: false,
            selected: key
        });
    }

    onChange = (value) => {
        this.setState({
            inputValue: value
        }); 
    }

    onKeyDown = (event) => {
        const { listItem, inputs } = this.state;
        switch(event.key) {
            case 'ArrowDown':
                let activeDown = inputs.active + 1;
                if(activeDown >= listItem.length) activeDown = 0
                this.setState({
                    inputs: {
                        active: activeDown,
                        SelectMenu: false,
                    },
                    selected: activeDown
                });
                break;
            case 'ArrowUp':
                let activeUp = inputs.active - 1;
                if(activeUp < 0 ) activeUp = listItem.length -1 
                this.setState({
                    inputs: {
                        active: activeUp,
                        SelectMenu: false,
                    },
                    selected: activeUp
                });
                break ;
            case 'Enter':
                this.setState({
                    inputValue: listItem[inputs.active],
                    SelectMenu: false
                }, () => {
                    document.getElementById('input').blur();
                });
                break ;
            default:
                break;
        }
    }

    componentDidMount() {
        window.addEventListener('click', (event) => {
            if(!event.target.classList.contains('item') && !event.target.classList.contains('input')) {
                this.setState({
                    SelectMenu: false
                });
            }
        });
    }
        
    render() {
        return (
            <div className="App">
                <div 
                    className='parentSelect' 
                    onKeyDown={this.onKeyDown}
                >
                    <Input 
                        SelectMenu={this.state.SelectMenu} 
                        ActiveFocus={this.ActiveFocus} 
                        valueinput={this.state.inputValue}
                    />
                    <SelectMenu 
                        listItem={this.state.listItem} 
                        SelectMenu={this.state.SelectMenu} 
                        ActiveFocus={this.ActiveFocus}  
                        valueInput={this.valueInput}
                        selected={this.state.selected}
                    />
                    <p>man 3</p>
                </div>
            </div>
        );
    }
}

export default App;