import * as React from 'react';

export interface SetBgColourProps {
   startingColour: string;
}

export interface AppState {
    bgColour: string
}

export default class AppBody extends React.Component<SetBgColourProps, AppState> {    
    constructor(props: SetBgColourProps, context: any)
    {
        super(props, context);

        this.state = {
            bgColour: this.props.startingColour
        };

        this.changeColour = this.changeColour.bind(this);
    }

    private changeColour(newColour : string) {
        this.setState({
            bgColour: newColour
        });
    }

    render() {
        return (
            <div style={ { backgroundColor : this.state.bgColour } }>
                <p>
                    I am some text, more text.
                    The background colour is currently set to: '{this.state.bgColour}'
                </p>

                <hr />

                <button onClick={ () => this.changeColour("blue") }>Blue</button>
                <button onClick={ () => this.changeColour("red") }>Red</button>
                <button onClick={ () => this.changeColour(this.props.startingColour)}>Reset</button>
                
            </div>
        )
    }
}