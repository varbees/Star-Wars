import { useState } from 'react';
import { IoGrid } from 'react-icons/io5';
import { HiViewList } from 'react-icons/hi';
import FilmReel from '../../assets/icons/FilmReel.svg';
import { SlOptionsVertical } from 'react-icons/sl';
import PropTypes from 'prop-types';

const View = ({ films }) => {
  const [view, setView] = useState('grid');

  return (
    <div className='w-full'>
      <div className='flex py-3 px-5 justify-between'>
        <h2 className='font-semibold text-xl'>Films</h2>
        <div className='flex  gap-1 text-gray-500 items-center border-[1px] broder-white rounded-md'>
          <div
            onClick={() => setView('grid')}
            className={`flex items-center px-2 py-1 duration-300 ${
              view === 'grid' && 'bg-white'
            }`}
          >
            <IoGrid className='text-xl mr-1' />
            {view === 'grid' ? 'Grid' : ''}
          </div>

          <div
            onClick={() => setView('list')}
            className={`flex items-center px-2 py-1 duration-300 ${
              view === 'list' && 'bg-white'
            }`}
          >
            <HiViewList className='text-xl inline-block' />
            {view === 'list' ? 'List' : ''}
          </div>
        </div>
      </div>
      {view === 'grid' ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-2.5 pb-5 px-5'>
          {films &&
            films.map(film => {
              return (
                <div className='w-full mb-5' key={film.episode_id}>
                  <div className='h-[200px] w-full'>
                    <div className='h-[160px] aspect-16/9 group rounded-lg '>
                      <img
                        src={`https://starwars-visualguide.com/assets/img/films/${
                          Math.floor(Math.random() * 6) + 1
                        }.jpg`}
                        alt='Some Random Image'
                        className='w-full h-full rounded-lg object-cover'
                      />
                    </div>
                    <div className='flex items-center justify-between  p-3  bg-gray-300 bg-opacity-20 rounded-lg text-white '>
                      <div className='flex items-center gap-2'>
                        <img
                          src={FilmReel}
                          alt='Film Reel'
                          className='fill-white'
                        />
                        <span className='inline-block text-xs lg:text-sm'>
                          {film.title}
                        </span>
                      </div>
                      <div className='ml-auto p-1 rounded-md bg-gray-400 hover:bg-gray-500 bg-opacity-20 text-xl  '>
                        <SlOptionsVertical />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <div className='px-5'>
            <table className='w-full'>
              <thead>
                <tr className='flex items-center justify-between mb-3 p-4 gap-3 bg-gray-300 bg-opacity-20 rounded-md'>
                  <th className='w-1/4 text-left'>Name</th>
                  <th className='w-1/4 text-left'>Director</th>
                  <th className='w-1/4 text-left'>Release Date</th>
                  <th className='w-1/4 text-left'></th>
                </tr>
              </thead>
              {films &&
                films.map(film => (
                  <tbody key={film.episode_id}>
                    <tr className='flex items-center justify-between mb-3 p-4 gap-3 bg-gray-300 bg-opacity-20 rounded-md text-left'>
                      <td className='w-1/4 text-left'>{film.title}</td>
                      <td className='w-1/4 text-left'>{film.director}</td>
                      <td className='w-1/4 text-left'>{film.release_date}</td>
                      <td className='w-1/4 text-left'>
                        <div className='flex justify-end text-2xl'>
                          <SlOptionsVertical className='ml-auto  p-1 rounded-md bg-gray-400 hover:bg-gray-500 bg-opacity-20 ' />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;

View.propTypes = {
  films: PropTypes.array.isRequired,
};
