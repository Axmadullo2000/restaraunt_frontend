import React, { useState, useContext } from 'react'

import search from '../../assets/search.svg'
import crosschair from '../../assets/crosshair.svg'
import locate from '../../assets/location.svg'

import Header from '../../components/Header'
import { myContext } from '../../context/Context'
import CardList from '../../components/CardList'

import './HomePage.scss'

const HomePage = () => {
	const [searchItem, setSearchItem] = useState('')
	const { state, dispatch } = useContext(myContext)

	const handleSubmit = async e => {
		e.preventDefault()

		if (!searchItem) {
			const res = await fetch('http://127.0.0.1:8000/api/restorans/func/')
			const json = await res.json()
			dispatch({ type: 'ADD_NEW_DATA', payload: json })
		} else {
			const searched = state.restaurantData.filter(item =>
				item.name.toLowerCase().includes(searchItem.toLowerCase())
			)
			dispatch({ type: 'ADD_NEW_DATA', payload: searched })
		}
	}

	return (
		<div className='container'>
			<Header />

			<h2 className='restaraunts_title'>
				Рестораны и кафе в Москве - поиск заведений
			</h2>

			{/* search box */}
			<div className='search_block'>
				<form onSubmit={handleSubmit}>
					<img
						src={search}
						width={25}
						height={25}
						alt=''
						className='search_block__search_icon'
					/>
					<input
						value={searchItem}
						placeholder='Заведение или блюдо'
						name='search'
						id='search'
						className='search_block__search_input'
						onChange={e => setSearchItem(e.target.value)}
					/>
					<button className='search_block__btn'>Искать</button>
				</form>

				<div className='search_block__place_near'>
					<button className='search_block__place_btn'>
						<img src={crosschair} alt='' />
						<span>Заведения рядом</span>
					</button>
				</div>

				<div className='search_block__place_in_map'>
					<button className='search_block__place_in_map_btn'>
						<img src={locate} alt='' width={50} height={50} />
						<span>Заведения рядом</span>
					</button>
				</div>
			</div>

			{/* Card List */}
			<CardList />
		</div>
	)
}

export default HomePage
