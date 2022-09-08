const GET_POSTS = "get posts"
const ADD_POST = "add post"
const DELETE_POST = "delete post"
const UPDATE_NEWPOSTTEXT = "update new post text"
const UPDATE_NEWPOSTTITLE = "update new post tilte"
const initialState = {
    userName: "Anton",
    posts: [],
    newPostText: "",
    newPostTitle: ""
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, ...action.posts] }
        case ADD_POST:
            return { ...state, posts: [...state.posts, action.post], newPostText: "", newPostTitle: "" }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post.id !== action.id) }
        case UPDATE_NEWPOSTTEXT:
            return { ...state, newPostText: action.newPostText }
        case UPDATE_NEWPOSTTITLE:
            return { ...state, newPostTitle: action.newPostTitle }
        default:
            return state
    }
}
export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const addPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const updateNewPostText = (newPostText) => ({ type: UPDATE_NEWPOSTTEXT, newPostText })
export const updateNewPostTitle = (newPostTitle) => ({ type: UPDATE_NEWPOSTTITLE, newPostTitle })
export default profileReducer