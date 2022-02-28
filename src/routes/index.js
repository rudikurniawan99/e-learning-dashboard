import { Routes, Route } from 'react-router-dom';
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
                    <Route key={cuid()} path={path} element={element}>
                        {children.map((child) => (
                            <Route key={cuid()} path={child.path} element={child.element} />
                        ))}
                    </Route>
                );
            })}
        </Routes>
    );
}
