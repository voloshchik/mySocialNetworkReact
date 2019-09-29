import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/state";
const Dialogs = props => {
    let newMessageBody = props.state.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
        // console.log(e.target)
    };
    let onNewMessageChenge = e => {
        console.log(e.target.value);
        let body = e.target.value;
        props.dispatch(updateNewMessageCreator(body));
    };
    let dialogsElements = props.state.dialogs.map(d => (
        <DialogItem name={d.name} id={d.id} />
    ));
    let messagesElements = props.state.messages.map(m => (
        <Message message={m.message} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder="You enter message"
                            onChange={onNewMessageChenge}
                            value={newMessageBody}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
