const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState={
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 }
    ],
    newPostText: "555qqq"
}
const profileReducer = (state=initialState, action) => {
debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = " ";

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return { type: "ADD-POST" };
};
export const updateNewPostTextActionCreator = text => {
    return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};
export default profileReducer;
