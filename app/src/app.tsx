import * as React from 'react';
import axios from 'axios';

interface Props {}

class App extends React.Component {
    data = null;
    constructor(props: Props) {
        super(props);
        axios.get('localhost:3001').then(res => {
            this.data = res.data;
            console.log(res.data);
        });

    }
    componentWillMount() {
            }
    render() {
        return (<h1>this.data</h1>);
    }
}

export default App;
