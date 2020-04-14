import React, { Component } from 'react'
<<<<<<< HEAD
import { Button, Header, Card, Image, List } from 'semantic-ui-react'
=======
import { Button, Header, Container, Image , Icon } from 'semantic-ui-react'
>>>>>>> 130f7c8543c33f02e89fbe6a06c47cbac7272228

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
                    created_at: postInfo.post.created_at,
                    similarPostsChannel: postInfo.similarPosts.byChannel
                }, () => console.log(this.state))
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
<<<<<<< HEAD
            this.state.postInfo === null
                ? <Card key="Post" text><Header as='h3'>Loading...</Header></Card>
                : this.postContent()
=======
            // {/* <!-- POST --> */}
                <div className="post">
                <div className="topwrap">
                    <div className="userinfo pull-left">
                        <div className="avatar">
                            <img src={this.state.authorImage} alt="" />


                        </div>
                    </div>
                    <div className="posttext pull-left">
                        <h2>{this.state.title}</h2>
                        <p> {this.state.body} </p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfobot">

                    <div className="likeblock pull-left">

                        <a href="#" className="up"><Icon name="thumbs up"></Icon>55</a>
                        <a href="#" className="down"><Icon name="thumbs down"></Icon>12</a>
                    </div>


                    <div className="posted pull-left">Posted on: &nbsp; {this.state.created_at} &nbsp; &nbsp;by: {this.state.author} </div>
                    <div className="clearfix"></div>
                </div>
                </div>
              // {/* <!-- POST --> */}

>>>>>>> 130f7c8543c33f02e89fbe6a06c47cbac7272228
        )
    }
}






// this.state.postInfo === null
//     ? <Container key="Post" text><Header as='h2'>Loading...</Header></Container>
//     : [
//       <Container text>
//         <Header as='h2'>{this.state.title}</Header>
//         <p>
//             {this.state.body}
//         </p>
//         <Image src={this.state.authorImage} avatar />
//         <span>MindSmith: {this.state.author}</span>
//         <p>Channel: {this.state.channel}</p>
//         <Button>Click Me</Button>
//     </Container >,
//     <Container key="Suggested" text>Suggested Posts</Container>
//     ]


export default PostView
