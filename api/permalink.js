import axesToQueryString from './_lib/axes-to-query-string';

function permalink(request, response) {
    response.writeHead(302, {
        location: `/?${axesToQueryString(request.body)}`
    });
    response.end();
};

export default permalink;
