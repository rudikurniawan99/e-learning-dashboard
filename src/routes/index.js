import { Routes, Route } from 'react-router-dom';
import * as _ from 'lodash';
import * as cuid from 'cuid';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const availableRoutes = [MainRoutes, AuthenticationRoutes];

    return (
        <Routes>
            {availableRoutes.map((appRoute) => {
                const { path, children, element } = appRoute;
                return (
                    <Route path={path} element={element}>
                        {children.map((child) => (
                            <Route path={child.path} element={child.element} />
                        ))}
                    </Route>
                );
            })}
        </Routes>
    );
}
