import { useContext } from 'react'
import { myContext } from '../../context/Context'
import { Card } from '../Card'
import usePagination from '../usePagination'

const CardList = () => {
	const { state, dispatch } = useContext(myContext)

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
		count: state.restaurantData.length,
	})


	return (
		<>
			{state.restaurantData
				.slice(firstContentIndex, lastContentIndex)
				.map(item => (
					<Card key={item.id} item={item} />
				))}

			{/* pagination */}
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
		</>
	)
}

export default CardList
