import { connect } from "react-redux"
import { getPosts, addPost, deletePost, updateNewPostText, updateNewPostTitle } from "../../../store/reducers/profileRed"
import Profile from "./Profile"

const mapStateToProps = (state) => {
    return {
        userName: state.profile.userName,
        posts: state.profile.posts,
        newPostText: state.profile.newPostText,
        newPostTitle: state.profile.newPostTitle
    }
}
export default connect(mapStateToProps, { getPosts, addPost, deletePost, updateNewPostText, updateNewPostTitle })(Profile)