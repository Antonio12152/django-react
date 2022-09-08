import React from "react"

const Post = (props) => {
    return (
        <div>
            <h3>{props.title} </h3>
            <p>{props.body}</p>
            <button type="button" onClick={() => props.deletePost(props.id)}>Delete</button>
        </div>
    )
}
export default Post