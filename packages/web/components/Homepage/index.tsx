import Link from 'next/link';
import * as React from 'react';
import Logo from '../Logo';
import CallToAction from './CallToAction';
import Features from './Features';
import './Homepage.scss';

const Homepage: React.FC = () => (
  <>
    <header className="home-header">
      <Logo />
      <Link href="/login">
        <a className="btn btn--secondary">Log In</a>
      </Link>
      <Link href="/register">
        <a className="btn btn--primary">Register</a>
      </Link>
    </header>
    <div className="home-hero">
      <h1>GymTracker</h1>
      <h2>A useful tool for planning out your exercise routines and diet</h2>
    </div>
    <Features />
    <CallToAction />
  </>
);

export default Homepage;
