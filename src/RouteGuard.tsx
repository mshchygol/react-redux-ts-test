import { Navigate, Outlet } from "react-router";

interface RouteGuardProps {
    isAuthenticated: boolean;
    redirectPath?: string;
}

const RouteGuard = ({ isAuthenticated, redirectPath = '/login' }: RouteGuardProps) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default RouteGuard;