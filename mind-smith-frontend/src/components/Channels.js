import React, { useState , useEffect } from 'react';

const Channels = (props) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
       fetch("http://localhost:3000/channels")
       .then(res => res.json())
       .then(channels => setChannels(channels))
       }, [])


       return (
        <div>
         {channels.map(channel => <Channel channel={channel}/>)}
        </div>
      );
}



export default Channels