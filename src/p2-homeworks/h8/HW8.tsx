import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type PeopleType = {
    _id: number
    name: string
    age: number
}
export type UserType = Array<PeopleType>

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople)

    const finalPeople = people.map((p: PeopleType) => (
        <div key={p._id} style={{display:'flex', width:'200px', justifyContent:'space-between', paddingLeft:'20px'}}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload:18}))
    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}
            <div style={{display:'flex'}}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div style={{paddingLeft:'10px', paddingRight:'10px'}}><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={sortCheck}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
