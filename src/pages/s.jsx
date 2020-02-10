import React from 'react'
import {Redirect} from '@reach/router';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {url: null};
    }

    async componentDidMount() {
        const {protocol, host} = this.props.location;
        const id = this.props['*'];
        const apiUrl = `${protocol}//${host}/api/s/${id}`;

        console.log(apiUrl);

        this.setState({
            url: await (await fetch(apiUrl)).text()
        });
    }

    render() {
        if (this.state.url !== null) {
            return <Redirect to={`${this.state.url}`}/>;
        }

        return <div></div>;
    }
}

export default Page;
