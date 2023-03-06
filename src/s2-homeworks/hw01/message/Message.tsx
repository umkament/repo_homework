import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
     <div id={'hw1-message-' + props.message.message} className={s.message}>
       <div className={s.imageAndText}>
         <img
            id={'hw1-avatar-1'}
            // создаёт студент
            src={props.message.user.avatar}
            alt={'avatar'}
            //
         />
         <div className={s.text}>
           <div id={'hw1-name-1'} className={s.name}>
             {/*создаёт студент*/}
             {props.message.user.name}
             {/**/}
           </div>
           <pre id={'hw1-text-1'} className={s.messageText}>
                        {/*создаёт студент*/}
             {props.message.message.text}
             {/**/}
                    </pre>
         </div>
       </div>
       <div id={'hw1-time-1'} className={s.time}>
         {/*создаёт студент*/}
         {props.message.message.time}
         {/**/}
       </div>
     </div>
  )
}

export default Message
