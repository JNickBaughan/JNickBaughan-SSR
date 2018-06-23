import { BrowserRouter } from 'react-router-dom';
import Routes from "../common/router/routes";
import React from 'react';
import ReactDOM from 'react-dom';

//hydrate is used in conjunction with static html rendered server side
//the below resulting html rendered by the JSX is expected already exist in the DOM
//it was created on the server and then once on the client this will take over and 'breath life into the app'
ReactDOM.hydrate(<BrowserRouter>
                    <Routes />
                 </BrowserRouter>, document.getElementById('root'));
