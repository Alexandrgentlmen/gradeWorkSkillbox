import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from "react-masonry-component";
import InfiniteScroll from 'react-infinite-scroll-component';
import uniqid from 'uniqid';

import Cards from './Cards';
import { changePage, imagesLoad } from '../redux/actions';
import Spin from './Spin';

function Home() {
	const dispatch = useDispatch();
	const images = useSelector(state => state.imagesReducer.images);
	const pageNumber = useSelector(state => state.imagesReducer.pageNumber);
	const searchText = useSelector(state => state.imagesReducer.searchText);
	console.log(images)
	const masonryOptions = {
		fitWidth: false,
		columnWidth: 350,
		gutter: 1,
		itemSelector: ".card",
	};

	useEffect(() => {
		if (!searchText ) {
			dispatch(imagesLoad());
		} else {
			if (pageNumber !== 1) {
				dispatch(imagesLoad(searchText, pageNumber));
			}
		}
	}, [searchText, pageNumber, dispatch]);

	const fetchImages = () => {
		dispatch(changePage(pageNumber));
	}

	return (
				<>				
					<InfiniteScroll
						dataLength={images.length}
						next={fetchImages}
						hasMore={true}
						loader={<Spin />}
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
										upDate={image.promoted_at.slice(0, 10)}
										links={image.user.links.html}
										photoUser={image.user.profile_image.small}
										url={image.urls.thumb} key={uniqid()}
										id={image.id} totalLike={image.likes}
										name={image.user.username} liked_by_user={image.liked_by_user}
									/>
							))}
						</Masonry>
					</InfiniteScroll>
				</>
	);
}

export default Home;
