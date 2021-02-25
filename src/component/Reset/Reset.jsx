import React from 'react';

const Reset = ({ reset }) => {
	return (
		<div>
			<button
				className="reset-button"
				data-testid="reset-mock"
				onClick={reset}
			>
				Reset
			</button>
		</div>
	);
};

export default Reset;
