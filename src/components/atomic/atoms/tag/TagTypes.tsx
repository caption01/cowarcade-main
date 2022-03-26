import { ReactNode } from 'react';

import { SpaceMixin } from 'src/theme/mixins';

type Tag = 'facebook' | 'linkedIn';

interface TagProps extends SpaceMixin {
  color: string;
  icon?: Tag;
  children?: ReactNode;
}

export type { TagProps };
