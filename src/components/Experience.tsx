import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { ExperienceModel } from '../models/Experience.model.ts';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

interface ExperienceCardProps extends ExperienceModel {}

const ExperienceCard = ({
  date,
  icon,
  iconBg,
  companyName,
  title,
  points,
}: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={icon}
          alt={companyName}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px]'>{title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {companyName}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {points.map((point) => (
        <li
          key={`experience-point-${point}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience}></ExperienceCard>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
