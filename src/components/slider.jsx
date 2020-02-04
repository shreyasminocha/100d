import React from 'react';
import {createUseStyles} from 'react-jss';
import slugify from '@sindresorhus/slugify';

const useStyles = createUseStyles({
    gradient: {
        '&::-webkit-slider-runnable-track, &::-moz-range-track': {
            background: (props) => {
                return `linear-gradient(90deg, ${props.minColor}, ${props.maxColor})`;
            }
        }
    },

    labels: (props) => ({
        '&::before': { content: `'${props.minLabel}'` },
        '&::after': { content: `'${props.maxLabel}'` }
    })
});

const Slider = (props) => {
    const slugifiedName = slugify(props.name);
    const dataListId = `${slugifiedName}-ticks`;

    const classes = useStyles(props);

    return <div className="axis">
        <label htmlFor={slugifiedName}>{props.name}</label>

        <div className={classes.labels}>
            <input
                name={slugifiedName} type="range"
                min="-10" max="10"
                defaultValue={props.value}
                list={dataListId}
                dataminlabel={props.minLabel} datamaxlabel={props.maxLabel}
                className={classes.gradient}
            ></input>
        </div>

        <datalist id={dataListId}>
            <option value="-10" label={props.minLabel}></option>
            <option value="10" label={props.maxLabel}></option>
        </datalist>
    </div>;
};

export default Slider;
