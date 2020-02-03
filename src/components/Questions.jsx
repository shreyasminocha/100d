import React from 'react';
import Slider from './Slider.jsx';

const Questions = (props) => {
    const sliders = [];

    for (const question of props.data) {
        sliders.push(
            <Slider
                name={question.name}
                minLabel={question.minLabel} maxLabel={question.maxLabel}
                minColor={question.minColor} maxColor={question.maxColor}
            />
        );
    }

    return sliders;
};

export default Questions;
