import './DashboardHero.scss';

interface Props {
  welcomeMessage: string;
}

const DashboardHero: React.FC<Props> = ({ welcomeMessage }) => (
  <div className="dashboard-hero">
    <h2>{welcomeMessage}</h2>
    <h3>What would you like to do?</h3>
  </div>
);

export default DashboardHero;
