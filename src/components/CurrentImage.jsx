import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadSingleImage } from '../redux/actions';
import Card from './Card';
import Loader from './Loader';

export const CurrentImage = () => {
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const image = useSelector(state => state.currentPageReducer.image);
	let isFetch = useSelector(state => state.appReducer.isFetch);
	useEffect( ()=> {
	 dispatch(loadSingleImage(photoId));
	},[ dispatch,photoId]);
	

	return (
		<div>		
			<Link className="back-link" to='/'>Go back</Link>
	{	isFetch ?
		<Card 
				photoUser={image.user.profile_image.small}
				url={image.urls.full}
				id={image.id}
				totalLike={image.likes}
				name={image.user.username} 
				liked_by_user={image.liked_by_user}
				links={image.user.links.html}
				urlReg={image.urls.regular}  	
				created={image.created_at.slice(0, 10)}
		/> :
		<Loader/>	
	}
		</div>
	)
}
