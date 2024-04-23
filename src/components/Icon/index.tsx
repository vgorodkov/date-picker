import React, { ImgHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Icon = ({ ...props }: IconProps) => {
  return <img {...props} className={styles.icon} alt="icon" />;
};
