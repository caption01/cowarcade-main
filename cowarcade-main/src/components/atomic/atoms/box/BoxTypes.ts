import { ReactNode } from 'react';

import { SpaceMixin } from 'src/theme/mixins';

interface BoxProps extends SpaceMixin {
  display?: string;
  children: ReactNode;
}

export type { BoxProps };
