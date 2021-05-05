import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Header.scss';
import { FormattedMessage } from 'react-intl';
import { setLocale } from '../../actions/locale';


export const Header = (): JSX.Element => {
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div data-testid="header-render" className={"header-body"}>
				{/* <FormattedMessage
						id="app-current-language"
						defaultMessage="app-current-language"
						values={{
							appLocale: (
								<FormattedMessage id="app-locale" defaultMessage="app-locale" />
							),
						}}
					/>
					<br />
					<button onClick={() => setLocale('pt-BR')}>pt-BR</button>
					<button onClick={() => setLocale('en-US')}>en-US</button>
					<button onClick={() => setLocale('es-ES')}>es-ES</button> */}
			</div>
		</React.Suspense>
	);
};

