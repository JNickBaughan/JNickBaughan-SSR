import express from 'express';
import renderServerSideApp from './server-side-render';

const server = express();

//creates static file handler for the client directory to be able to serve js file
server.use(express.static('build/client'));

server.get('*', renderServerSideApp);

server.listen(3000, () => {
    console.log('listening on port 3000');
});
