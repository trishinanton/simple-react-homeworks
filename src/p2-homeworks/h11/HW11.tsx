import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

export function HW11() {
    const [value1, setValue1] = useState(15)
    const [value2, setValue2] = useState(78)

    const changeValue = (value:[number,number]) =>{
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange = {setValue1}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={changeValue}
                    value = {[value1,value2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
