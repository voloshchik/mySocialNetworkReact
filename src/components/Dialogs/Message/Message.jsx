import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.dialog}>{props.message}
    
    <div><textarea name="message" id="message" cols="20" rows="1"></textarea></div>
    <div><button>добавить!</button>
    </div>

    
    </div>
}

export default Message;