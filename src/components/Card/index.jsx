import React from 'react'
import { Link } from 'react-router-dom'

import location from '../../assets/location.svg'
import typeCook from '../../assets/typeCook.svg'
import time from '../../assets/time.svg'

import './Card.scss'

export const Card = ({ item }) => {

	return (
		<div key={item.id} className='card'>
			<h3 className='card__title'>
				<Link to='' className='card__link'>
					{item.name}
				</Link>
			</h3>
			<div className='card__card_block'>
				<img src={item.photo_one} width={320} alt='' />
				<div className='card__right_part-block'>
					<div>
						<img src={location} width={55} height={55} alt='' />
						<p>
							{item.adress.split(',')[0]},{item.adress.split(',')[2]}
						</p>
					</div>

					<div>
						<img src={typeCook} width='25' height={22} alt='' />
						<p>{item.type_cook}</p>
					</div>

					<div>
						<img src={time} width='25' height={22} alt='' />
						<p>{item.time}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
