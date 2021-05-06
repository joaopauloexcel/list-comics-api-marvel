import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Header.scss';
import { FormattedMessage } from 'react-intl'; 
import { setLocale } from '../../actions/locale';
import { connect } from 'react-redux';
import ImageBrazil from '../../assets/image/brazil.png';
import ImageEspanish from '../../assets/image/espanish.png';
import ImageEnglish from '../../assets/image/usa.png';

const Header = ({setLocale}:any): JSX.Element => {
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div data-testid="header-render" className={"header-body"}>
				<div className={"header-body-language"}>
					<div className={"brazil"} onClick={() => setLocale('pt-BR')}>
						<img src={ImageBrazil}/>
					</div>
					<div className={"english"} onClick={() => setLocale('en-US')}>
						<img src={ImageEnglish}/>
					</div>
					<div className={"espanish"} onClick={() => setLocale('es-ES')}>
						<img src={ImageEspanish}/>
					</div>
				</div>
			</div>
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => {

	return {
		language: state.global.language,
	};
};

const mapDispatchToProps = (dispatch:any) => ({ 
	"setLocale": (params:any) => dispatch(setLocale(params)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
