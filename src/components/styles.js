import styled from 'styled-components';

export const SvgHeart = styled.svg`

height: 24px;
width: 24px;
transition: 0.25s;
fill:  ${props => props.likeFromUser ? '#05a081' : 'white'};

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