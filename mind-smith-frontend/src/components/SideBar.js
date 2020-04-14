import React from 'react'
import { Popup, Card, Image, Rating } from 'semantic-ui-react'

const SideBar = (props) => (
  

  <div className="col-lg-4 col-md-4">
  <div className="sidebarblock">
      <h3>Trending Channnels</h3>
      <div className="divline"></div>
      <div className="blocktxt">
          <ul className="cats">
{props.channels.map(channel => <li><a onClick={ ()=>{props.changePage("channelPosts"); props.setChannel(channel)} } href="#">{channel.name}<span className="badge pull-right">{channel.posts.length}</span></a></li>)}
          </ul>
      </div>
  </div>

  
  <div className="sidebarblock">
      <h3>Latest Posts</h3>
      <div className="divline"></div>
      <div className="blocktxt">
          <a href="#">Post One</a>
      </div>
      <div className="divline"></div>
      <div className="blocktxt">
          <a href="#">Post Two</a>
      </div>
      
  </div>


</div>
)

export default  SideBar