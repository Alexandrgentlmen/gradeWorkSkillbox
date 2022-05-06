import React from 'react';
import SvgCollect from './SvgCollect';

const CollectBtn = () => {

	return (
		<button className="btn-collect card__btn-collect btn--reset">
			<i className="card__svg-icon svg-icon">
				<SvgCollect/>
			</i>
		</button>
	)
}
export {CollectBtn} ;

