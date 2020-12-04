import React, { Component } from "react";
import { Table } from "reactstrap";
import NewAdventurerModal from "./NewAdventurerModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class AdventurerList extends React.Component {
    render() {
        const adventurers = this.props.adventurers;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Race</th>
                        <th>Attack</th>
                        <th>Armor Class</th>
                        <th>Hit Points</th>
                        <th>Magic</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!adventurers || adventurers.lenght <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Go Create Adventurers</b>
                            </td>
                        </tr>
                    ) : (
                        adventurers.map(adventurer => (
                        <tr key={adventurer.pk}>
                            <td>{adventurer.name}</td>
                            <td>{adventurer.char_class}</td>
                            <td>{adventurer.char_race}</td>
                            <td>{adventurer.atk}</td>
                            <td>{adventurer.ac}</td>
                            <td>{adventurer.hp}</td>
                            <td>{adventurer.mgc}</td>
                            <td align="center">
                                <NewAdventurerModal
                                    create={false}
                                    adventurer={adventurer}
                                    resetState={this.props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={adventurer.pk}
                                    resetState={this.props.resetState}
                                />
                            </td>
                        </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default AdventurerList;