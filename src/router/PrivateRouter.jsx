import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
  
  // const user = true;  // kullanıcının login durumu kontrol
  const user = JSON.parse(sessionStorage.getItem('user'));
    
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRouter;