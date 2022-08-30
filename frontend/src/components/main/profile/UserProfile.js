import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Post from "./Post/Post";

const UserProfile = (props) => {
    useEffect(() => {
        console.log(props)
        if (props.users.length === 0) {
            axios("posts/api/post/")
                .then(posts => props.getPosts(posts.data))
        }
        // getUser()
    }, []);
    // function getUser() {
    //     let id = params.id
    //     if (id) {
    //         axios.get(`posts/api/post/`)
    //             .then((response) => props.updateUserName(response.data.name))
    //     } else {
    //         props.updateUserName(props.myName)
    //     }
    // }
    const posts = props.posts.map((post) => <Post title={post.title} body={post.body} key={post.id} id={post.id} />)
        .reverse()
    return (
        <div>
            <div>
                {posts}
            </div>
        </div>
    )
}
export default UserProfile