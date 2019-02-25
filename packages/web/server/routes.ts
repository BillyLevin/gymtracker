import Routes, * as nextRoutes from 'next-routes';

// @ts-ignore
export const routes = nextRoutes() as Routes;

routes.add('routines', '/routines/:action/:id');
routes.add('edit-meal', '/edit-meal/:id');
