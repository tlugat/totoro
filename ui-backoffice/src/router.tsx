import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const SignIn = Loader(lazy(() => import('src/content/pages/Signin')));
const Jobs = Loader(lazy(() => import('src/content/pages/Management/Jobs')));
const Users = Loader(lazy(() => import('src/content/pages/Management/Users')));
const Organizations = Loader(lazy(() => import('src/content/pages/Management/Organizations')));
const Litigations = Loader(lazy(() => import('src/content/pages/Management/Litigations')));
const Partners = Loader(lazy(() => import('src/content/pages/Management/Partners/Members')));

// Accounting

const Accounting = Loader(lazy(() => import('src/content/pages/Accounting')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Apps Configuration

const Tags = Loader(lazy(() => import('src/content/pages/AppsConfiguration/Settings/Tags')));
const Status = Loader(lazy(() => import('src/content/pages/AppsConfiguration/Settings/Status')));
const LitigationObjects = Loader(lazy(() => import('src/content/pages/AppsConfiguration/Settings/LitigationObjects')));
const Themes = Loader(lazy(() => import('src/content/pages/AppsConfiguration/Appearance/Themes')));

// Applications

const Messenger = Loader(lazy(() => import('src/content/applications/Messenger')));
// const Transactions = Loader(lazy(() => import('src/content/applications/Transactions')));
// const UserProfile = Loader(lazy(() => import('src/content/applications/Users/profile')));
// const UserSettings = Loader(lazy(() => import('src/content/applications/Users/settings')));


// Status

const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('src/content/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('src/content/pages/Status/Maintenance')));


const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <SignIn />
      },
      {
        path: 'signin',
        element: (
          <Navigate
            to="/"
            replace
          />
        )
      },
      {
        path: 'status',
        children: [
          {
            path: '/',
            element: (
              <Navigate
                to="404"
                replace
              />
            )
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          },
        ]
      },
      {
        path: '*',
        element: <Status404 />
      },
    ]
  },
  {
    path: 'dashboards',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboards/statistiques"
            replace
          />
        )
      },
      {
        path: 'statistiques',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'gestion',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/gestion/missions"
            replace
          />
        )
      },
      {
        path: 'missions',
        element: <Jobs />
      },
      {
        path: 'utilisateurs',
        element: <Users />
      },
      {
        path: 'associations',
        element: <Organizations />
      },
      {
        path: 'litiges',
        element: <Litigations />
      },
      {
        path: 'partenaires/membres',
        element: <Partners />
      },
    ]
  },
  {
    path: 'comptabilite',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="statistiques"
            replace
          />
        )
      },
      {
        path: 'statistiques',
        element: <Accounting/>
      }
    ]
  },
  {
    path: 'app-reglages',
    element: (
      <SidebarLayout />
    ),
    children: [
      // {
      //   path: '/',
      //   element: (
      //     <Navigate
      //       to="/app-reglages/missions"
      //       replace
      //     />
      //   )
      // },
      {
        path: 'parametrage/tags',
        element: <Tags />
      },
      {
        path: 'parametrage/status',
        element: <Status />
      },
      {
        path: 'parametrage/objets-litiges',
        element: <LitigationObjects />
      },
      {
        path: 'apparence/themes',
        element: <Themes />
      },
    ]
  },
  // {
  //   path: 'management',
  //   element: (
  //     <SidebarLayout />
  //   ),
  //   children: [
  //     {
  //       path: '/',
  //       element: (
  //         <Navigate
  //           to="/management/transactions"
  //           replace
  //         />
  //       )
  //     },
  //     {
  //       path: 'transactions',
  //       element: <Transactions />
  //     },
  //     {
  //       path: 'profile',
  //       children: [
  //         {
  //           path: '/',
  //           element: (
  //             <Navigate
  //               to="details"
  //               replace
  //             />
  //           )
  //         },
  //         {
  //           path: 'details',
  //           element: <UserProfile />
  //         },
  //         {
  //           path: 'settings',
  //           element: <UserSettings />
  //         },
  //       ]
  //     }
  //   ]
  // },
];

export default routes;
