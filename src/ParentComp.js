import React, { Component } from 'react'
import MemoComp from './MemoComp';
import   PureComp   from './PureComponent';
import RegComp from './RegComp';


export class ParentComp extends Component {
    constructor(props) {
		super(props)

		this.state = {
			name: 'prajwal'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'prajwal'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
                parent component
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
				
			</div>
		)
	}
}
export default ParentComp
