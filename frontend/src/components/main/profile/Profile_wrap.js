import { connect } from "react-redux"
import { getPosts } from "../../../store/reducers/profileRed"
import Profile from "./Profile"

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}
export default connect(mapStateToProps, { getPosts })(Profile)