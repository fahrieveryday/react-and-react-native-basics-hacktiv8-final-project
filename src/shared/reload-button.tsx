export const ReloadButton = ({
  callback = () => null,
}: {
  callback: () => void;
}) => {
  const handleClickReload = async () => callback();

  return (
    <div className='h-[20rem] w-full flex flex-col justify-center items-center gap-2 border rounded-xl'>
      <p className='text-2xl text-white font-bold'>Ups Error Bos</p>
      <button
        className='w-fit px-4 py-2 bg-violet-800 text-white font-bold rounded-lg'
        onClick={handleClickReload}
      >
        Try Again
      </button>
    </div>
  );
};
