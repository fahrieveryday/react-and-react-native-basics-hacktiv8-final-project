export const LoadMoreButton = ({
  callback = () => null,
}: {
  callback: () => void;
}) => {
  const handleClickLoadMore = async () => callback();

  return (
    <div className='h-[10rem] w-full flex flex-col justify-center items-center gap-2 animate-bounce'>
      <button
        className='w-fit px-4 py-2 bg-violet-800 text-white font-bold rounded-lg'
        onClick={handleClickLoadMore}
      >
        Load more...
      </button>
    </div>
  );
};
