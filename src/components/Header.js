import homeicon from '../assets/homeicon.svg';
import icon from '../assets/cartIcon.svg';
import userIcon from '../assets/userIcon.svg';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <div className="flex justify-between items-center p-5 shadow-lg fixed top-0 left-0 right-0 mb-4 bg-white">
        <div className=''>
        <Link to="/">
            <img 
            className='h-8 mx-3'
            alt='logo'
            src={homeicon}
             />
            </Link>
        </div>
        <div>
              <h1 className='font-serif font-bold text-3xl'>Citi-Cart</h1>
          </div>
        <div className='flex flex-row gap-12'>
        <div className=''>
        <Link to={"/cart"} >   
            <div className='relative text-2xl font-bold'>
            <img 
            className='h-8 mx-3'
            alt='icon'
            src={icon}
            />
            </div>
            </Link> 
        </div>
        <div className=''>
            <img 
            className='h-8'
            alt='user' 
            src= {userIcon} />
             </div>
        </div>
    </div>
  )
};

export default Header;