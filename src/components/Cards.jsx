import React from 'react';
import { Link } from 'react-router-dom';
import { Collect } from './Collect';
import { Download } from './Download';
import { Like } from './Like';

function Cards({index, name ,photoUser, url, id, totalLike, liked_by_user, links }) {

	return (
		
			<article className="card overlay">
				<div className="card__link d-flex">
					<Link  to={`/${id}`}>
						<img
						className="card__img"
						src={url}
						key={id}
						alt="gallery" />
					</Link>
				</div>
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
					<Download/>
					<Collect/>
					<Like
					index={index}
					 id={id}
					 totalLike={totalLike}
					 liked_by_user={liked_by_user}/>
				</div>
			</article>

		
	);
}

export default Cards;

