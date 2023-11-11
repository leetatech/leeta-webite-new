import Input from '../input';
import Button from '../button';
import { HAPPY_MAN } from '../../assets/images';
import { SCRIBBLE } from '../../assets/icons';
import Popout from '../popout';
import { motion} from 'framer-motion'
import { CHILD_ANIMATION, PARENT_ANIMATION } from '../../utils';
import { useState } from 'react';

const Hero = () => {
  const heading = "Safer and convenient way to order ".split('');
  const [email, setEmail] = useState('');
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const apiUrl = 'https://leetabackend-e6d948d15ae2.herokuapp.com/api/session/early_access';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Email submitted successfully!');
        // You can reset the email state here if needed
        setEmail('');
      } else {
        alert('Failed to submit email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <header className='mt-10 md:mt-0 h-auto md:min-h-[80vh] flex items-center'>
      <div className="inner block md:flex w-full items-center">
        {/* left side */}
        <motion.div className="left block w-full md:w-1/2 text-left"
          variants={PARENT_ANIMATION()}
          initial="hidden"
          animate="visible"
        >
          
          { heading.map((letter, index) => (
            <motion.h2 key={index} variants={CHILD_ANIMATION()} className={`inline text-start text-[48px] md:text-[64px] leading-[58px] md:leading-[86px] font-[600px] tracking-tighter ${index > 33 ? 'text-[#FD671E]': ''}`}>{letter}</motion.h2>
          ))}


          <motion.span variants={CHILD_ANIMATION()} className='inline text-start text-[48px] md:text-[64px] leading-[58px] md:leading-[86px] font-[600px] tracking-tighter text-[#FD671E]'>gas</motion.span>
          <motion.p variants={CHILD_ANIMATION()} className="text-start w-[80%] md:w-[60%] font-light mt-8">Leeta makes it easy for customers to purchase gas anywhere and anytime from the convenience of homes or offices.</motion.p>

          <motion.form onSubmit={handleSubmit} variants={PARENT_ANIMATION({delayChild: 0.1, staggerChild: 1.2})} className='block md:flex gap-5 mt-8'>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} variants={CHILD_ANIMATION()} />
            <Button variants={CHILD_ANIMATION({delayChild: 1.3})}label="Join waiting list"/>
          </motion.form>
        </motion.div>

        {/* right side */}
        <div className="right w-full md:w-1/2 my-10 md:my-0 flex justify-center">

          <motion.div 
           variants={PARENT_ANIMATION({delayChild: .08, staggerChild: .9})}
           initial="hidden"
           animate="visible"
           
            className='flex relative'>
            
            <motion.div variants={CHILD_ANIMATION()} className='overflow-hidden max-w-[475px] h-[607px] rounded-xl relative'>
              <img src={HAPPY_MAN} alt="business man" className='h-full object-cover'/>
            </motion.div>
            {/* scribble icon */}
            <motion.img variant={CHILD_ANIMATION()} className="absolute -top-4 right-20" src={SCRIBBLE} alt="scribble icon"/>
             

            {/* first popout */}
            <Popout framerProp={CHILD_ANIMATION()} extraStyles={'absolute top-10 -right-2 md:-right-20'} title='Order Accepted' caption='Vendor has accepted your order' />
            <Popout framerProp={CHILD_ANIMATION({duration :1.4})} extraStyles={'absolute bottom-10 -left-2 md:-left-10'} title='Order Completed' caption='Gas delivered successfully'/>
           

          </motion.div>


        </div>
      </div>
    </header>
  )
}

export default Hero