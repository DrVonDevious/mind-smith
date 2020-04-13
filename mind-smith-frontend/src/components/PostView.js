import React, { Component } from 'react'
import { Button, Header, Card, Image, List } from 'semantic-ui-react'

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
                    similarPostsChannel: postInfo.similarPosts.byChannel,
                    similarPostsTag: postInfo.similarPosts.byTag
                })
            })
    }

    componentDidMount() {
        this.getPostInfo()
    }

    postContent = () => {
        return (
            <div className="col-lg-8 col-md-8">
                <Card fluid text>
                    <Header as='h2'>{this.state.title}</Header>
                    <p>
                        {this.state.body}
                    </p>
                    <Image src={this.state.authorImage} avatar />
                    <span>MindSmith: {this.state.author}</span>
                    <p>Channel: {this.state.channel}</p>
                    <Button>Click Me</Button>
                </Card >
                <Card fluid key="Suggested">
                    <List divided verticalAlign="middle">Suggested posts
                        {console.log(this.state)}
                        {this.state.similarPostsChannel ? this.state.similarPostsChannel.map(post => <Card><Header as="h3">{post.title}</Header><Header as="h4">{post.body.slice(0, 25)}...</Header></Card>) : "Loading..."}
                    </List>
                </Card>
            </div>
        )
    }
    render() {
        return (
            this.state.postInfo === null
                ? <Card key="Post" text><Header as='h3'>Loading...</Header></Card>
                : this.postContent()
        )
    }
}

export default PostView
