import {rerenderEntireTree} from '../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: "Blabla", likesCount: 11 },
            { id: 4, message: "Dada", likesCount: 11 }
        ],
        newPostText:"555"
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
};
export let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}
export let addPost = postMessage => {
    debugger;
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};
console.log(state.profilePage);
export default state;
