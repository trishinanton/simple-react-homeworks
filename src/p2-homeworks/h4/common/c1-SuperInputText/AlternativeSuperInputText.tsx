import React, {ChangeEvent, useState} from 'react'
import c from './SuperInputText.module.css'

export type Input ={
    value: string
    onChangeText: (value:string)=>void
}



function AlternativeSuperInputText(props:Input) {
    const [error, setError] = useState<string|null>(null)

    const onChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget)
        props.onChangeText(e.currentTarget.value.trim())
        !e.currentTarget.value.trim() ? setError('Field is empty'):setError('')
    }

    return (
        <>
            <input onChange={onChangeValue} className={error ? c.errorInput:''} />
            <span className={c.error}>{error}</span>
        </>


    )
}

export default AlternativeSuperInputText
