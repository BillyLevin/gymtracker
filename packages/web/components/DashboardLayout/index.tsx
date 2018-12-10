import Header from '../Header';
import CustomHead from '../CustomHead';
import * as React from 'react';
import Nav from '../Nav';

import './DashboardLayout.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

const DashboardLayout: React.SFC<Props> = ({ title, children }) => (
  <div className="dashboard-layout">
    <CustomHead title={title} />
    <Header />
    <main className="dashboard-content">
      <Nav />
      {children}
    </main>
  </div>
);

export default DashboardLayout;
