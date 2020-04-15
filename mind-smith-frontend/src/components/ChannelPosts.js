import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'
import PostView from './PostView';

const ChannelPosts = (props) => {
    const [channel, setChannel] = useState({posts:[]});
    useEffect(() => {
       fetch(`http://localhost:3000/channels/${props.match.params.id}`)
       .then(res => res.json())
       .then(channel => setChannel(channel))
       }, [props.match.params.id])

       return ( 
        <div className="col-lg-8 col-md-8" style={{marginTop: "40px"}}>
            <h1>{channel.name}</h1>
            <h4>{channel.description}</h4> 
            <br/>
            <hr/>
            <br/>
            {channel.posts.map(post =><PostView  postId={post.id}/> )}

     {/* <!-- REPLY --> */}
      <div className="post">
          <form action="#" className="form" method="post">
              <div className="topwrap">
                  <div className="userinfo pull-left">
                      <div className="avatar">
                          <img src="https://ca.slack-edge.com/T02MD9XTF-UT02BHX47-1e2b6e51a86d-512" alt="" />
                      </div>
                  </div>
                  <div className="posttext pull-left">
                      <div className="textwraper">
                          <div className="postreply">write a post in this channel:</div>
                          <textarea name="reply" id="reply" placeholder="Type your post here"></textarea>
                      </div>
                  </div>
                  <div className="clearfix"></div>
              </div>                              
              <div className="postinfobot">

                  <div className="pull-right postreply">
                      <div className="pull-left"><Button color='teal' size="large"type="submit" className="btn btn-primary">Post your post</Button></div>
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
