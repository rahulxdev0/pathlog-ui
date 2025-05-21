import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHasPermission } from '../store/slices/authSlice';

function ProtectedRoute({ role, permission, children }) {
  const user = useSelector(state => state.auth.user);
  const hasPermission = useSelector(selectHasPermission(permission || '*'));

  if (!user || (role && user.role !== role) || (permission && !hasPermission)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;