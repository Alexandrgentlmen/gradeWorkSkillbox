import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from "react-masonry-component";
import InfiniteScroll from 'react-infinite-scroll-component';
import uniqid from 'uniqid';
import Cards from './Cards';
import { changePage, fetchingOff, imagesLoad  } from '../redux/actions';
import Spin from './Spin';

const masonryOptions = {
	fitWidth: false,
	columnWidth: 350,
	gutter: 1,
	transitionDuration: false,
	itemSelector: ".card",
};

function Home() {
	const dispatch = useDispatch();
	const images = useSelector(state => state.imagesReducer.images);
	const pageNumber = useSelector(state => state.imagesReducer.pageNumber);
	const searchText = useSelector(state => state.imagesReducer.searchText);

	useEffect(() => {
		
		dispatch(imagesLoad(searchText, pageNumber));
	}, [searchText, pageNumber, dispatch]);

	useEffect(()=>{})
	const fetchImages = () => {
		dispatch(changePage());
	}

	return (
				<> 			
					<InfiniteScroll
						dataLength={images.length}
						next={fetchImages}
						hasMore={true}
						loader={<Spin/>}
						scrollThreshold={1}
					>
						<Masonry className={"photo-list"}
							elementType={"div"}
							options={masonryOptions}
							disableImagesLoaded={false}
							updateOnEachImageLoad={false}>
							{images.map((image, index) => (
								
									<Cards
										index={index}
										created={image.created_at.slice(0, 10)}
										links={image.user.links.html}
										photoUser={image.user.profile_image.small}
										url={image.urls.thumb}
										urlReg={image.urls.regular} 
										key={uniqid()}
										id={image.id} totalLike={image.likes}
										name={image.user.username}
										liked_by_user={image.liked_by_user}									
									/>
							))}
						</Masonry>
					</InfiniteScroll>
				</>
	);
}

export default Home;
