import { css } from 'styled-components';
import { map } from 'lodash';

type Width = string | number | undefined;
type Height = string | number | undefined;

type PaddingUnit = number;
type MarginUnit = number;

type PaddingMargin =
  | [y: PaddingUnit | MarginUnit, x: PaddingUnit | MarginUnit]
  | PaddingUnit
  | MarginUnit
  | undefined;

interface SpaceMixin {
  width?: Width;
  height?: Height;
  padding?: PaddingMargin;
  margin?: PaddingMargin;
  ml?: MarginUnit;
  mr?: MarginUnit;
  pl?: PaddingUnit;
  pr?: PaddingUnit;
}

function handleWidthAndHeightCss(wh: Width | Height): string {
  if (!wh) return 'auto';

  if (typeof wh === 'number') {
    return `${wh}rem`;
  }

  if (typeof wh === 'string') {
    return wh;
  }

  return 'auto';
}

function handlePaddingMarginCss(pm: PaddingMargin): string | undefined {
  if (Array.isArray(pm)) {
    const strings = map(pm, (pad) => `${pad}rem`);
    return strings.join(' ');
  }

  if (typeof pm === 'number') {
    return `${pm}rem ${pm}rem`;
  }
}

function handlePaddingMarginLeftRightCss(
  unit: PaddingUnit | MarginUnit | undefined
): string | undefined {
  if (typeof unit === 'number') {
    return `${unit}rem`;
  }
}

const spaceMixin = css`
  width: ${({ width }: SpaceMixin) => handleWidthAndHeightCss(width)};
  height: ${({ height }: SpaceMixin) => handleWidthAndHeightCss(height)};
  padding: ${({ padding }: SpaceMixin) => handlePaddingMarginCss(padding)};
  margin: ${({ margin }: SpaceMixin) => handlePaddingMarginCss(margin)};

  margin-right: ${({ mr }: SpaceMixin) => handlePaddingMarginLeftRightCss(mr)};
  margin-left: ${({ ml }: SpaceMixin) => handlePaddingMarginLeftRightCss(ml)};

  padding-right: ${({ pr }: SpaceMixin) => handlePaddingMarginLeftRightCss(pr)};
  padding-left: ${({ pl }: SpaceMixin) => handlePaddingMarginLeftRightCss(pl)};
`;

export { spaceMixin };

export type { SpaceMixin };
