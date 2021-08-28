import React from 'react'
import c from './Message.module.css';

type PropsType={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:PropsType) {
    return (
        <div>
            <div className={c.message}>
                <div className={c.message__wrapper+' '+c.content}>
                    <div className={c.content__avatar}><img src={props.avatar} alt=""/></div>
                    <div className={c.content__body}>
                        <div className={c.content__name}>{props.name}</div>
                        <div className={c.content__message}>
                            <div className={c.content__messagetext}>{props.message}</div>
                            <div className={c.content__time}>{props.time}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={c.input}>
                <input type="text"/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Message
