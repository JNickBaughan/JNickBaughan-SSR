import React from 'react';
import { Route } from 'react-router-dom';
import Property from "../../client/properties/property";
import Building from "../../client/Buildings/buildings";

export default () => {
    return (
        <div>
            <Route exact path="/" component={Property} />
            <Route exact path="/building" component={Building} />
        </div>
    );
}