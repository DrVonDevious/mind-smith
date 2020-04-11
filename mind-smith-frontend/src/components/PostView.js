import React, { Component } from 'react'
import { Button, Header, Container, Image } from 'semantic-ui-react'

class PostView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postId: this.props.postId
        }
    }

    getPostInfo = () => {
        fetch(`http://localhost:3000/posts/${this.state.postId}`)
            .then(response => response.json())
            .then(postInfo => {
                this.setState({
                    title: postInfo.post.title,
                    body: postInfo.post.body,
                    author: postInfo.post.author,
                    authorImage: postInfo.post.authorImage,
                    channel: postInfo.post.channel,
                    similarPostsChannel: postInfo.similarPosts.byChannel
                })
            })
    }

    componentDidMount() {
        this.getPostInfo()
    }

    render() {
        return (this.state.postInfo === null
            ? <Container key="Post" text><Header as='h2'>Loading...</Header></Container>
            : [<Container text>
                <Header as='h2'>{this.state.title}</Header>
                <p>
                    {this.state.body}
                </p>
                <Image src={this.state.authorImage} avatar />
                <span>MindSmith: {this.state.author}</span>
                <p>Channel: {this.state.channel}</p>
                <Button>Click Me</Button>
            </Container >,
            <Container key="Suggested" text>Suggested Posts</Container>
            ]
        )
    }
}

export default PostView
