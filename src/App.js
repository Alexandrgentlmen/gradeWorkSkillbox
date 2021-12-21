import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from "react-masonry-component";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { Heading } from './components/Heading/Heading';
import { Loader } from './components/Loader/Loader.js';
import unsplashApi from './components/Oauth/index';

const masonryOptions = {
	fitWidth: false,
	columnWidth: 350,
	gutter: 1,
	itemSelector: ".card",
};

function App() {
	const [images, setImages] = useState([]);
	const fetchImages = () => {
		const apiRoot = "https://api.unsplash.com";
		const accessKey = process.env.REACT_APP_ACCESSKEY;

		axios
			.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
			.then(res => setImages([...images, ...res.data]))
	}
	useEffect(() => {
		fetchImages();
	}, [])

	useEffect(() => {
		unsplashApi.auth();
	}, [])



	const handleSearch = (handleChange) => {
		const apiRoot = "https://api.unsplash.com";
		const accessKey = process.env.REACT_APP_ACCESSKEY;
		axios
			.get(`${apiRoot}/search/photos?query=${handleChange}&client_id=${accessKey}`)
			.then(res => setImages([...res.data.results]))

	}

	return (
		<>
			<Header handleSearch={handleSearch} />
			<Heading />
			<div className="content container">

				<InfiniteScroll
					dataLength={images.length}
					next={fetchImages}
					hasMore={true}
					loader={<Loader />}
				>
					<div className="content__photos" data-grid-type="default">
						<Masonry
							className={"photo-list"}
							elementType={"div"}
							options={masonryOptions}
							disableImagesLoaded={false}
							updateOnEachImageLoad={false}
						>
							{
								images.map(image => (<Cards url={image.urls.thumb} key={image.id} />))
							}
						</Masonry>
					</div>
				</InfiniteScroll>
			</div>
		</>
	);
}

// const mapStateToProps = (state) => {
// 	return {
// 		editer: state
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 	}
// }

// export const getPhotosThunkCreater = (state = [], photo) => {

// 	return (dispatch) => {

// 		const apiRoot = "https://api.unsplash.com";
// 		const accessKey = process.env.REACT_APP_ACCESSKEY;

// 		axios
// 			.get(`${apiRoot}/photos/random&client_id=${accessKey}&count=10`)
// 			.then(res => this.state([...photo, ...res.data]))

// 	}
// }

// App = connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// 	{ getPhotosThunkCreater }
// )(App);

export default App;
