import { LOGO_CIRCLE } from "../../assets/icons"
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Popout = ( { title, caption, extraStyles, framerProp } ) => {
  return (
    <motion.div variants={framerProp} className={`bg-white shadow-2xl rounded-lg p-3 md:p-5 flex items-center gap-3 md:gap-5 text-left  ${extraStyles}`}>
      <img src={LOGO_CIRCLE} alt="logo icon "/>
      <div>
        <h3 className=" text-[14px] md:text-[18px] font-bold text-slate-800 dark:text-slate-800 ">{ title ? title : 'Some header' }</h3>
        <p className="text-[12px] md:text-[18px] text-slate-400 dark:text-slate-400">{ caption ? caption : 'the bottom part of the text' }</p>
      </div>
    </motion.div>
  )
}

// Declaring prop-types
Popout.propTypes = {
  extraStyles: PropTypes.string,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  framerProp: PropTypes.object
}

export default Popout