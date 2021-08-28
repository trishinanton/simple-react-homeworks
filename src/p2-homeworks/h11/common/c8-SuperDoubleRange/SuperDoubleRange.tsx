import React, {useState} from 'react'
import { Slider, Typography} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value1,
        // min, max, step, disable, ...
    }
) => {
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const onChangeCallback = (e: any) => {
        setValue(e.currentTarget.value)
        onChangeRange && onChangeRange(e.currentTarget.value)

    }

    return (
        <div>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}

export default SuperDoubleRange

