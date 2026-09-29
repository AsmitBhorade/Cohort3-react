import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './Routes/AppRoutes.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
)
