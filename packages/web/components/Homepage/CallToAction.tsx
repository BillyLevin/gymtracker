import Router from 'next/router';
import * as React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../Button';

const CallToAction: React.FC = () => (
  <div className="home-cta">
    <h3>So what are you waiting for?</h3>
    <FaArrowDown />
    <Button theme="secondary" onClick={() => Router.push('/register')}>Sign Up Now</Button>
  </div>
);

export default CallToAction;
