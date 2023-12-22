import { useState } from 'react';
import RightArrow from '../assets/icons/RightArrow.svg';
import UpArrow from '../assets/icons/UpArrow.svg';
import FilmReel from '../assets/icons/FilmReel.svg';
import { FaFolder } from 'react-icons/fa';

const Accordian = () => {
  const sections = [
    {
      name: 'Films',
      items: [
        'A New Hope',
        'The Empire Strikes Back',
        'Return of the Jedi',
        'The Phantom Menace',
        'Attack of the Clones',
        'Revenge of the Sith',
      ],
    },
    { name: 'People', items: ['Person 1', 'Person 2', 'Person 3'] },
    { name: 'Planets', items: ['Planet 1', 'Planet 2', 'Planet 3'] },
    { name: 'Species', items: ['Species 1', 'Species 2', 'Species 3'] },
    { name: 'Starships', items: ['Starship 1', 'Starship 2', 'Starship 3'] },
    { name: 'Vehicles', items: ['Vehicle 1', 'Vehicle 2', 'Vehicle 3'] },
  ];

  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = name => {
    setOpenSection(prevName => (prevName === name ? null : name));
  };

  return (
    <div className='hidden sm:block w-[200px] sm:w-[250px] md:w-[300px] h-screen text-white text-medium text-sm md:text-base py-2.5 pl-4 pr-3.5 font-medium duration-500'>
      {sections.map((section, i) => (
        <div key={i}>
          <div
            className={`flex justify-between gap-2 items-center rounded-md active:bg-pink-500 hover:bg-pink-500 cursor-pointer py-2 px-3 mb-2.5 select-none ${
              openSection === section.name ? 'bg-pink-500' : ''
            }`}
            onClick={() => handleSectionClick(section.name)}
          >
            <div className='inline-flex gap-2 items-center '>
              <FaFolder />
              <span>{section.name}</span>
            </div>
            <img
              src={openSection === section.name ? UpArrow : RightArrow}
              alt={openSection === section.name ? 'UpArrow' : 'RightArrow'}
              className={`transition-transform transform ${
                openSection === section.name ? 'rotate-270' : ''
              }`}
            />
          </div>
          {openSection === section.name && (
            <div
              className={`overflow-hidden ${
                openSection === section.name ? 'h-auto}' : 'h-0'
              }`}
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between gap-2 rounded-md active:bg-gray-500 hover:bg-gray-500 cursor-pointer py-2 pl-5 pr-3 mb-2.5 select-none'
                >
                  <div className='inline-flex gap-2 items-center' title={item}>
                    <img src={FilmReel} className='w-4 h-4' alt='Film Reel' />
                    <span className='truncate tracking-tight'>{item}</span>
                  </div>
                  <img src={RightArrow} alt='right-arrow' />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
