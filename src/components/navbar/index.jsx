
import { LOGO_FULL, LOGO_WHITE } from '../../assets/icons';
import useDarkTheme from '../../hooks/useDarkTheme';


const Navbar = () => {

  const isDarkMode = useDarkTheme();
  
  return (
    <nav className='flex items-center h-[100px] w-full'>
      <div className="flex"> <img src={isDarkMode ? LOGO_WHITE : LOGO_FULL} alt="Brand Logo"/></div>
    </nav>
  )
}

export default Navbar