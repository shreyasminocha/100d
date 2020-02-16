const qs = require('query-string');

function axesToQueryString(axes) {
    const axesArray = Object.entries(axes);
    const modifiedAxesArray = axesArray.filter(([key, val]) => val !== '0');
    const modifiedAxes = Object.fromEntries(modifiedAxesArray);

    return `/?${qs.stringify(modifiedAxes)}`;
}

module.exports = axesToQueryString;
