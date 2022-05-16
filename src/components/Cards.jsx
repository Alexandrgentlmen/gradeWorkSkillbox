import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../redux/actions';
import { ButtonCardPhotogr } from './ButtonCardPhotogr';
import { CollectBtn } from './CollectBtn';
import { Download } from './Download';
import { Like } from './Like';

function Cards({ index, name ,photoUser, urlReg ,url, id, totalLike, liked_by_user, links, created }) {
	const dispatch = useDispatch();
	
	return (	
			<article className="card" >	
				<Link to={`/${id}`}>				
					<div className="card__link d-flex">	
								<img
									className="card__img"
									src={url}
									key={id}
									alt="gallery" />
								<div className="overlay">
							<span className="card__date">{created}</span> 
							<ButtonCardPhotogr links={links} name={name} photoUser={photoUser}/>	
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
									<CollectBtn/>
									<Like
										index={index}
										id={id}
										totalLike={totalLike}
										liked_by_user={liked_by_user}/>
							</div>
						</div>				
					</div>
				</Link>
			</article>	
	);
}
export default Cards;

