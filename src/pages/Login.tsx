import { useEffect } from 'react'

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Home | Papi House'
  }, [])

  return <p>Hello Login Page</p>
}
export default Login
