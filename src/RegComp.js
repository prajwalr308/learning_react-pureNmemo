import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("reg component render")
        return (
            <div>
                Reg comp {this.props.name}
            </div>
        )
    }
}

export default RegComp
