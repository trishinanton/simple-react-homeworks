import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function AlternativeClock() {
    const [date, setDate] = useState<Date>()
    const [intId, setIntId] = useState<number>()
    const [show, setShow] = useState(false)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setIntId(id)
    }
    const stop = () => {
        clearInterval(intId)
    }

    const stringTime = date?.toLocaleTimeString('en-US') || <br/>
    const stringDate = date?.toLocaleDateString('ko-KR') || <br/>

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>
            {show ? <div>{stringDate}</div> : <br/>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default AlternativeClock
