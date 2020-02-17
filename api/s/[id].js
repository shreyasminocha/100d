const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DB
    }
});

async function getUrl(request, response) {
    const records = await knex('short')
        .select('path')
        .where('id', request.query.id);

    if (records.length !== 1) {
        response.writeHead(404);
        response.end();
        return;
    }

    const [record] = records;
    response.writeHead(302, {location: record.path});
    response.end();
}

module.exports = getUrl;
