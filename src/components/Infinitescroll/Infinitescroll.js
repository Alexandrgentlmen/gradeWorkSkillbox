import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { imagesAPI } from '../../api/api.js';
import { Loader } from '../Loader/Loader';

export function InfiniteScrollFunc({ children, dataLength }) {

	const fetchImages = () => {
		imagesAPI.getPhotoData()
	}


	return (
		<InfiniteScroll dataLength={dataLength} next={fetchImages} hasMore={true} loader={<Loader />} >
			{children}
		</ InfiniteScroll>
	)

}

