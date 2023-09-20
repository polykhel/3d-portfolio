import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { ServiceModel } from '../models/Service.model.ts';
import { styles } from '../styles.ts';

import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps extends ServiceModel {
  index: number;
}

const ServiceCard = ({ icon, index, title }: ServiceCardProps) => {
  return (
    <Tilt
      scale={1}
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      transitionSpeed={450}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt='title' className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript, Javascript
        and Java, and expertise in frameworks like Angular, React, Svelte and Spring.
        I'm a quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems. Let's
        work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
