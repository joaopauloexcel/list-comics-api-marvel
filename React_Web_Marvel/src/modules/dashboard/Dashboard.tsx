import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Dashboard.scss';
import { COMICS } from '../../routers';
import Tooltip from '../tooltip';
import { connect } from 'react-redux';

const Header = React.lazy(() => import('../header'));
const Footer = React.lazy(() => import('../footer'));
const ComicsPage = React.lazy(() => import('../../templates/comics/index'));

const Dashboard = ({tooltip={}}:any): JSX.Element => {

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Header />
			{!!tooltip && tooltip.message !== "" && <Tooltip/>}
			<div className={'container'}>
				<Switch>
					<Route path={`${COMICS}`} component={ComicsPage}></Route>
					<Route exact path={'/'}>
						<Redirect to={`${COMICS}`} />
					</Route>
					<Redirect from="*" to={`${COMICS}`} />
				</Switch>
			</div>
			
			<Footer />
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => {

	return {
		tooltip: state.global.tooltip,
	};
};

export default connect(mapStateToProps, null)(Dashboard);