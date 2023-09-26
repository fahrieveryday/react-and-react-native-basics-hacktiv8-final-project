export const MovieDetailSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 animate-pulse'>
      <div className='flex-col lg:flex-row flex-wrap gap-4'>
        <div className='flex-1 h-[20rem] w-full bg-gray-200 opacity-50 rounded-lg'></div>
        <div className='flex-1 flex flex-col gap-2 mt-2 lg:mt-0'>
          <div className='h-2.5 w-full bg-gray-200 opacity-50 rounded-full'></div>
          <div className='h-2.5 w-3/4 bg-gray-200 opacity-50 rounded-full'></div>
          <div className='h-2.5 w-3/4 bg-gray-200 opacity-50 rounded-full'></div>
          <div className='h-2.5 w-1/2 bg-gray-200 opacity-50 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};
