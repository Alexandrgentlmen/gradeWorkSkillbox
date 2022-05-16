import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadSingleImage } from '../redux/actions';
import Card from './Card';
import Loader from './Loader';

export const CurrentImage = () => {
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const images = useSelector(state => state.imagesReducer.images);
	let isFetch = useSelector(state => state.appReducer.isFetch);
	useEffect( ()=> {
	 dispatch(loadSingleImage(photoId));
	},[ dispatch,photoId]);

	return (
		<div>		
			<Link className="back-link" to='/'>Go back</Link>
	{	isFetch ?
		<Card 
				photoUser={images[0].user.profile_image.small}
				url={images[0].urls.full}
				id={images[0].id}
				totalLike={images[0].likes}
				name={images[0].user.username} 
				liked_by_user={images[0].liked_by_user}
				links={images[0].user.links.html}
				urlReg={images[0].urls.regular}  	
				created={images[0].created_at.slice(0, 10)}
		/> :
		<Loader/>	
	}
		</div>
	)
}
