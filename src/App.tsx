import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<input type='file' />
			<input type='file' accept='image/*' capture='user' />
			<input type='file' accept='image/*' capture='environment' />
		</div>
	)
}

export default App
