import * as React from 'react';
import { withAuth } from '../hocs/withAuth';

const Restricted: React.FC = () => <p>hello</p>;

export default withAuth(Restricted);
