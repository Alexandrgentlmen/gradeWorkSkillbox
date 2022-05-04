
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../redux/actions';

import { Collect } from './Collect';
import { Download } from './Download';
import { Like } from './Like';


function Cards({ index, name ,photoUser, urlReg ,url, id, totalLike, liked_by_user, links, created }) {

	const dispatch = useDispatch();

	return (
		
			<article className="card" >				
				<div className="card__link d-flex">
					<Link  to={`/${id}`}>
						
					<img
						className="card__img"
						src={url}
						key={id}
						alt="gallery" />
					</Link>
				</div>
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
						onClick={()=>{
							dispatch(openModal(urlReg));
						}}
					>
						<Download/>
					</button>
						
						<Collect/>
						<Like
						index={index}
						id={id}
						totalLike={totalLike}
						liked_by_user={liked_by_user}/>
					</div>
				</div>

			</article>

		
	);
}

export default Cards;

