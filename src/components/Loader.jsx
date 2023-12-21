const Loader = () => {
  return (
    <div
      role='status'
      className='h-[80vh] w-full flex justify-center items-center'
    >
      <div className='flex gap-2'>
        <div className='w-5 h-5 rounded-full animate-pulse bg-white'></div>
        <div className='w-5 h-5 rounded-full animate-pulse bg-white'></div>
        <div className='w-5 h-5 rounded-full animate-pulse bg-white'></div>
      </div>
    </div>
  );
};

export default Loader;
