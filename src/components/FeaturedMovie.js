import React from 'react';
import './FeaturedMovie.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



export default ({ item }) => {
  let score = Math.round(item.vote_average * 10);
	let firstDate = new Date(item.first_air_date);
	let genres = [];
	for (let i in item.genres) {
		genres.push(item.genres[i].name);
	}

	return (
		<section
			className="featured"
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className="featured--vertical">
				<div className="featured--horizontal">
					<div className="featured--name">{item.original_name}</div>
					<div className="featured--info">
						<div className="featured--points">{score}% Match</div>
						<div className="featured--year">{firstDate.getFullYear()}</div>
						<div className="featured--seasons">
							{item.number_of_seasons} Season
							{item.number_of_seasons !== 1 ? 's' : ''}
						</div>
					</div>
					<div className="featured--description">{item.overview}</div>
					<div className="featured--buttons">
						<a className="featured--watchbutton" href={`/watch/${item.id}`}>
							<PlayArrowIcon className="arrow"/>Watch
						</a>
						<a className="featured--mylistbutton" href={`/list/add${item.id}`}>
							<ErrorOutlineIcon className="info"/>More Info
						</a>
					</div>
					<div className="featured--genres">
						<strong>Genres:</strong> {genres.join(', ')}
					</div>
				</div>
			</div>
		</section>
	);
};
