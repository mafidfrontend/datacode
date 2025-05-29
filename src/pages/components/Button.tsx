// components/Button.tsx created
import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
}
const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border-2 border-red-600 text-red-600 hover:bg-red-500 hover:text-white cursor-pointer px-6 py-2 rounded-md font-medium transition-colors duration-200"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;