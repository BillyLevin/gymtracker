import * as React from 'react';

interface Props {
  title: string;
  desc: string;
  children: React.ReactNode;
}

const Feature: React.FC<Props> = ({ title, desc, children }) => (
  <div className="home-feature">
    <div className="feature-img">{children}</div>
    <h3 className="feature-title">{title}</h3>
    <span className="feature-desc">{desc}</span>
  </div>
);

export default Feature;
