const express = require('express');
const server = express();

const projectRouter = require('./routers/projectsRouter');
const actionRouter = require('./routers/actionsRouter');

server.use(express.json());


server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


server.listen(5050);