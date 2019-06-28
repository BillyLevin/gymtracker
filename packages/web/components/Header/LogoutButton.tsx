import Router from 'next/router';
import React from 'react';
import { Mutation } from 'react-apollo';
import { LOGOUT_MUTATION } from '../../graphql/user/mutation/logout';
import { Logout } from '../../lib/schema-types';
import Button from '../Button';

const LogoutButton: React.FC = () => (
  <Mutation<Logout> mutation={LOGOUT_MUTATION}>
    {mutate => (
      <Button
        type="button"
        theme="primary"
        onClick={async () => {
          const response = await mutate();
          if (response && response.data && response.data.logout) {
            Router.push('/error', '/');
          }
        }}
      >
        Log Out
      </Button>
    )}
  </Mutation>
);

export default LogoutButton;
