import { useContext } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const contextctx=useContext(AuthContext);
 const isloggedIn=contextctx.isLoggenIn;
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isloggedIn && (<Route path='/auth'>
          <AuthPage />
        </Route>)}
       <Route path='/profile'>
        {!isloggedIn && <Redirect to='/auth'/>}
        {isloggedIn &&<UserProfile />}
        </Route>
        <Route path='*'>
        <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
