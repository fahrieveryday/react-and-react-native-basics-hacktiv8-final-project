import { useReducer, useEffect } from 'react';
import {
  GetMovieDetailReturnType,
  getMovieDetail,
} from '@/services/tmdb/movie/detail/get-movie-detail';
import { UserLayout } from '@/shared/layout/user-layout';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MovieDetailSkeleton } from '@/shared/movie-detail-skeleton';
import { ReloadButton } from '@/shared/reload-button';

interface ParamsTypes extends ParsedUrlQuery {
  movieId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { movieId } = context.params as ParamsTypes;

  return {
    props: {
      movieId,
    }, // will be passed to the page component as props
  };
};

export default function Page({ movieId }: ParamsTypes) {
  interface GetMovieDetailStateType {
    isLoading: boolean;
    isError: boolean;
    data: GetMovieDetailReturnType | null;
  }

  const [getMovieDetailState, setGetMovieDetailState] = useReducer(
    (
      state: GetMovieDetailStateType,
      newState: Partial<GetMovieDetailStateType>
    ) => ({
      ...state,
      ...newState,
    }),
    {
      isLoading: false,
      isError: false,
      data: null,
    }
  );

  const fetchMovieDetail = async ({ movieId }: { movieId: number }) => {
    try {
      setGetMovieDetailState({
        isLoading: true,
        isError: false,
      });
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      );
      if (response.status !== 200) {
        setGetMovieDetailState({
          isError: true,
          isLoading: false,
        });
        return false;
      }
      const data = await response.json();
      setGetMovieDetailState({
        data: data,
        isLoading: false,
      });
    } catch (error) {
      setGetMovieDetailState({
        isError: true,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    fetchMovieDetail({ movieId: Number(movieId) });
  }, [movieId]);

  return (
    <UserLayout>
      {getMovieDetailState.isLoading && <MovieDetailSkeleton />}
      {getMovieDetailState.isError && (
        <ReloadButton
          callback={() => fetchMovieDetail({ movieId: Number(movieId) })}
        />
      )}
      {getMovieDetailState.data &&
        !getMovieDetailState.isLoading &&
        !getMovieDetailState.isError && (
          <div className='flex flex-col gap-4'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://image.tmdb.org/t/p/original/${getMovieDetailState.data?.backdrop_path}`}
              alt='Cover Image Movie'
              className='w-full absolute top-0 left-0 right-0 z-[-1] rounded-lg opacity-5'
            />
            <div className='flex flex-wrap gap-4'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://image.tmdb.org/t/p/original/${getMovieDetailState.data?.backdrop_path}`}
                alt='Cover Image Movie'
                className='rounded-lg w-1/2 flex-1'
              />
              <div className='flex-initial lg:flex-1'>
                <div className='flex flex-col gap-2'>
                  <p className='text-3xl font-extrabold text-white mb-4 underline underline-offset-4'>
                    {getMovieDetailState.data?.original_title}
                  </p>
                  <div className='flex flex-wrap justify-start items-center gap-2'>
                    <p className='text-xl text-white font-bold'>Status:</p>

                    <span className='bg-amber-500 px-2 py-1 rounded font-bold'>
                      {getMovieDetailState.data?.status}
                    </span>
                  </div>
                  <div className='flex flex-wrap justify-start items-center gap-2'>
                    <p className='text-xl text-white font-bold'>
                      Release Date:
                    </p>

                    <span className='bg-amber-500 px-2 py-1 rounded font-bold'>
                      {getMovieDetailState.data?.release_date}
                    </span>
                  </div>
                  <div className='flex flex-wrap justify-start items-center gap-2'>
                    <p className='text-xl text-white font-bold'>Genre:</p>
                    {getMovieDetailState.data?.genres?.map((genre) => (
                      <span
                        key={genre.id}
                        className='bg-amber-500 px-2 py-1 rounded font-bold'
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-wrap justify-start items-center mt-4 gap-2'>
                    <p className='text-xl text-white font-bold'>Overview:</p>
                    <p className='text-lg text-white'>
                      {getMovieDetailState.data?.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </UserLayout>
  );
}
