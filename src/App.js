import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from "react-masonry-component";
import InfiniteScroll from 'react-infinite-scroll-component';
import uniqid from 'uniqid';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { changePage, imagesLoad } from './redux/actions';
import Spin from './components/Spin';
import { User } from './components/User';
import { unsplashApi } from './api/authApi';


function App() {
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

	useEffect(() => {
		const access_token = localStorage.getItem('token');
		access_token ? unsplashApi.getAuthUser() : unsplashApi.auth();
	}, []);

	useEffect(() => {
		dispatch(imagesLoad());
	}, [searchText, pageNumber])

	const fetchImages = () => {
		dispatch(changePage());
	}


	console.log('user', user)
	return (
		<div className="App">
			<div className="wrap">
				<Spin />
				<Header />
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
			</div>
		</div >
	);
}

export default App;
