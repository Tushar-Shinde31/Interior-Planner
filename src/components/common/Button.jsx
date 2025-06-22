import { motion } from 'framer-motion';
import { scaleIn } from '../../animation/motionVariants';

const Button = ({ children, onClick, className = '', ...props }) => (
  <motion.button
    variants={scaleIn}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
    whileTap={{ scale: 0.97 }}
    className={`px-6 py-3 rounded-lg shadow-lg bg-primary text-white font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button; 