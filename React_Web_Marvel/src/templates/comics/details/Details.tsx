import React, { useEffect, useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import '../sass/Details.scss';
import { connect } from 'react-redux';

import { useParams } from 'react-router';
import { getComics, getCharacters } from '../actions';
import Button from '../../../modules/button';
import CardComics from '../../../modules/cardComics';
import { FormattedMessage } from 'react-intl';


interface Props {
	history: Function;
	getComics: Function;
	getCharacters: Function;
}

const Details = ({ history, comics=[], loadingCharacters=false, characters=[], getComics, getCharacters }: any): any => {

	const { id }: any = useParams() || '';

	useEffect(() => {

		getComics(id)

	}, [id]);

	useEffect(() => {

		if (comics && comics[0]) getCharacters(comics[0].characters.collectionURI)

	}, [comics]);

	return (
		<React.Suspense fallback={<CircularProgress />}>

			<div className={`countries-details ${loadingCharacters && 'loading'}`}>

				<div className={`titlePage`}>
					<FormattedMessage id={"details"}/> 
				</div>
				<div className={`details-button`}>
					<div className={`button-container`}>
						<Button
							obj={{ text: 'to-back', type: 'tertiary' }}
							style={{ lineHeight: '36px' }}
							onClick={() => history.goBack()}
						/>
					</div>
				</div>
				
				{comics && !!comics.length && <div>
					<CardComics
						dataArray={comics}
					/>

					<div className={"bottom-details"}>
						{characters && characters.length > 0 &&
							<div className={`titlePage`}>
								<FormattedMessage id={"characters"}/>  
								{characters.map((item:any, index:any) => 
									<div className={`subTitlePage`} key={index}>
										{index + 1}: {item.name} 									
									</div>
								)}
							</div>}

						{comics && comics.length > 0 && comics[0].creators.items.length > 0 &&
							<div className={`titlePage`}>
								<FormattedMessage id={"creators"}/>  
								{comics[0].creators.items.map((item:any, index:any) => 
									<div className={`subTitlePage`} key={index}>
										{index + 1}: {item.name} - {item.role.toUpperCase()}							
									</div>
								)}
							</div>}
					</div>
					
				</div>
				}

			</div>
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => {

	return {
		comics: state.comics.comics,
		characters: state.comics.characters,
		loadingCharacters: state.comics.loadingCharacters,
	};
};

const mapDispatchToProps = (dispatch:any) => ({ 
	"getComics": (params:any) => dispatch(getComics(params)),
	"getCharacters": (url:any) => dispatch(getCharacters(url)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(Details);