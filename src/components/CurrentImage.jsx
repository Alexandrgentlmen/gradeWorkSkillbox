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
										photoUser={images[Index].user.profile_image.small}
										url={images[Index].urls.full}
										key={uniqid()}
										id={images[Index].id}
										totalLike={images[Index].likes}
										name={images[Index].user.username} 
										likeFromUser={images[Index].liked_by_user}
										links={images[Index].user.links.html}
										urlReg={images[Index].urls.regular}  
										created={images[Index].created_at.slice(0, 10)}
									/>
		</div>
	)
}
