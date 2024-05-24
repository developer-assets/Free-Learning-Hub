import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie.js';
import placeHolderImage from '../../Images/userImage.jpg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [onlinePhotoURL, setOnlinePhotoURL] = useState('');

  useEffect(() => {
    const userData = fetchUserDataFromCookie();
    if (userData) {
      setIsLoggedIn(true);
      if (userData.photoURL !== 'newUser.jpg') {
        setHasPhoto(true);
      }
      setOnlinePhotoURL(userData.photoURL);
    }
    
  }, []);

  return (
    <div className="flex h-14 justify-between items-center border-b border-b-gray-700 px-3">
      <div>
        <Link to={'/'}>
          <h2 className='text-2xl md:text-3xl text-blue-500'>freeLearningHub</h2>
        </Link>
      </div>
      <div className='flex justify-end gap-5 items-center'>
        <div className='flex justify-end gap-3 items-center'>
          <span className='text-gray-400 hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>
            <Link to={'/learn'}>Learn</Link>
          </span>
          <span className='text-gray-400 hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>
            <Link to={'/tools'}>Tools</Link>
          </span>
        </div>
        {
          isLoggedIn ? (
            <div>
              <Link to={'/profile'}>
                <img src={hasPhoto ? onlinePhotoURL : placeHolderImage} className='h-8 w-8 border border-gray-700 object-cover rounded-full' alt='Profile Picture' />
              </Link>
            </div>
          ) : (
            <div className='border border-gray-700 py-1 px-6 rounded-md hover:bg-gray-900 duration-200 cursor-pointer'>
              <Link to={'/login'} >
                LOGIN
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Header;
