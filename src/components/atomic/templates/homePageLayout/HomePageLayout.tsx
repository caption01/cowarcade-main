import { Layout } from 'antd';
import styled from 'styled-components';

import { HomePageLayoutProps } from './HomePageLayoutTypes';

const { Content } = Layout;

const CenterLayout = styled(Layout)`
  margin-top: 4rem;

  &.ant-layout {
    position: relative;
    background: #fff;
    min-height: 100vh;
  }

  .ant-layout-content {
    position: absolute;
    margin: 0;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
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
