import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'
import PostView from './PostView';

const ChannelPosts = (props) => {
    

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        
       fetch(`http://localhost:3000/channels/${props.channel.id}`)
       .then(res => res.json())
       .then(channel => setPosts(channel.posts))
       }, [props.channel])

       return (
        // <div>
        // <h1>{props.channel.name}</h1>
        // <p>{props.channel.description}</p>
        // <h2>post componant for this channel</h2>
        // {posts.map(post =><PostView postId={post.id}/> )}
        // </div>
        <div className="col-lg-8 col-md-8">
            {posts.map(post =><PostView  postId={post.id}/> )}
      


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
                          <div className="postreply">Post a Reply</div>
                          <textarea name="reply" id="reply" placeholder="Type your message here"></textarea>
                      </div>
                  </div>
                  <div className="clearfix"></div>
              </div>                              
              <div className="postinfobot">

                  <div className="pull-right postreply">
                      <div className="pull-left"><Button color='teal' size="large"type="submit" className="btn btn-primary">Post Reply</Button></div>
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