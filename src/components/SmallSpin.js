import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

const SmallSpin = () => {
	const spin = useSelector(state => state.appReducer.smallerloading);
	return (
		<div className='loader-styles-mini'>
			<TailSpin
				type="TailSpin"
				heigth={95}
				width={95}
				color='#00BFFF'
				visible={spin} />
		</div>
	)
}

export default SmallSpin;