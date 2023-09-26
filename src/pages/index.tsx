import { useReducer, useState, useEffect, Fragment, useRef } from 'react';
import Link from 'next/link';
import { GetMoviePopularPerPageReturnType } from '@/services/tmdb/movie/popular/get-movie-popular-per-page';
import { MoviesSkeleton } from '@/shared/movies-skeleton';
import { UserLayout } from '@/shared/layout/user-layout';
import { StarSvg } from '@/svg/star-svg';
import { LoadMoreButton } from '@/shared/load-more-button';
import { ReloadButton } from '@/shared/reload-button';
import { useWindowSize, useWindowScroll } from 'react-use';

export default function Page() {
  const onScrollFetching = useRef(false);
  const { height } = useWindowSize();
  const { y } = useWindowScroll();

  interface PageLimiterStateType {
    dataFetching: boolean;
    dataFetchingError: boolean;
    nextPage: number;
  }

  const [pageLimiter, setPageLimiter] = useReducer(
    (state: PageLimiterStateType, newState: Partial<PageLimiterStateType>) => ({
      ...state,
      ...newState,
    }),
    {
      dataFetching: false,
      dataFetchingError: false,
      nextPage: 1,
    }
  );

  const [getMoviePopularPerPageState, setGetMoviePopularPerPage] = useState<
    GetMoviePopularPerPageReturnType[]
  >([]);

  const fetchMoviePopularPerPage = async () => {
    try {
      setPageLimiter({
        dataFetching: true,
        dataFetchingError: false,
      });
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageLimiter.nextPage}`
      );
      if (response.status !== 200) {
        setPageLimiter({
          dataFetchingError: true,
          dataFetching: false,
        });
        return false;
      }
      const data = await response.json();
      setTimeout(() => {
        setGetMoviePopularPerPage([...getMoviePopularPerPageState, data]);
        setPageLimiter({
          nextPage: pageLimiter.nextPage + 1,
          dataFetching: false,
        });
      }, 1500);
    } catch (error) {
      setPageLimiter({
        dataFetchingError: true,
        dataFetching: false,
      });
    }
  };

  useEffect(() => {
    fetchMoviePopularPerPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (
        y + height + 200 >= document.body.scrollHeight &&
        !onScrollFetching.current
      ) {
        onScrollFetching.current = true;
        await fetchMoviePopularPerPage();
        onScrollFetching.current = false;
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y, height]);

  return (
    <UserLayout>
      <div className='flex flex-col gap-4 mb-60'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-extrabold text-white'>Popular Movie</p>
        </div>
        <div className='relative grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  gap-8'>
          {getMoviePopularPerPageState.map((movie, movieIndex) => (
            <Fragment key={movieIndex}>
              {movie?.results?.map((movie, movieIndex) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={movieIndex}
                  className='flex flex-col gap-2 cursor-pointer'
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className='block h-[20rem] rounded-lg hover:scale-105 transition-all duration-500'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt='Cover image'
                  />
                  <div className=''>
                    <p className='font-bold text-white'>{movie.title}</p>
                    <div className='flex justify-start items-center gap-2'>
                      <StarSvg />
                      <p className='font-bold text-white'>
                        {movie.vote_average}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </Fragment>
          ))}
          {pageLimiter.dataFetching && <MoviesSkeleton total={5} />}
        </div>
        {pageLimiter.dataFetchingError && (
          <ReloadButton callback={() => fetchMoviePopularPerPage()} />
        )}
        {!pageLimiter.dataFetching && !pageLimiter.dataFetchingError && (
          <LoadMoreButton callback={() => fetchMoviePopularPerPage()} />
        )}
      </div>
    </UserLayout>
  );
}
