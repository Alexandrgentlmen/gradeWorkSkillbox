import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import { Heading } from './components/Heading/Heading';
import { InfiniteScrollFunc } from './components/Infinitescroll/Infinitescroll';
import { MasonryFunc } from './components/Masonry/Masonry';
import getPhotos from './redux/photosReducer';

function App() {

	const dispatch = useDispatch();
	const photos = useSelector(state => state.photos)


	useEffect(() => {
		dispatch(getPhotos())
	}, [])

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if (!token) { unsplashApi.auth() };
	// }, [])

	return (
		<>
			<Header />
			<Heading />
			<div className="content container">

				<InfiniteScrollFunc dataLength={photos.length} >
					<div className="content__photos" data-grid-type="default">
						<MasonryFunc photos={photos}></MasonryFunc>
					</div>
				</InfiniteScrollFunc>
			</div>
		</>
	);
}

export default App;












// const [images, setImages] = useState([]);
	// const fetchImages = () => {
	// 	const apiRoot = "https://api.unsplash.com";
	// 	const accessKey = process.env.REACT_APP_ACCESSKEY;
	// 	axios
	// 		.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
	// 		.then(res => setImages([...images, ...res.data]))
	// }