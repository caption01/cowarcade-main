import { CardProps as CardAntdProps } from 'antd';

import { SpaceMixin } from 'src/theme/mixins';

interface CardProps extends CardAntdProps, SpaceMixin {}

export type { CardProps };
