import React from 'react';
import {createUseStyles} from 'react-jss';
import slugify from '@sindresorhus/slugify';
import './slider.css';

const useStyles = createUseStyles({
    gradient: {
        '&::-webkit-slider-runnable-track': {
            background: (props) => {
                return `linear-gradient(90deg, ${props.minColor}, ${props.maxColor})`;
            }
        },
        '&::-moz-range-track': {
            background: (props) => {
                return `linear-gradient(90deg, ${props.minColor}, ${props.maxColor})`;
            }
        }
    }
});

const Slider = (props) => {
    const slugifiedName = slugify(props.name);
    const dataListId = `${slugifiedName}-ticks`;

    const classes = useStyles(props);

    return <div className="axis">
        <label htmlFor={slugifiedName}>{props.name}</label>

        <datalist id={dataListId}>
            <option value="-10" label={props.minLabel}>{props.minLabel}</option>
            <option value="10" label={props.maxLabel}>{props.maxLabel}</option>
        </datalist>

        <input
            name={slugifiedName} type="range"
            min="-10" max="10"
            defaultValue={props.value}
            list={dataListId}
            className={classes.gradient}
        ></input>
    </div>;
};

export default Slider;
