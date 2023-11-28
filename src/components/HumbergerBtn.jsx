import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HamburgerBtn = ({ isOpen, onClick }) => {
    const controls = useAnimation();

    const variants = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };

    const lineVariants = {
        closed: { y: 0, rotate: 0 },
        open: {  rotate: [45, 0, -45], transition: { duration: 0.3 } },
    };

    const lineVariants1 = {
        closed: { y: 0, rotate: 0 },
        open: { rotate: [-45, 0, 45], transition: { duration: 0.3 } },
    };
    useEffect(() => {
        controls.start(isOpen ? 'open' : 'closed');
    }, [isOpen, controls]);

    return (
        <div className="w-full h-40 cursor-pointer xl:hidden lg:hidden" onClick={onClick}>
            <motion.div className="line h-1 w-full bg-white d-block" animate={controls} variants={lineVariants} />
            <motion.div className="line h-1 w-full bg-white d-block my-2" animate={controls} variants={variants} />
            <motion.div className="line h-1 w-full bg-white d-block" animate={controls} variants={lineVariants1} />

        </div>
    );
};

export default HamburgerBtn;
