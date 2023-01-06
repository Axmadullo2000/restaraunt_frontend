import React, { useState } from 'react'

import search from '../../assets/search.svg'
import crosschair from '../../assets/crosshair.svg'
import locate from '../../assets/location.svg'

import Header from '../../components/Header'
import { Card } from '../../components/Card'
import usePagination from '../../components/Pagination'

import './HomePage.scss'

const HomePage = () => {
	const [searchItem, setSearchItem] = useState('')
	const [restaurantData, setRestaurantData] = useState([])

	const handleSubmit = e => {
		e.preventDefault()
		fetch('http://127.0.0.1:8000/api/restorans/func/')
			.then(res => res.json())
			.then(data => setRestaurantData(data))
	}

	const resultData = restaurantData.filter(item =>
		item.name.toLocaleUpperCase().includes(searchItem.toLocaleUpperCase())
	)

	const {
		firstContentIndex,
		lastContentIndex,
		nextPage,
		prevPage,
		page,
		setPage,
		totalPages,
	} = usePagination({
		contentPerPage: 3,
		count: resultData.length,
	})

	return (
		<div className='container'>
			<Header />

			<h2 className='restaraunts_title'>
				Рестораны и кафе в Москве - поиск заведений
			</h2>
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

			<div>
				{resultData.slice(firstContentIndex, lastContentIndex).map(item => (
					<Card key={item.id} item={item} />
				))}
			</div>

			{totalPages - page >= 0 && (
				<div className='pagination'>
					<p className='text'>
						{page}/{totalPages}
					</p>
					<button onClick={prevPage} className='page'>
						&larr;
					</button>
					{[...Array(totalPages).keys()].map(el => (
						<button
							onClick={() => setPage(el + 1)}
							key={el}
							className={`page ${page === el + 1 ? 'active' : ''}`}
						>
							{el + 1}
						</button>
					))}
					<button onClick={nextPage} className='page'>
						&rarr;
					</button>
				</div>
			)}
		</div>
	)
}

export default HomePage
