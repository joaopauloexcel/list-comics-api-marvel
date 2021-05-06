import * as React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

interface Props {
	obj?: any;
	onClick?: any;
	style?: any;
	className?: any;
	width?: string;
	height?: string;
	disabled?: boolean;
}

export const Button = ({
	obj,
	onClick,
	style,
	width = '160px',
	height = '40px',
	className,
	disabled = false
}: Props): JSX.Element => {

	// const styleDisable
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div
				style={{ ...(disabled ? {"background":"#c4c4c4"} : style || { lineHeight: height, width: width, height, marginRight: "24px" }), ...(disabled && { cursor: 'normal', opacity: '0.1' }) }}
				className={`button-default ${obj && obj.type === 'tertiary'
						? 'button-tertiary'
						: obj && obj.type === 'secundary'
							? 'button-secundary'
							: 'button-primary'
					} ${className}`}
				onClick={!disabled ? onClick : undefined}
				data-testid="button-field"
			>
				{obj ? (
					<span>
						{obj.icon ? (
							<img alt="image5" src={obj.icon} />
						) : obj.iconType === 'fav' ? (
							<FontAwesomeIcon icon={obj.icon} />
						) : (
							''
						)}
						{obj.icon && obj.text ? (
							<span className={'button-space-text'}>
								{obj.text}
							</span>
						) : obj.text ? (
							<FormattedMessage id={obj.text}/>
						) : (
							''
						)}
					</span>
				) : (
					''
				)}
			</div>
		</React.Suspense>
	);
};

export default Button;
