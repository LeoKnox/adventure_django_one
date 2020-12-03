import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AdventurerList from "./AdventurerList";
import NewAdventurerModal from "./NewAdventurerModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
    state = {
        adventurers: []
    };

    componentDidMount() {
        this.resetState();
    }

    getAdventurers = () => {
        axios.get(API_URL).then(res => this.setState({ adventurers: res.data }));
    };

    resetState = () => {
        this.getAdventurers();
    };

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <AdventurerList
                            adventurers={this.state.adventurers}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewAdventurerModal create={true} resetState={this.resetState} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;