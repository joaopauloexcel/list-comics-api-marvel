import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import '../sass/Comics.scss';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import CardComics  from "../../../modules/cardComics";
import { getComics } from '../actions';
import { sendEmail } from '../actions';
import Button from '../../../modules/button';
import SearchInput from '../../../modules/SearchInput';
import { COMICS_DETAILS } from '../../../routers';
import Modal from '@material-ui/core/Modal';
import {setTooltip} from '../../../actions/tooltip';


interface Props {
	history: any;
	comics: any;
	loadingComics:any;
	getComics: Function;
	sendEmail: Function;
	setTooltip: Function;
}

interface State {}

class HomePage extends React.Component<Props, State> {

	public state: any;
	constructor(props: Props) {

		super(props);
		this.state = {
			arraySelectedComics:[],
			isCheckAllPage:false,
			search:"",
			openModal:false,
			emailProfile:"",
			emailTitle:"",
		};

		this.setArraySelectedComics = this.setArraySelectedComics.bind(this);
		this.removeArraySelectedComics = this.removeArraySelectedComics.bind(this);
		this.renderModal = this.renderModal.bind(this);
		this.controlModal = this.controlModal.bind(this);
		this.onChange = this.onChange.bind(this);

	}

	componentWillMount() {

		this.props.getComics();

	}

	onChange (event:any) {

		this.setState({[event.target.name]: event.target.value});

	}

	setArraySelectedComics ({ item }: any) {

		const {arraySelectedComics} = this.state;

		if (arraySelectedComics.includes(item.id)) {

			const index = arraySelectedComics.indexOf(item.id);
			arraySelectedComics.splice(index, 1);

		} else {

			arraySelectedComics.push(item.id);

		}

		this.setState({arraySelectedComics});

	}
	
	removeArraySelectedComics ({ item }: any) {

		const {arraySelectedComics} = this.state;

		if (arraySelectedComics.includes(item.id)) {

			const index = arraySelectedComics.indexOf(item.id);
			arraySelectedComics.splice(index, 1);
			
			this.setState({arraySelectedComics});

		}


	}

	handleSelectAllPage ({ item }:any) {

		const {isCheckAllPage} = this.state;

		if (isCheckAllPage) {

			this.setState({arraySelectedComics:[]});
			item.map((item: any) => this.removeArraySelectedComics({ item }));


		} else {

			item.map((item: any) => this.removeArraySelectedComics({ item }));

			item.map((item: any) => this.setArraySelectedComics({ item }));


		}

		this.setState({isCheckAllPage:!isCheckAllPage});
	}

	handleChangeSearch (search: string) {
		this.setState({search});
	}

	controlModal () {

		const {openModal} = this.state;
		this.setState({openModal:!openModal}, () => console.log({"modal":this.state.openModal}))

	}

	renderModal () {

		const {openModal, 
			emailProfile,
			emailTitle,
			arraySelectedComics} = this.state;
		
		const {sendEmail} = this.props;

		return (
			<Modal
				open={openModal}
				onClose={() => this.controlModal()}
			>
				<div className={"modal-shared"}>

					<div className={"modal-container"}>

						<div className={"modal-title"}>
							Envio dos links dos quadrinhos selecionados por e-mail!
						</div>

						<div className={"modal-input"}>
							<input
								name={"emailProfile"}
								value={emailProfile}
								onChange={this.onChange}
								type="text"
								placeholder={"Digite seu e-mail"}
							/>
						</div>

						<div className={"modal-input"}>
							<input
								name={"emailTitle"}
								value={emailTitle}
								onChange={this.onChange}
								type="text"
								placeholder={"Título de e-mail"}
							/>
						</div>

						<div className={"modal-button"}>
						<Button 
							obj={{text:"Enviar"}} 
							onClick={() => 
								this.setState({openModal:false}, () => {
									sendEmail(
										{
											name:"Marvel developer",
											recept:"joaopauloexcel@hotmail.com",
											title:"Convite",
											text:`Ids selecionados: ${arraySelectedComics}`
										}
									)
								})
							}/>
						</div>
						
					</div>

				</div>
			</Modal>
		);
	}

	render() {

		const {comics, loadingComics, history, setTooltip} = this.props;
		const {arraySelectedComics, search} = this.state;

		const filterCountries = (values: Array<any>, value?: string) => {
		
			if (!values) {
				return [];
			}
	
			if (!value) {
				return values;
			}
	
			const valueSearch = value;
	
			// eslint-disable-next-line max-len
			return values.filter((item: any) => item.title.toUpperCase().includes(valueSearch.toUpperCase()));
		}

		return (
			<React.Suspense fallback={<CircularProgress />}>
				<div 
					data-testid="comics-render" 
					className={`content ${loadingComics && 'loading'}`}>

					{this.renderModal()}

					<div className="header-home">
						<div className="selected-home">
							Selecionados ({arraySelectedComics.length})
						</div>
						<div className="email-home">
							<div 
								data-testid={"button-email-test"} 
								className={"email-div"}
								onClick={() =>  arraySelectedComics.length > 0 
									? this.controlModal()
									: setTooltip({"message": "Selecione ao menos 1 registro", "type": "error"})
								}
							>
									Enviar E-mail
							</div>
						</div>

						<div className="search-home">
							<SearchInput 
								onChange={(event:string) => this.handleChangeSearch(event)}
								search={search}
							/>
						</div>
				
					</div>	

					<div className="body-home">
						{comics && 
							<CardComics
								dataArray={filterCountries(!!comics ? comics.map((item:any) => {
									return ({
										...item,
										isChecked: arraySelectedComics.includes(item.id)
									})
								} ) : [], search)}
								checkArray={[{"label":"selectComics"}]}
								checkOnClickAction={this.setArraySelectedComics}
								actionComponent={
									({item}:any) =>
										<Button obj={{text:"Detalhes"}} onClick={() => history.push(`${COMICS_DETAILS}/${item.id}`)}/>
								}
							/>
						}

					</div>		
					
				</div>

			</React.Suspense>
		);
	}
}

const mapStateToProps = (state: any) => {
	console.log({state})
	return {
		language: state.global.language,
		comics: state.comics.comics,
		loadingComics: state.comics.loadingComics,
	};
};

const mapDispatchToProps = (dispatch:any) => ({ 
	"getComics": () => dispatch(getComics()),
	"sendEmail": (params:any) => dispatch(sendEmail(params)),
	"setTooltip": (params:any) => dispatch(setTooltip(params)),
 });
 // const mapDispatchToProps = {getComics, sendEmail, setTooltip}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);