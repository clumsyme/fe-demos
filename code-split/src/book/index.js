import React, { Component } from 'react'
import zz from './zhuangzhou'
import bngd from './bainiangudu'

export default class Books extends Component {
    render() {
        return (
            <div>
                <h1>{zz}</h1>
                <h1>{bngd}</h1>
            </div>
        )
    }
}