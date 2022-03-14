import { DefaultTheme } from 'styled-components';

import { SpaceMixin } from 'src/theme/mixins';

type SvgSize = {
  width: string;
  height: string;
};

interface IconStyle {
  size: SvgSize;
  fontColor?: string;
  bgColor?: string;
}

type IconType = 'facebook' | 'linkedIn';
type IconStyleOmit = Omit<IconStyle, 'size'>;

interface IconProps extends IconStyleOmit, SpaceMixin {
  size: number;
  type: IconType;
}

interface BuildStyle extends IconStyleOmit {
  size: number;
  theme: DefaultTheme;
}

export type { IconStyle, IconProps, BuildStyle, IconType };
