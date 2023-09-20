import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles.ts';
import { staggerContainer } from '../utils/motion.ts';

const SectionWrapper = (Component: React.FC, idName: string) =>
    function HOC(): React.JSX.Element {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>

                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component/>
            </motion.section>
        );
    };

export default SectionWrapper;