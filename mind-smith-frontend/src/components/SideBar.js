import React from 'react'
import { Popup, Card, Image, Rating } from 'semantic-ui-react'

const SideBar = () => (
  

  <div className="col-lg-4 col-md-4">
  <div className="sidebarblock">
      <h3>Channnels</h3>
      <div className="divline"></div>
      <div className="blocktxt">
          <ul className="cats">
              <li><a href="#">Channel One <span className="badge pull-right">17</span></a></li>
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