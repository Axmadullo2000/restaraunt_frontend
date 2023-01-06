import React from 'react'

import './Header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='container header__container'>
				<p className='header__logo'>Restaraunts</p>
				<ul className='header__navbar'>
					<li className='header__item'>
						<a href='' className='header__link'>Home</a>
					</li>
					<li className='header__item'>
						<a href='' className='header__link'>About</a>
					</li>
					<li className='header__item'>
						<a href='' className='header__link'>Contact</a>
					</li>
					<li className='header__item'>
						<a href='' className='header__link'>Settings</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
