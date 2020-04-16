import React, { useState, useEffect } from 'react';
import { Button, Image, List, Segment, Header } from 'semantic-ui-react'
import PostView from './PostView';

const ChannelPosts = (props) => {
    const [channel, setChannel] = useState({ posts: [] });
    useEffect(() => {
        fetch(`http://localhost:3000/channels/${props.match.params.id}`)
            .then(res => res.json())
            .then(channel => setChannel(channel))
    }, [props.match.params.id])

    // Create a new Post, using same process as creating a Channel
    const handlePostCreate = (e) => {
        e.preventDefault()

        let form = e.target
        let post = {
            title: form[0].value,
            body: form[1].value,
            // tags: form[2].value,
            user_id: props.currentUser.id,
            channel_id: parseInt(props.match.params.id)
        }

        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", Accept: "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(post => setChannel({...channel,posts:[...channel.posts , post]}))


        // {
        //     props.onCreatePost(post)
        //     setShowcreatechannel(false)
        // }
    }

    return (
        <div className="col-lg-8 col-md-8" style={{ marginTop: "40px" }}>
            <h1>{channel.name}</h1>
            <h4>{channel.description}</h4>
            <br />
            <hr />
            <br />
            {channel.posts.map(post => <PostView currentUser={props.currentUser} postId={post.id} />)}

            {/* <!-- REPLY --> */}
            <div className="post">
                {/* <form action="#" className="form" method="post"> */}
                <form onSubmit={(e) => props.currentUser ? handlePostCreate(e) : [e.preventDefault(), alert("You must log in to create a post!")]}>
                    <div className="topwrap">
                        <div className="userinfo pull-left">
                            <div className="avatar">
                                <img src={props.currentUser ? props.currentUser.img_url : "http://picsum.photos/100"} alt="" />
                            </div>
                        </div>
                        {/* <div className="clearfix"></div> */}
                        {/* <br />
                        <br />
                        <br /> */}
                        <div className="posttext pull-left">
                            <div className="textwraper">
                                <div className="postreply">Write a post in this channel:</div>
                                {/* <textarea name="title" id="title" placeholder="Title"></textarea> */}
                                <input type="text" name="title" id="title" placeholder="Title" required></input>
                            </div>
                            <div className="textwraper">
                                {/* <div className="postreply">write a post in this channel:</div> */}
                                <textarea name="reply" id="reply" placeholder="Type your post here" required></textarea>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">

                        <div className="pull-right postreply">
                            <div className="pull-left"><Button color='teal' size="large" type="submit" className="btn btn-primary">Post your post</Button></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
            {/* <!-- REPLY --> */}





        </div>

    )
}



export default ChannelPosts
