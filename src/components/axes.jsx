import React from 'react';
import slugify from '@sindresorhus/slugify';
import Slider from './slider';
import withQueryParams from './with-query-params';

const Axes = (props) => {
    const sliders = [];

    for (const question of props.data) {
        const slugifiedName = slugify(question.name);
        const valueInQuery = props.queryParams[slugifiedName];

        sliders.push(
            <Slider
                name={question.name}
                value={valueInQuery || 0}
                minLabel={question.minLabel} maxLabel={question.maxLabel}
                minColor={question.minColor} maxColor={question.maxColor}
            />
        );
    }

    return sliders;
};

export default withQueryParams(Axes);
