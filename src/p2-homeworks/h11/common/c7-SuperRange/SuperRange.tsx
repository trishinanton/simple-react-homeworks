import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {makeStyles, Slider, Typography} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number
};

const useStyles = makeStyles({
    root: {
        width: 300,
        paddingLeft:200
    },
});

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) =>{
        onChangeRange && onChangeRange(newValue as number)

    }

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Super Range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )

}

export default SuperRange
