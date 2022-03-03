// assets
import { IconDashboard, IconTerminal2 } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconTerminal2 };

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
        }
    ]
};

export default dashboard;
