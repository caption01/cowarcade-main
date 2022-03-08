import { Layout } from 'antd';
import styled from 'styled-components';

import { HomePageLayoutProps } from './HomePageLayoutTypes';

const { Content } = Layout;

const CenterLayout = styled(Layout)`
  &.ant-layout {
    position: relative;
    background: #fff;
    height: 100vh;
  }

  .ant-layout-content {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <CenterLayout>
      <Content>{children}</Content>
    </CenterLayout>
  );
};

export default HomePageLayout;
