export const MoviesSkeleton = ({ total = 1 }: { total: number }) => {
  const data = new Array(total).fill(0);
  return (
    <>
      {data.map((_, index) => (
        <div key={index} className='flex flex-col gap-2 animate-pulse'>
          <div className='h-[20rem] w-full bg-gray-200 opacity-50 rounded-lg'></div>
          <div className='flex flex-col gap-2'>
            <div className='h-2.5 w-full bg-gray-200 opacity-50 rounded-full'></div>
            <div className='h-2.5 w-3/4 bg-gray-200 opacity-50 rounded-full'></div>
          </div>
        </div>
      ))}
    </>
  );
};
