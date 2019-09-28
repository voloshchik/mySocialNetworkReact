import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.dialog}>{props.message}
    <div><button>добавить</button>
    <div><textarea name="message" id="message" cols="5" rows="5"></textarea></div>
    </div>
    
    </div>
}

export default Message;