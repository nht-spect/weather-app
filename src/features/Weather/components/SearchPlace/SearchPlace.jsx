import React, { useEffect, useState } from 'react';
import FormSearch from './FormSearch/FormSearch';
import './style.scss';

function SearchPlace({ woeidsearch, issearch }) {
	const [isSearch, setIsSearch] = useState(false);
	const [listSearch, setListSearch] = useState([]);
	const [woeidSearch, setWoeidSearch] = useState('');

	useEffect(() => {
		woeidsearch && woeidsearch(woeidSearch);
		woeidSearch && setIsSearch(false);
	}, [woeidSearch, woeidsearch]);

	useEffect(() => {
		issearch && issearch(isSearch);
	}, [isSearch, issearch]);

	return (
		<div className='search-place-control'>
			{!isSearch && (
				<div className='btn-search-btn-default d-flex align-center space-between'>
					<button
						className='btn-search-place f-family c-lavender cursor'
						onClick={() => setIsSearch(true)}
					>
						Seach for places
					</button>
					<span className='material-icons-round d-flex c-lavender align-center space-between cursor'>
						my_location
					</span>
				</div>
			)}

			{isSearch && (
				<div className='dialog-search-control background-darkslategray d-flex'>
					<span
						onClick={() => setIsSearch(false)}
						className='material-icons-round c-lavender cursor d-flex'
					>
						close
					</span>
					<FormSearch listsearch={setListSearch} />
					{listSearch.data?.map((data) => (
						<div onClick={() => setWoeidSearch(data.woeid)} key={data.woeid}>
							{data.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
