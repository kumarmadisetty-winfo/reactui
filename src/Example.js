import React from 'react';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';


class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			citySelectItems: [
				{ label: 'New York', value: 'NY' },
				{ label: 'Rome', value: 'RM' },
				{ label: 'London', value: 'LDN' },
				{ label: 'Istanbul', value: 'IST' },
				{ label: 'Paris', value: 'PRS' }
			],
			city: ''
		};
	}

	render() {
		return (
			<div>
			
				<Dropdown
					style={{ width: 150 }}
					value={this.state.city}
					options={this.state.citySelectItems}
					onChange={e => {
						this.setState({ city: e.value });
					}}
					placeholder='Select a City'
				/>
			</div>
		);
	}
}

export default <Example />;
