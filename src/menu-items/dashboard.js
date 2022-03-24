// assets
import { IconDashboard, IconTerminal2, IconCertificate } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconTerminal2, IconCertificate };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'admin-page',
      title: 'Admin',
      type: 'item',
      url: '/admin',
      icon: icons.IconTerminal2,
      breadcrumbs: false
    },
    {
      id: 'courses',
      title: 'Courses',
      type: 'item',
      url: '/admin/courses',
      icon: icons.IconCertificate,
      breadcrumbs: false 
    }
  ]
};

export default dashboard;
