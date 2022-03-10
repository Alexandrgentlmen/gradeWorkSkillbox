import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Masonry from "react-masonry-component";
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useDispatch } from 'react-redux';
import { imagesLoad, imagesSearch } from './redux/actions';
import Spin from './components/Spin';
import uniqid from 'uniqid';
import { unsplashApi } from './api/authApi';

function App() {
	const dispatch = useDispatch();
	const images = useSelector(state => state.imagesReducer.images);
	const searchText = useSelector(state => state.imagesReducer.searchText);

	useEffect(() => {
		dispatch(imagesLoad())
	}, []);

	useEffect(() => {
		console.log('get token')
		unsplashApi.auth()
	}, []);

	const masonryOptions = {
		fitWidth: false,
		columnWidth: 350,
		gutter: 1,
		itemSelector: ".card",
	};

	const fetchImages = () => {
		if (searchText) {
			dispatch(imagesSearch(searchText))
		} else {
			dispatch(imagesLoad())
		}

	}
	return (
		<div className="App">
			<div className="wrap">
				<Spin />
				<Header />
				<InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} loader={<Spin />}>
					<Masonry className={"photo-list"}
						elementType={"div"}
						options={masonryOptions}
						disableImagesLoaded={false}
						updateOnEachImageLoad={false}>
						{images.map(image => (
							// const key = uniqid();
							<Cards
								photoUser={image.photoUser.small}
								url={image.url} key={uniqid()}
								id={image.id} totalLike={image.likes}
								name={image.name}
							/>
						))}
					</Masonry>
				</InfiniteScroll>
			</div>
		</div >
	);
}

export default App;
