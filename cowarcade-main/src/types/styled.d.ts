import 'styled-components';

import { colors } from '../theme/theme';

// export interface Colors {
//   white: '#fff';
//   primary: '#1890ff';
//   darkBlue: '#38369A';
//   lightBlue: '#77B6EA';
//   darkGrey: '#C7D3DD';
//   lightGrey: '#E8EEF2';
//   black: '#363732';
// }

type Colors = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
