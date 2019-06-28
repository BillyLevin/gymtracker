import React from 'react';
import { skipIfAuth } from '../hocs/skipIfAuth';

const IndexPage: React.FC = () => <p>index</p>;

export default skipIfAuth(IndexPage);
