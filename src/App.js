import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from "react-masonry-component";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { Heading } from './components/Heading/Heading';
import { Loader } from './components/Loader/Loader.js';
import { createApi } from 'unsplash-js';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = 'http://localhost:3000/';
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public`;
const unsplash = createApi({
	accessKey: localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : ACCESS_KEY
});

window.unsplash = unsplash;

const masonryOptions = {
	fitWidth: false,
	columnWidth: 350,
	gutter: 1,
	itemSelector: ".card",
};

function getQueryVar(item) {
	let queryDict = {};
	window.location.search
		.substring(1)
		.split('&')
		.forEach((item) => {
			let param = item.split('=');
			queryDict[param[0]] = param[1];
		});

	return (item);
}

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

	const handleSearch = (handleChange) => {
		const apiRoot = "https://api.unsplash.com";
		const accessKey = process.env.REACT_APP_ACCESSKEY;
		axios
			.get(`${apiRoot}/search/photos?query=${handleChange}&client_id=${accessKey}`)
			.then(res => setImages([...res.data.results]))
		// .then(console.log([images]))

	}
	// const [error, setError] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	unsplashApi.auth();
	// }, [])

	const auth = () => {

		window.location.href = authUrl;
		const code = getQueryVar('code');
		debugger;
		console.log(code);
		if (!code) { window.location.href = authUrl; } else {
			return fetch('https://unsplash.com/oauth/token', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					client_id: ACCESS_KEY,
					client_secret: SECRET_KEY,
					redirect_uri: REDIRECT_URL,
					code: code,
					grant_type: 'authorization_code'
				})
			}).then(response => response.json()).then(data => {
				//console.log(data);
				localStorage.setItem('token', data.access_token);
				window.location.href = REDIRECT_URL;
			})
		}
	}

	return (
		<>
			<Header handleSearch={handleSearch} auth={auth} />
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
