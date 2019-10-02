import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _callSubcriber() {
        console.log("state change");
    },

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: "Blabla", likesCount: 11 },
                { id: 4, message: "Dada", likesCount: 11 }
            ],
            newPostText: "555"
        },

        dialogsPage: {
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
            newMessageBody: " 3",
            sidebar:" "
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },
    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)
        
            this._callSubcriber(this._state);
        }
    }




window.store = store;
export default store;
