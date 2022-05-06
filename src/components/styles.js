import styled from 'styled-components';
export const SvgHeart = styled.svg`
height: 24px;
width: 24px;
transition: 0.25s;
fill:  ${props => props.liked_by_user ? '#05a081' : 'white'};

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
	&:hover,
  &:focus {
		color: #05a081;
    background: #fff;
		transition: color 0.15s, background 0.15s;
`;

export const LogOutBtn = styled.a`

	color: #232A34;
	margin-top: 0;
	margin-bottom: 0;
	display: block;
	padding: .7rem 1.75rem;
	font-weight: 600;
	box-shadow: none;
	border: none;
	border-radius: 4px;
	background: #fff;
	transition: color 1.25s , background 0.25s ;
	transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s;
	cursor: pointer;

	&:hover,
  &:focus {
		color: #05a081;
    background: #232A34;
		transition: color 0.15s, background 0.25s;
		transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s;
  }
`;