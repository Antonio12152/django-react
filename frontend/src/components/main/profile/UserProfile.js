import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Post from "./Post/Post";

const UserProfile = (props) => {
    useEffect(() => {
        console.log(props)
        if (props.posts.length === 0) {
            axios("post/api/post/")
                .then(posts => props.getPosts(posts.data))
        }
        // getUser()
    }, []);
    // function getUser() {
    //     let id = params.id
    //     if (id) {
    //         axios.get("post/api/post/")
    //             .then((response) => props.updateUserName(response.data.name))
    //     } else {
    //         props.updateUserName(props.myName)
    //     }
    // }
    const addPost = () => {
        if (props.newPostText == 0 || props.newPostTitle == 0) return
        axios({
            method: 'post',
            url: 'post/api/post/',
            data: {
                title: props.newPostTitle,
                body: props.newPostText
            }
        })
            .then((post) => props.addPost(post.data));
    }
    const deletePost = (id) => {
        axios.delete(`post/api/post/${id}`)
            .then(() => props.deletePost(id));
    }
    const newPostChangeText = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }
    const newPostChangeTitle = (e) => {
        let text = e.target.value
        props.updateNewPostTitle(text)
    }
    const posts = props.posts.map((post) => <Post title={post.title} body={post.body} key={post.id} id={post.id} deletePost={deletePost} />)
    return (
        <div>
            <div>
                <h3>{props.userName}</h3>
            </div>
            <div>
                <textarea name="post" value={props.newPostTitle} onChange={newPostChangeTitle}></textarea>
                <textarea name="post" value={props.newPostText} onChange={newPostChangeText}></textarea>
                <button type="button" onClick={addPost}>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}
export default UserProfile