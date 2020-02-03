import React from 'react';
import {Location} from '@reach/router';
import qs from 'query-string';

const withQueryParams = (ComponentToWrap) => (props) => {
    return <Location>
        {({location}) => (
            <ComponentToWrap
                {...props}
                queryParams={location.search ? qs.parse(location.search) : {}}
            />
        )}
    </Location>;
};

export default withQueryParams;
