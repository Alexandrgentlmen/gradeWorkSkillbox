import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from "react-masonry-component";
import InfiniteScroll from 'react-infinite-scroll-component';
import uniqid from 'uniqid';

import Cards from './Cards';
import { changePage, imagesLoad } from '../redux/actions';
import Spin from './Spin';
import { User } from './User';
import { unsplashApi } from '../api/authApi';
import Header from './Header';

function Home() {
	const dispatch = useDispatch();
	const images = useSelector(state => state.imagesReducer.images);
	const pageNumber = useSelector(state => state.imagesReducer.pageNumber);
	const user = useSelector(state => state.userReducer.user);
	const searchText = useSelector(state => state.imagesReducer.searchText);

	const masonryOptions = {
		fitWidth: false,
		columnWidth: 350,
		gutter: 1,
		itemSelector: ".card",
	};

	// useEffect(() => {
	// 	const access_token = localStorage.getItem('token');
	// 	access_token ? unsplashApi.getAuthUser() : unsplashApi.auth();
	// }, []);

	useEffect(() => {
		if (!searchText) {
			console.log('dispatchLoad')
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
					<User user={user} />
					<InfiniteScroll
						dataLength={images.length}
						next={fetchImages}
						hasMore={true}
						loader={<Spin />}>
						<Masonry className={"photo-list"}
							elementType={"div"}
							options={masonryOptions}
							disableImagesLoaded={false}
							updateOnEachImageLoad={false}>
							{images.map(image => (
								<Cards
									photoUser={image.photoUser.small}
									url={image.url} key={uniqid()}
									id={image.id} totalLike={image.likes}
									name={image.name}
								/>
							))}
						</Masonry>
					</InfiniteScroll>
				</>
	);
}

export default Home;
