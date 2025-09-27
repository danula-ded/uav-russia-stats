import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/processes/auth/auth-context'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  // if (!isAuthenticated) {
  //   // Перенаправляем на страницу unauthorized с сохранением текущего пути
  //   return <Navigate to="/unauthorized" state={{ from: location }} replace />
  // }

  return <>{children}</>
}
