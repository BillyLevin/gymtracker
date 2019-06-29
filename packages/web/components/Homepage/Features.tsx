import * as React from 'react';
import { FaAppleAlt, FaDollarSign, FaDumbbell } from 'react-icons/fa';
import Feature from './Feature';

const Features: React.FC = () => (
  <div className="home-features">
    <Feature
      title="Easily organise your exercise routines"
      desc="Create exercises, including the number of reps and sets, and add them to your own custom workouts"
    >
      <FaDumbbell />
    </Feature>
    <Feature
      title="Plan your daily meals"
      desc="Keep track of all the ingredients, number of calories, and amount of protein in your meals"
    >
      <FaAppleAlt />
    </Feature>
    <Feature
      title="Completely free"
      desc="Every feature of GymTracker is available to you free of charge. All you have to do is sign up!"
    >
      <FaDollarSign />
    </Feature>
  </div>
);

export default Features;
