import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import * as ReactIntl from 'react-intl';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import * as locale from './locale';
import './App.scss';
import { connect } from 'react-redux';

const localeData: any = {
	'pt-BR': locale.ptBR,
	'en-US': locale.enUS,
	'es-ES': locale.esES,
};

//
const Dashboard = React.lazy(() => import('./modules/dashboard'));

interface AppProps {
	language?: string;
}

interface AppState {}

class AppComponent extends Component<AppProps, AppState> {
	render() {
		const { language } = this.props;

		return (
			<React.Suspense fallback={<CircularProgress />}>
				<ReactIntl.IntlProvider
					locale={language || 'pt-BR'}
					messages={localeData[language || 'pt-BR']}
				>
					<Router history={history}>
						<Switch>
							<React.Fragment>
								<div className="ApplicationContainer">
									<Route path="/" component={Dashboard} />
								</div>
							</React.Fragment>
						</Switch>
					</Router>
				</ReactIntl.IntlProvider>
			</React.Suspense>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		language: state.global.language,
	};
};


export default connect(mapStateToProps)(AppComponent);;
