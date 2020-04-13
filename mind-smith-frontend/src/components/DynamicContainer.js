import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Card } from 'semantic-ui-react'
import PostView from './PostView'

export default class DynamicContainer extends Component {

    // constructor() {
    //     super()
    //     this.setState = {
    //         title: null,
    //         body: null,
    //         author: null
    //     }
    // }

    render() {
        return (
            <PostView postId={8} />
        )
    }

}
