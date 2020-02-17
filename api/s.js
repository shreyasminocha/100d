const axesToQueryString = require('./_lib/axes-to-query-string');
const shortId = require('shortid');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DB
    }
});

async function shorten(request, response) {
    const queryString = axesToQueryString(request.body);
    const id = shortId.generate();

    await knex('short').insert({
        id: id,
        path: queryString
    });

    const host = request.headers.host || 'https://100d.now.sh';
    response.send(`${host}/s/${id}`);
}

module.exports = shorten;
