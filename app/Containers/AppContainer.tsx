import * as React from 'react';
import AppBody from '../Components/AppBody';

export default class AppContainer extends React.Component {
    constructor(props : object) {
        super(props);
    }

    render() {
        return (
            <AppBody startingColour={ "white"}/>
        )
    }
}