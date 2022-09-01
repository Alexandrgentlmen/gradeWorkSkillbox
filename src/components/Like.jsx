import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { imagesLike, imagesUnlike } from '../redux/actions';
import LikeSvg from './LikeSvg';
import SmallSpin from './SmallSpin';

const Like = ({index, id,totalLike,liked_by_user}) => {
	const dispatch = useDispatch();
	let smallerloading = useSelector(state => state.appReducer.smallerloading);
	const isAuth = localStorage.getItem('token');
	const navigate = useNavigate();
	return (		
		<button 
				className="btn-like card__btn-like btn--reset"
				onClick={ () =>{				
					if(isAuth) {
						liked_by_user ? dispatch(imagesUnlike(index,id)) : dispatch(imagesLike(index,id));	
					} else {
						navigate('/auth')
					}			
				}}
				>
					<span className="card__totalLikes">{totalLike}</span>
					<i className="card__svg-icon svg-icon">
						{ smallerloading ? <SmallSpin/> : <LikeSvg liked_by_user={liked_by_user}/> }
					</i>
				</button>	
	)
}
export {Like} ;

