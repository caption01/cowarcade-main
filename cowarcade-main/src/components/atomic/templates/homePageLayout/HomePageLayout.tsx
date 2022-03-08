import { Layout } from 'antd';

import { HomePageLayoutProps } from './HomePageLayoutTypes';

const { Content } = Layout;

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};

export default HomePageLayout;
