import { BoxTextProps } from './BoxTextTypes';

const BoxText = ({ children }: BoxTextProps) => {
  return (
    <div>
      <h1>hello Box</h1>
      {children}
    </div>
  );
};

export default BoxText;
