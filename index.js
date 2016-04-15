/**
 * swarm-stat
 *
 * For now it's basic kue-ui.
 **/

"use strict";

const kue = require('kue');
const express = require('express');
const ui = require('kue-ui');
const app = express();

// connect kue to appropriate redis, or omit for default localhost
const queue = kue.createQueue({});

ui.setup({
    apiURL: '/api', // IMPORTANT: specify the api url
    baseURL: '/kue', // IMPORTANT: specify the base url
    updateInterval: 5000 // Optional: Fetches new data every 5000 ms
});

// Mount kue JSON api
app.use('/api', kue.app);
// Mount UI
app.use('/kue', ui.app);

app.listen(3000);
