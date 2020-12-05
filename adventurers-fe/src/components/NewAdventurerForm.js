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
                        name="char_class"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.char_class)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="char_race">Character Race:</Label>
                    <Input
                        type="text"
                        name="char_race"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.char_race)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="atk">Attack:</Label>
                    <Input
                        type="number"
                        name="atk"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.atk)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="ac">Armor Class:</Label>
                    <Input
                        type="number"
                        name="ac"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.ac)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="hp">Hit Points:</Label>
                    <Input
                        type="number"
                        name="hp"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.hp)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="mgc">Magic:</Label>
                    <Input
                        type="number"
                        name="mgc"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.mgc)}
                    />
                </FormGroup>
                <Button>Create</Button>
            </Form>
        );
    }
}

export default NewAdventurerForm;