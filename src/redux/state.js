const ADD_POST="ADD-POST"
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT"
 
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
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },
    dispatch(action) {
        if (action.type ===ADD_POST ) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " ";
            this._callSubcriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        }
    },
    updateNewPostText(newText) {},
    addPost() {}
};
export const addPostActionCreator=()=>{
    return {type:"ADD-POST"}
}
 export const updateNewPostTextActionCreator=(text)=>{
    return {type:"UPDATE-NEW-POST-TEXT",newText:text}
}  
window.store=store
export default store;
