import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CreateCoursePage from 'views/pages/courses/CreateCourse';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const AdminPage = Loadable(lazy(() => import('views/pages/admin')));
const CreateAdminPage = Loadable(lazy(() => import('views/pages/admin/CreateAdmin')));
const ProfilePage = Loadable(lazy(() => import('views/pages/profile')));
const CoursesPage = Loadable(lazy(() =>  import('views/pages/courses')))

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/profile',
      element: <ProfilePage />
    },
    {
      path: '/admin',
      element: <AdminPage />
    },
    {
      path: '/admin/create',
      element: <CreateAdminPage />
    },
    {
      path: '/admin/courses',
      element: <CoursesPage />
    },
    {
      path: '/admin/courses/create',
      element: <CreateCoursePage />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
