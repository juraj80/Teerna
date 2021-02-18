import React, { useState } from 'react';
import { rgba } from 'polished';
import { GMToggle } from '../components';

export default {
	title: 'GM Toggle',
	component: GMToggle,
	decorators: [
		story => (
			<div
				style={{
					width: '100vh',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					background: rgba(0, 0, 0, 0.9),
					zIndex: -1,
				}}
			>
				{story()}
			</div>
		),
	],
};

export const standard = () => {
	const [isGM, becomeGM] = useState(false);

	return <GMToggle isGM={isGM} setIsGM={becomeGM} />;
};
