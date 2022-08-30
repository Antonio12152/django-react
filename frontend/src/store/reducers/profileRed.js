const GET_POSTS = "get posts"
const initialState = {
    posts: []
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, ...action.posts] }
        default:
            return state
    }
}
export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export default profileReducer