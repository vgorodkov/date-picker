import React, { ImgHTMLAttributes } from 'react';

import { StyledIcon } from './styled';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} alt="icon" />;
};
