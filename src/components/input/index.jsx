import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Input = ({ variant }) => {
  return (
    <>
      <motion.input variant={variant} className="w-full md:min-w-[50%] my-5 md:my-0 h-[54px] bg-[#F1F1F1] rounded-lg px-4" type="text" placeholder="Enter your Email Address"/>
    </>
  )
}
Input.propTypes = {
  variant: PropTypes.object
}

export default Input