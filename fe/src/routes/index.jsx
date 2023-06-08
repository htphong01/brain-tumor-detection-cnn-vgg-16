import DashboardPage from "../pages/Dashboard";
import DiagnosisPage from "../pages/Diagnosis";
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
        path: "/diagnosis",
        element: <DiagnosisPage />,
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
