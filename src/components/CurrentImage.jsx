import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import Cards from './Cards';

export const CurrentImage = () => {
	const images = useSelector(state => state.imagesReducer.images);
	const { photoId } = useParams();
	const navigate = useNavigate();

	const Index = images.findIndex(img => img.id === photoId);
	
	const goBack = () => navigate(-1);

	return (
		<div>
			
			<button className="back-link" onClick={goBack}>Go back</button>
			
			<Cards
										photoUser={images[Index].photoUser.small}
										url={images[Index].urls.full} key={uniqid()}
										id={images[Index].id} totalLike={images[Index].likes}
										name={images[Index].name} likeFromUser={images[Index].likeFromUser}
										links={images[Index].links}
									/>
		</div>
	)
}
