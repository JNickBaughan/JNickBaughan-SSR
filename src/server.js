import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/app';

const server = express();

server.get('/', (req, res) => {
    const content = renderToString(<App />);
    res.send(content);
});

server.listen(3000, () => {
    console.log('listening on port 3000');
})