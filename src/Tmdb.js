const API_KEY = 'ac6e4305236e7e6defc4342bb349ca2e';
const API_BASE = 'https://api.themoviedb.org/3';

/*
INFO WE NEED
Netflix originals
trending
top rated
action
comedy
horror;
romance;
documentary;
*/

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;
};

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originals',
				items: await basicFetch(
					`/trending/tv/week?with_network=213&api_key=${API_KEY}`
				),
			},
			{
				slug: 'trending',
				title: 'Trending',
				items: await basicFetch(
					`/trending/all/week?language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'toprated',
				title: 'Top Rated',
				items: await basicFetch(
					`/movie/top_rated?language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'action',
				title: 'Action',
				items: await basicFetch(
					`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'comedy',
				title: 'Comedy',
				items: await basicFetch(
					`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'horror',
				title: 'Horror',
				items: await basicFetch(
					`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(
					`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'documentary',
				title: 'Documentary',
				items: await basicFetch(
					`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`
				),
			},
		];
	},
	getMovieInfo: async (movieId, type) => {
		let info = {};

		if (movieId) {
			switch (type) {
				case 'movie':
					info = await basicFetch(
						`/movie/${movieId}?language=en-US&api_key=${API_KEY}`
					);
					break;
				case 'tv':
					info = await basicFetch(
						`/tv/${movieId}?language=en-US&api_key=${API_KEY}`
					);
					break;
				default:
					info = null;
					break;
			}
		}
		return info;
	},
};
