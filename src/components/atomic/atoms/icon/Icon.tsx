import styled, { useTheme } from 'styled-components';

import { spaceMixin } from 'src/theme/mixins';

import { IconProps, BuildStyle, IconStyle } from './IconTypes';
import { FaceBook, LinkedIn } from './iconAsset';

export const icons = {
  facebook: FaceBook,
  linkedIn: LinkedIn,
};

const Icons = ({
  type,
  size = 2.4,
  fontColor,
  bgColor,
  ...props
}: IconProps) => {
  const theme = useTheme();
  const iconStyle = buildIconStyle({
    theme,
    size,
    fontColor,
    bgColor,
  });

  const IconComp = icons[type] || null;

  return <IconComp {...iconStyle} {...props} />;
};

const StyledIcon = styled(Icons)<IconProps>`
  ${spaceMixin}
`;

export default StyledIcon;

function buildIconStyle({
  theme,
  size,
  fontColor,
  bgColor,
}: BuildStyle): IconStyle {
  const { colors } = theme;

  const sizeStyle = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return {
    size: sizeStyle,
    fontColor: fontColor || colors.white,
    bgColor: bgColor,
  };
}
