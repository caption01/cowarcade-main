interface CardPopupStyleProps {
  active: boolean;
}

interface CardPopupProps extends CardPopupStyleProps {
  title: string;
  content: string;
  src: string;
}

export type { CardPopupProps, CardPopupStyleProps };
