import React, { Component } from 'react';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleSubmit = e => {
        e.preventDefault();
        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    render() {
        return <div></div>;
    }
}

export default Form;