import { Routes, Route, Navigate } from 'react-router-dom';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/manager/properties" element={<Navigate to="/dashboard/manager/properties" />} />
            <Route path="/dashboard/manager/residents" element={<Navigate to="/dashboard/manager/residents" />} />
            <Route path="/dashboard/manager/contracts" element={<Navigate to="/dashboard/manager/contracts" />} />
            <Route path="/dashboard/manager/*" element={<Navigate to="/dashboard/manager" />} />
        </Routes>
    );
};

export default DashboardRoutes;
