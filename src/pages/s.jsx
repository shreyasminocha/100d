import React from 'react';

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
        let to = '';

        try {
            const response = await fetch(apiUrl);
            to = await response.text();
        } catch (error) {
            console.error(error);
        }

        this.setState({
            url: to
        });
    }

    render() {
        if (this.state.url && typeof window !== `undefined`) {
            window.location.replace(this.state.url);
        }

        return <></>;
    }
}

export default Page;
