import React from 'react';
import Masonry from "react-masonry-component";
import Cards from '../Cards/Cards';

export function MasonryFunc(props) {
	console.log(props)
	const masonryOptions = {
		fitWidth: false,
		columnWidth: 350,
		gutter: 1,
		itemSelector: ".card",
	};

	const images = props.photo

	return (
		<Masonry className={"photo-list"}
			elementType={"div"}
			options={masonryOptions}
			disableImagesLoaded={false}
			updateOnEachImageLoad={false}>
			{
				images.map(image => (<Cards url={image.urls.thumb} key={image.id} />))
			}
		</Masonry >
	)
}
