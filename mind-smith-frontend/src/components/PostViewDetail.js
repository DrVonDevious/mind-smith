import React, { Component } from 'react'
import { Button, Header, Container, Image, Icon, Card, List } from 'semantic-ui-react'

class PostViewDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postId: this.props.match.params.id
        }
    }

    getPostInfo = () => {
        fetch(`http://localhost:3000/posts/${this.state.postId}`)
            .then(response => response.json())
            // .then(console.log)
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
            // {/* <!-- POST --> */}
            <div className="post">
                {console.log(this.props.match.params.id)}
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


export default PostViewDetail