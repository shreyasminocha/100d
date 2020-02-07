const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient({url: process.env.DB_URL});
const get = promisify(client.get).bind(client);

async function getUrl(request, response) {
    const queryString = await get(request.query.id);
    response.writeHead(302, {
        location: `/?${queryString}`
    });
    response.end();
}

module.exports = getUrl;
