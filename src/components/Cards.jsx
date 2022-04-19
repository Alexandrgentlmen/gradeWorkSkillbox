import React from 'react';
import { Like } from './Like';




function Cards({name ,photoUser, url, id, totalLike, likeFromUser }) {


	return (	
		<article className="card overlay">
			<a href="\" className="card__link d-flex">
				<img className="card__img" src={url} key={id} alt="gallery" />
			</a>
			<a href="/" className="card__photographer d-flex">
				<img src={photoUser} heigth={30} width={30} className="card__avatar" alt="foto-author" />
				<span className="card__name">{name}</span>
			</a>
			<div className="card__info d-flex">
				<a href="/" className="btn-download card__link-download">
					<i className="card__svg-icon svg-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={100} width={100} fill="#000000" version="1.1" x={0} y={0} viewBox="0 0 100 100"
						>
							<g>
								<path d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z">
								</path>
								<path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z">
								</path>
							</g>
						</svg>
					</i>
				</a>
				<button className="btn-collect card__btn-collect btn--reset">
					<i className="card__svg-icon svg-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
							</path>
						</svg>
					</i>
				</button>
				<Like id={id} totalLike={totalLike} likeFromUser={likeFromUser}/>
			</div>
		</article>
	);
}

export default Cards;

