import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/actions';
import cn from 'classnames'



 const Modal = () => {
	const dispatch = useDispatch();
	const modalWindow = useSelector(state => state.modalReducer);

	let modalClass = cn(
		'modal',
		{'active' :modalWindow.isOpen}
	)

	let modalContentClass = cn(
		'modal__content',
		{'active' :modalWindow.isOpen}
	)

	return (
		<div className={modalClass}
			onClick={()=> {
				dispatch(closeModal());
			}} >
			<div className={modalContentClass}
				onClick={e=> e.stopPropagation()}>
				<img className="card__img"
					onClick={()=> {
						dispatch(closeModal());
					}}
					src={modalWindow.url} 
					alt="gallery"
					/>
			</div>

		</div>
	)
}
export default Modal;