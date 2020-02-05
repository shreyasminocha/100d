import qs from 'query-string';
import removeNilAxes from './_lib/remove-nil-axes';

function permalink(request, response) {
    const modifiedAxes = removeNilAxes(request.body);
    const queryString = qs.stringify(modifiedAxes);

    response.writeHead(302, {
        location: `/?${queryString}`
    });
    response.end();
};

export default permalink;
