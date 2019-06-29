import Router from 'next/router';
import * as React from 'react';
import Button from '../Button';
import Logo from '../Logo';
import CallToAction from './CallToAction';
import Features from './Features';
import './Homepage.scss';

const Homepage: React.FC = () => (
  <>
    <header className="home-header">
      <Logo />
      <Button theme="secondary" onClick={() => Router.push('/login')}>
        Log In
      </Button>
      <Button theme="primary" onClick={() => Router.push('/register')}>
        Sign Up
      </Button>
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
