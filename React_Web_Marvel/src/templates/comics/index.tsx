import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { COMICS, COMICS_DETAILS } from '../../routers';

const Home = React.lazy(() => import('./home'));
const Details = React.lazy(() => import('./details'));
 
interface Props { }

interface State { }

class IndexComics extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<React.Suspense fallback={<CircularProgress />}>
				<div>
					<Switch>
						<Route exact path={`${COMICS}`} component={Home}></Route>
						<Route exact path={`${COMICS_DETAILS}/:id`} component={Details}></Route>
					</Switch>
				</div>
			</React.Suspense>
		);
	}
}

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(IndexComics);
