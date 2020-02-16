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
    const [data] = await knex('short')
        .select('path')
        .where('id', request.query.id);

    console.log(data.path);

    response.send(`/?${data.path}`);
}

module.exports = getUrl;
