import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { imagesSearch } from '../redux/actions';
const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public`;


function Header() {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const onSearch =(e) => {
		e.preventDefault();
	dispatch(imagesSearch(searchValue));
	
	}
	return (

		<header className="header">
			<nav className="header__nav-bar flex container">
				<a className="header__logo" href="/" title="Free Stock Foto">
					<div className="header__logo_img">
						<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
							<path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081"></path>
							<path d="M23 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff"></path>
						</svg>
					</div>
					<div className="header__logo_text">PhotoEr</div>
				</a>
				<div className="header__search-bar">
					<form className="search-bar" autoComplete="off">
						<div className="search-bar__container">
							<input
								className="search-bar__input flex"
								autoCapitalize="none"
								autoComplete="off"
								id="search"
								name="s"
								placeholder="Search for free foto"
								required="required"
								type="search"
								value={searchValue}
								onChange= { (e) => {setSearchValue((e.target.value))}}
							>
							</input>
							<button
								className="search-bar__btn flex"
								onClick={onSearch}
								type="submit"
								id="search-action"
								title="Search for stock photos"
							>
								<i className="search-bar__svg-icon svg-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
										</path>
									</svg>
								</i>
							</button>
						</div>
					</form>
				</div>
				<ul className="header__sub-nav sub-nav">
					<li className="sub-nav__item">
						<a className="sub-nav__link" href="/discover/">Explore</a>
					</li>
					<li className="sub-nav__item">
						<a className="sub-nav__link" href="/license/">License</a>
					</li>
					<li className="sub-nav__item">
						<a className="sub-nav__link" href="/upload/">Upload</a>
					</li>
					<li className="sub-nav__item">
						<button className="sub-nav__link dot-btn btn--reset">
							<i className="d-flex align-center">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
									<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
									</path>
								</svg>
							</i>
						</button>
					</li>
					<li className="sub-nav__item">
						<a href={authUrl}
						className="sub-nav__link sub-nav__btn"
						
						// onClick={(e)=>{
						// 	e.preventDefault();
						// 	unsplashApi.auth();
						// 	dispatch(loadUser())
						// }}
						 >
							Join
						</a>
					</li>
				</ul>
			</nav>
			<div className="header__nav-bar_padding"></div>
		</header>

	);
}

export default Header;