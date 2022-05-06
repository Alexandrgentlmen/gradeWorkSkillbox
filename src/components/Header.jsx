import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeImagesState, changeSearchText, imagesLoad, loadUserProfile, resetSerchPage} from '../redux/actions';
import { User } from './User';
import { Join } from './Join';
import { LogOut } from './LogOut';
import SearchBtnSvg from './SearchBtnSvg';
import LogoSvg from './LogoSvg';
import DotBtnSvg from './DotBtnSvg';

function Header() {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const pageNumber = useSelector(state => state.imagesReducer.pageNumber);
	const userProfile = useSelector(state => state.userReducer.userProfile);
	const isAuth = useSelector(state => state.tokenReducer.isAuth);

	useEffect(() => {
		dispatch(loadUserProfile(userProfile.username))
	},[userProfile.username, dispatch])

	const onSearch =(e) => {
		e.preventDefault();
		dispatch(resetSerchPage());
		dispatch(changeImagesState());
		dispatch(changeSearchText(searchValue));
		dispatch(imagesLoad(searchValue,pageNumber));
	}

	return (
		<header className="header">
			<nav className="header__nav-bar flex container">

				<Link className="header__logo" to="/" title="Photer Foto">
					<div className="header__logo_img">
						<LogoSvg/>
					</div>
					<div className="header__logo_text">PhotoEr</div>
				</Link>

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
								onChange= { 
									(e) => {
										setSearchValue((e.target.value))
									}}
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
								<SearchBtnSvg/>
								</i>
							</button>
						</div>
					</form>
				</div>
				<User user={userProfile}/>
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
								<DotBtnSvg/>
							</i>
						</button>
					</li>
					{isAuth ?	<LogOut /> : <Join/>}
				</ul>

			</nav>
			<div className="header__nav-bar_padding"></div>
		</header>

	);
}

export default Header;