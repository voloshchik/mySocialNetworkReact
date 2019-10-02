const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ],

    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
    ],
    newMessageBody: " 3"
};
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = " ";
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
};
export const sendMessageCreator = () => {
    return { type: "SEND_MESSAGE" };
};
export const updateNewMessageCreator = body => {
    return { type: "UPDATE_MESSAGE_BODY", body: body };
};
export default dialogsReducer;
