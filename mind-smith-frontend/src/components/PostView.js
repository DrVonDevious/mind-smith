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

// {/* <!-- POST --> */}
// <div className="post">
// <div className="topwrap">
//     <div className="userinfo pull-left">
//         <div className="avatar">
//             <img src="images/avatar3.jpg" alt="" />
//         </div>
//     </div>
//     <div className="posttext pull-left">
//         <p>post text here</p>
//     </div>
//     <div className="clearfix"></div>
// </div>                              
// <div className="postinfobot">

//     <div className="likeblock pull-left">
//         <a href="#" className="up"><i className="fa fa-thumbs-o-up"></i>55</a>
//         <a href="#" className="down"><i className="fa fa-thumbs-o-down"></i>12</a>
//     </div>

//     <div className="posted pull-left">Posted on : 20 Nov @ 9:50am</div>

//     <div className="clearfix"></div>
// </div>
// </div>
// {/* <!-- POST --> */}


export default PostView
