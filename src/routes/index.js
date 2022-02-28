import { Routes, Route } from 'react-router-dom';
import * as _ from 'lodash';
import * as cuid from 'cuid';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const availableRotues = [MainRoutes, AuthenticationRoutes];

    return (
        <Routes>
            {_.map(availableRotues, (availableRotue) => {
                const { element, children } = availableRotue;
                const path = config.basename + availableRotue.path;
                return (
                    <Route key={cuid()} path={path} element={element}>
                        {_.map(children, (child) => (
                            <Route key={cuid()} path={child.path} element={child.element} />
                        ))}
                    </Route>
                );
            })}
        </Routes>
    );
}
