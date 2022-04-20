import React from 'react';
import { Link } from 'react-router-dom';
import { Collect } from './Collect';
import { Download } from './Download';
import { Like } from './Like';




function Cards({name ,photoUser, url, id, totalLike, likeFromUser, links }) {


	return (
		<Link  to={`/${id}`}>
			<article className="card overlay">
				<a href="/" className="card__link d-flex">
					<img
					 className="card__img"
					 src={url}
					 key={id}
					 alt="gallery" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href={links} className="card__photographer d-flex">
					
						<img
						 src={photoUser}
						 heigth={30}
						 width={30}
						 className="card__avatar"
						 alt="foto-author" />
					
					<span className="card__name">{name}</span>
				</a>
				<div className="card__info d-flex">
					<Download/>
					<Collect/>
					<Like
					 id={id}
					totalLike={totalLike}
					 likeFromUser={likeFromUser}/>
				</div>
			</article>
		</Link>	
		
	);
}

export default Cards;

