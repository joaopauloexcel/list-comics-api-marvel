import React from 'react';

import './Footer.scss';

export const Footer = () => (
	<footer id="footer-automatos" data-testid="footer-render">
		&copy;{new Date().getFullYear()} All Rights Reserved{' '}
		<a href="https://github.com/joaopauloexcel" target="_blank" rel="noopener noreferrer">
			My GitHub
		</a>
	</footer>
);
