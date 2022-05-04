import styled from 'styled-components';

export const SvgHeart = styled.svg`

height: 24px;
width: 24px;
transition: 0.25s;
fill:  ${props => props.liked_by_user ? '#05a081' : 'white'};

`;

export const SvgCollect = styled.svg`

height: 24px;
width: 24px;
transition: 0.25s;
fill: white;

`;

export const SvgDownload = styled.svg`

height: 100px;
width: 100px;
transition: 0.25s;
fill: white;

`;

export const JoinBtn = styled.a`

	margin-top: 0;
	margin-bottom: 0;
	display: block;
	padding: .7rem 1.75rem;
	font-weight: 600;
	box-shadow: none;
	border: none;
	border-radius: 4px;
	background: #05a081;
	transition: transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s;

`;

export const LogOutBtn = styled.a`

	color: #818181;
	margin-top: 0;
	margin-bottom: 0;
	display: block;
	padding: .7rem 1.75rem;
	font-weight: 600;
	box-shadow: none;
	border: none;
	border-radius: 4px;
	background: #fff;
	transition: color 0.15s; , background 0.15s , transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s;
	cursor: pointer;

	&:hover,
  &:focus {
		color: #fff;
    background: #05a081;
		transition: color 0.15s, background 0.15s;
  }
`;