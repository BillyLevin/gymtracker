import * as React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import Link from 'next/link';
import './DashboardOptions.scss';

const DashboardOptions: React.FC = () => (
  <div className="dashboard-options">
    <div className="dashboard-option">
      <Link href="/exercises">
        <a>
          <FaDumbbell />
          Manage your exercises
        </a>
      </Link>
    </div>
    <div className="dashboard-option">
      <Link href="/exercises">
        <a>
          <FaDumbbell />
          Manage your routines
        </a>
      </Link>
    </div>
    <div className="dashboard-option">
      <Link href="/exercises">
        <a>
          <FaDumbbell />
          View today's exercise routine
        </a>
      </Link>
    </div>
    <div className="dashboard-option">
      <Link href="/exercises">
        <a>
          <FaDumbbell />
          Manage your exercises
        </a>
      </Link>
    </div>
  </div>
);

export default DashboardOptions;
