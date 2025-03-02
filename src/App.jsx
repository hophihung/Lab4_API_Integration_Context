
import { createContext, useEffect, useState } from 'react'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import { userApi } from './api/userApi';
import { instance } from './api/axiosCilents';
export const userContext = createContext();

function App() {
  const [tokenAuth, setTokenAuth] = useState('');
  const [dataUser, setDataUser] = useState({});
  const token = (token) => {
    setTokenAuth(token);
  }
  const fetchApi = async () => {
    try {
      const result = await userApi.getInforUser();
      console.log(result);
      setDataUser(result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    instance.defaults.headers.Authorization = tokenAuth ? `Bearer ${tokenAuth}` : ''; 
    fetchApi();
  }, [tokenAuth])
  return (
    <userContext.Provider value={{token, tokenAuth, dataUser}}>
      <AllRoutes />
    </userContext.Provider>
  )
}

export default App
