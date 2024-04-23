import React from 'react';

import { DateVariant } from '@/types/date';

import styles from './styles.module.scss';
import { DateProps } from './types';

export const Date = ({ date, variant = DateVariant.DEFAULT, selected = false }: DateProps) => {
  const getClassnameByVariant = () => {
    switch (variant) {
      case DateVariant.DEFAULT:
        return styles.default;
      case DateVariant.DISABLED:
        return styles.disabled;
      case DateVariant.WEEKDAY:
        return styles.weekday;
      default:
        return DateVariant.DEFAULT;
    }
  };

  return (
    <div
      role="none"
      className={`${styles.dayContainer} ${getClassnameByVariant()}  ${selected ? styles.selected : ''}`}
    >
      {date.day}
    </div>
  );
};
