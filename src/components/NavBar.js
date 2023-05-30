import logo from '../logo.png';
import { Link } from 'react-router-dom';


function NavBar () {
  return (
    <div className='z-50 w-full h-30 bg-white border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont '>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
       <Link to='/'>
          <div>
            <img src={logo} alt="Logo" className='w-30' />
          </div>
       </Link>
      <div className='flex gap-5 items-center'>
        <ul className='flex items-center gap-8 cursor-pointer'>
          <Link to={'/'}><li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li></Link>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Pages</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Shop</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Element</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Blog</li>
        </ul>
        
        <Link to='/cart'>
          <div className='cursor-pointer relative'>
          <span className='abslute top-2 left-0'></span>
          </div>
        </Link>
      </div>
      </div>
     
    </div>
  )
}

export default NavBar;
