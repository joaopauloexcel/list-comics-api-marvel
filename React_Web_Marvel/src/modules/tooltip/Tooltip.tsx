import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTooltip} from '../../actions/tooltip';
import {FormattedMessage} from 'react-intl';
import './Tooltip.scss'; 

interface Props {
	setTooltip: Function;
	tooltip?: any;
}

class Tooltip extends Component<Props> {

	constructor(props: Props) {
		super(props);
		this.state = {};

	}

    componentWillMount () {

		const {setTooltip} = this.props;

        setTimeout(() => setTooltip({"message": "teste", "type": "error"}), 5000);

    }

    render () {

        const {tooltip} = this.props;

        return (
            <div className={`dashboard-tooltip ${tooltip.type}`}>
                <FormattedMessage id={tooltip.message} />
            </div>
        );

    }

}

const mapStateToProps = (state:any, ownProps:any) => ({
    tooltip: state.global.tooltip,
});

const mapDispatchToProps = (dispatch:any) => ({
    setTooltip: (params:any) => dispatch(setTooltip(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(Tooltip);
