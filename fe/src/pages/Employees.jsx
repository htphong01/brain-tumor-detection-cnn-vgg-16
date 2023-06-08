import Employees from '@components/Employees';
import { useSelector } from 'react-redux';
import { ROLES } from '@src/constants';
import { redirect } from "react-router-dom";

export default function EmployeesPage() {
  const user = useSelector(state => state.auth.user);

  if(!user.role !== ROLES.ADMIN) {
    redirect('/');
  }

  return <Employees />;
}
