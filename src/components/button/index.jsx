// import React from 'react'
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'
import { ARROW_RIGHT } from '../../assets/icons';

const Button = ( {label, extraStyles, variant} ) => {
  return (
    <motion.button variant={variant} className={`flex justify-center items-center gap-4 bg-[#FD671E] text-white hover:bg-[#d45a1c]  h-[56px] px-10 rounded-lg ${extraStyles}`}>{ label ? label : 'button' } <span> <img src={ARROW_RIGHT}/></span></motion.button>
  )
}

// Defining prop types
Button.propTypes = {
  label: PropTypes.string.isRequired,
  extraStyles: PropTypes.string,
  variant: PropTypes.object,
}

export default Button