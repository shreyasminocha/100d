import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    gradient: {
        '&::-webkit-slider-runnable-track, &::-moz-range-track ': {
            background: (props) => {
                return `linear-gradient(90deg, ${props.minColor}, ${props.maxColor})`;
            }
        }
    }
});

const Slider = (props) => {
    const dataListId = `${props.name.toLowerCase()}-ticks`;
    const classes = useStyles(props);

    return <fieldset>
        <label htmlFor={props.name.toLowerCase()}>{props.name}</label>

        <div>
            <input
                name={props.name.toLowerCase()} type="range"
                min="-50" max="50"
                list={dataListId}
                dataminlabel={props.minLabel} datamaxlabel={props.maxLabel}
                className={classes.gradient}
            ></input>

            <span className="min-label">&nbsp;{props.minLabel}&nbsp;</span>
            <span className="max-label">&nbsp;{props.maxLabel}&nbsp;</span>
        </div>

        <datalist id={dataListId}>
            <option value="-50" label={props.minLabel}></option>
            <option value="50" label={props.maxLabel}></option>
        </datalist>
    </fieldset>;
};

export default Slider;
