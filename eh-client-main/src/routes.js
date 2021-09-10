import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import GuestGuard from './components/Auth/GuestGuard';
import AuthGuard from './components/Auth/AuthGuard';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [
    {
        exact: true,
        guard: GuestGuard,
        path: '/auth/signin',
        component: lazy(() => import('./views/auth/signin/SignIn'))
    },
    {
        exact: true,
        guard: GuestGuard,
        path: '/auth/signup',
        component: lazy(() => import('./views/auth/signup/SignUp'))
    },
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('./views/errors/NotFound404'))
    },
    {
        exact: true,
        path: '/maintenance/coming-soon',
        component: lazy(() => import('./views/maintenance/ComingSoon'))
    },
    {
        exact: true,
        path: '/maintenance/error',
        component: lazy(() => import('./views/maintenance/Error'))
    },
    {
        exact: true,
        path: '/maintenance/offline-ui',
        component: lazy(() => import('./views/maintenance/OfflineUI'))
    },
    {
        exact: true,
        path: '/auth/signup-1',
        component: lazy(() => import('./views/auth/signup/SignUp1'))
    },
    {
        exact: true,
        path: '/auth/signup-2',
        component: lazy(() => import('./views/auth/signup/SignUp2'))
    },
    {
        exact: true,
        path: '/auth/signup-3',
        component: lazy(() => import('./views/auth/signup/SignUp3'))
    },
    {
        exact: true,
        path: '/auth/signup-4',
        component: lazy(() => import('./views/auth/signup/SignUp4'))
    },
    {
        exact: true,
        path: '/auth/signup-5',
        component: lazy(() => import('./views/auth/signup/SignUp5'))
    },
    {
        exact: true,
        path: '/auth/signin-1',
        component: lazy(() => import('./views/auth/signin/SignIn1'))
    },
    {
        exact: true,
        path: '/auth/signin-2',
        component: lazy(() => import('./views/auth/signin/SignIn2'))
    },
    {
        exact: true,
        path: '/auth/signin-3',
        component: lazy(() => import('./views/auth/signin/SignIn3'))
    },
    {
        exact: true,
        path: '/auth/signin-4',
        component: lazy(() => import('./views/auth/signin/SignIn4'))
    },
    {
        exact: true,
        path: '/auth/signin-5',
        component: lazy(() => import('./views/auth/signin/SignIn5'))
    },
    {
        exact: true,
        path: '/auth/reset-password-1',
        component: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
    },
    {
        exact: true,
        path: '/auth/reset-password-2',
        component: lazy(() => import('./views/auth/reset-password/ResetPassword2'))
    },
    {
        exact: true,
        path: '/auth/reset-password-3',
        component: lazy(() => import('./views/auth/reset-password/ResetPassword3'))
    },
    {
        exact: true,
        path: '/auth/reset-password-4',
        component: lazy(() => import('./views/auth/reset-password/ResetPassword4'))
    },
    {
        exact: true,
        path: '/auth/reset-password-5',
        component: lazy(() => import('./views/auth/reset-password/ResetPassword5'))
    },
    {
        exact: true,
        path: '/auth/change-password',
        component: lazy(() => import('./views/auth/ChangePassword'))
    },
    {
        exact: true,
        path: '/auth/profile-settings',
        component: lazy(() => import('./views/auth/ProfileSettings'))
    },

    
    {
        exact: true,
        path: '/auth/tabs-auth',
        component: lazy(() => import('./views/auth/TabsAuth'))
    },
    {
        exact: true,
        path: '/auth/map-form',
        component: lazy(() => import('./views/auth/MapForm'))
    },
    {
        exact: true,
        path: '/auth/subscribe',
        component: lazy(() => import('./views/auth/Subscribe'))
    },
    {
        exact: true,
        path: '/landing',
        component: lazy(() => import('./views/landing'))
    },
    {
        path: '*',
        layout: AdminLayout,
        guard: AuthGuard,
        routes: [
            {
                exact: true,
                path: '/trust/list',
                component: lazy(() => import('./pages/trust/TrustList'))
            },
            {
                exact: true,
                path: '/trust/kanban',
                component: lazy(() => import('./pages/trust/TrustKanban'))
            },
            {
                exact: true,
                path: '/trust/:id',
                component: lazy(() => import('./pages/trust/TrustDetail'))
            },
            {
                exact: true,
                path: '/trust',
                component: lazy(() => import('./pages/trust/CreateTrust'))
            },
            {
                exact: true,
                path: '/app/dashboard/default',
                component: lazy(() => import('./views/dashboard/DashDefault'))
            },
            
            {
                path: '*',
                exact: true,
                component: () => <Redirect to={BASE_URL} />
            }
        ]
    }
];

export default routes;
