import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "@/processes/auth/auth-context"
import { ProtectedRoute } from "@/app/protected-route"
import { AppLayout } from "@/app/app-layout"
import { LoginPage } from "@/pages/login-page"
import { DashboardPage } from "@/pages/dashboard-page"
import { UploadPage } from "@/pages/upload-page"
import { LogsPage } from "@/pages/logs-page"
import { IntegrationPage } from "@/pages/integration-page"
import { UnauthorizedPage } from "@/pages/unauthorized-page"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="logs" element={<LogsPage />} />
            <Route path="integration" element={<IntegrationPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
