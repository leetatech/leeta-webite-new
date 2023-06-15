import { LOGO_FULL } from '../../assets/icons'

const Navbar = () => {
  return (
    <nav className='flex items-center h-[100px] w-full'>
      <div className="flex"> <img src={LOGO_FULL} alt="Brand Logo"/></div>
    </nav>
  )
}

export default Navbar