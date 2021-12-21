import React from 'react';
import s from './Heading.module.css';
// import styled from 'styled-components';

// const Div = styled.div`
// max-width: 70rem;
// margin: 2rem auto;
// text-align: center;
// `;

// const H1 = styled.h1`
// 	font-family: 'Oswald', sans-serif;
// 	margin-bottom: 1em;

// `;

export const Heading = () => {
	return (
		<div className={s.headingBlog}>
			<h1 className={s.h1}>Photozen</h1>
			<p>The internet’s source of freely-usable images.</p>
			<p>Powered by creators everywhere.</p>
		</div>
	)
}
