import React from 'react'

const List = ({ listItems }) => (
	<ul className="a-list">
		{listItems.map(item => (
			<li key={item}>{item}</li>
		))}
	</ul>
)

export default List