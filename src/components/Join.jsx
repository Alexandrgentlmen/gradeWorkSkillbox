import React from 'react'
import { JoinBtn } from './styles';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
// REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+write_likes`;

export const Join = () => {
	return (
		
			<JoinBtn
				  href={authUrl}
			 	  className="sub-nav__link">
				  Join
			</JoinBtn>
	
	)
}
