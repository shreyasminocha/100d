const axesToQueryString = require('./_lib/axes-to-query-string');
const redis = require('redis');
const {promisify} = require('util');
const shortId = require('shortid');

const client = redis.createClient({url: process.env.DB_URL});
const set = promisify(client.set).bind(client);

async function shorten(request, response) {
    const queryString = axesToQueryString(request.body);
    const id = shortId.generate();

    await set(id, queryString);

    response.send(`/s/${id}`);
}

module.exports = shorten;
