import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';


const Spin = (props) => {

	const spinner = useSelector(state => state.appReducer.loading);
	return (
		<div className='loader-styles'>
			<TailSpin
				type="TailSpin"
				heigth={100}
				width={100}
				color='#00BFFF'
				visible={spinner} />
		</div>
	)
}

export default Spin;