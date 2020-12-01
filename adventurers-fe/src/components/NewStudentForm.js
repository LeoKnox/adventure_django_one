import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewAdventurerForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        char_class: "",
        char_race: "",
        atk: 0,
        ac: 0,
        hp: 0,
        mgc: 0,
    };

    componentDidMount() {
        if (this.props.adventurer) {
            const { pk, name, char_class, char_race, atk, ac, hp, mgc } = this.props.adventurer;
            this.setState({ pk, name, char_class, char_race, atk, ac, hp, mgc });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createAdventurer = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editAdventurer = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle()
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.adventurer ? this.editAdventurer : this.createAdventurer}>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="char_class">Character Class:</Label>
                    <Input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
            </Form>
        )
    }
}