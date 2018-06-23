import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from "../common/router/routes";
//this is basically the JS that runs on the server. 
//It's counterpart is client.js(bundle.client.js) that runs on the client. Client.js takes over once on the client
//below just creates a static html file and sends to the server
//all the JS here is only used to create the static html. Think the event handlers in the components.
//once on the client, client.js takes over and initializes the static html
// this will actually set up the event handlers. Without this any JS setup on the server won't do anything...
const renderServerSideApp = (req, res) => {
    const content = renderToString(<StaticRouter location={req.url} context={{}}>
                                        <Routes />
                                    </ StaticRouter>);
    const html = `<html>
                    <head>
                    </head>
                    <body>
                        <div id="root">
                                ${content}
                        </div>
                        <script src="bundle.client.js"></script>
                    </body>
                  </html>`
    res.send(html);
}

export default renderServerSideApp;