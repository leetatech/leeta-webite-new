import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Input = ({ variant, onChange, value }) => {
  return (
    <>
      <motion.input 
        variant={variant}   
        value={value} 
        className="w-full md:min-w-[50%] my-5 md:my-0 h-[54px] bg-[#171717] rounded-lg px-4" 
        type="text" 
        placeholder="Enter your Email Address"
        onChange={onChange}
      />
    </>
  )
}
Input.propTypes = {
  variant: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string, 
}

export default Input