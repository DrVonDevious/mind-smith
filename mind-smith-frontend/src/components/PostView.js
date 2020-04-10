import React, { useState, useEffect } from 'react'
import { Button, Header, Container } from 'semantic-ui-react'

const PostView = (props) => {

    const postId = useState(props.postId);
    const postInfo = useState(0);

    // const getDocumentInfo = (postId) => {
    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(postInfo => { debugger })
    // }

    // useEffect(() => {
    //     getDocumentInfo(postId)
    // })

    return (postInfo === null
        ? <Container text><Header as='h2'>Loading...</Header></Container>
        : <Container text>
            <Header as='h2'>{postInfo.title}</Header>
            <p>
                {postInfo.body}
            </p>
            <p>MindSmith: {postInfo.user}</p>
            <p>Channel: {postInfo.channel}</p>
            <Button>Click Me</Button>
        </Container>
    )
}

export default PostView
