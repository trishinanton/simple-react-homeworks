import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string|null
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string|null
    totalUsers: number
    onKeyPressHandler:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name ? name:''} onChange={setNameCallback} className={error ? inputClass:''} onKeyPress={onKeyPressHandler}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
