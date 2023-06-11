import DashboardPage from "../pages/Dashboard";
import HealthRecordPage from "../pages/HealthRecord";
import PatientsPage from "../pages/Patients";
import EmployeesPage from "../pages/Employees";
import LoginPage from "../pages/Login";
import UserLayout from "../components/layouts";

export const userRoutes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/health-records",
        element: <HealthRecordPage />,
      },
      {
        path: "/patients",
        element: <PatientsPage />,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
    ],
  },
];

export const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];
