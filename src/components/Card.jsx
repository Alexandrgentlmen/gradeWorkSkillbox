import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/actions';
import { CollectBtn } from './CollectBtn';
import { Download } from './Download';
import { Like } from './Like';

function Card({ index, name ,photoUser, urlReg ,url, id, totalLike, liked_by_user, links, created }) {

	const dispatch = useDispatch();

	return (
		
			<article className="card card-sample" >				
				<div className="card__link-sample d-flex">	
					<img
						className="card__img-sample"
						src={url}
						key={id}
						alt="gallery" />
					<div className="overlay">
						<span className="card__date">{created}</span> 
						<button onClick={()=>{window.open(links, '_blank')}} className="btn--reset card__photographer d-flex">
								<img
								src={photoUser}
								heigth={30}
								width={30}
								className="card__avatar"
								alt="foto-author" />
							
							<span className="card__name">{name}</span>
						</button>
						
						<div className="card__info d-flex">
						<button
							href="/"
							className="btn--reset btn-download"
							onClick={(e)=>{
								e.stopPropagation();
								dispatch(openModal(urlReg));
							}}
						>
							<Download/>
						</button>					
							<CollectBtn/>
							<Like
							index={index}
							id={id}
							totalLike={totalLike}
							liked_by_user={liked_by_user}/>
						</div>
					</div>					
				</div>
			</article>
	);
}

export default Card;

