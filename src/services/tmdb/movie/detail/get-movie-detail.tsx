export interface getMovieDetailPropsType {
  movieId: number;
}

export interface GetMovieDetailReturnType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export const getMovieDetail = async (
  props: getMovieDetailPropsType
): Promise<GetMovieDetailReturnType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );
  return await response.json();
};

export const getMovieDetailMock = async (
  props: getMovieDetailPropsType
): Promise<GetMovieDetailReturnType> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        adult: false,
        backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
        belongs_to_collection: null,
        budget: 63000000,
        genres: [
          {
            id: 18,
            name: 'Drama',
          },
          {
            id: 53,
            name: 'Thriller',
          },
          {
            id: 35,
            name: 'Comedy',
          },
        ],
        homepage: 'http://www.foxmovies.com/movies/fight-club',
        id: props.movieId,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 61.416,
        poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        production_companies: [
          {
            id: 508,
            logo_path: '/7cxRWzi4LsVm4Utfpr1hfARNurT.png',
            name: 'Regency Enterprises',
            origin_country: 'US',
          },
          {
            id: 711,
            logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
            name: 'Fox 2000 Pictures',
            origin_country: 'US',
          },
          {
            id: 20555,
            logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
            name: 'Taurus Film',
            origin_country: 'DE',
          },
          {
            id: 54051,
            logo_path: null,
            name: 'Atman Entertainment',
            origin_country: '',
          },
          {
            id: 54052,
            logo_path: null,
            name: 'Knickerbocker Films',
            origin_country: 'US',
          },
          {
            id: 4700,
            logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
            name: 'The Linson Company',
            origin_country: 'US',
          },
          {
            id: 25,
            logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
            name: '20th Century Fox',
            origin_country: 'US',
          },
        ],
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
        ],
        release_date: '1999-10-15',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            english_name: 'English',
            iso_639_1: 'en',
            name: 'English',
          },
        ],
        status: 'Released',
        tagline: 'Mischief. Mayhem. Soap.',
        title: 'Fight Club',
        video: false,
        vote_average: 8.433,
        vote_count: 26280,
      });
    }, 1500);
  });
