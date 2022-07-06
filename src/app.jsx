import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './pages/404/NotFound';

import HomeStf from './pages/home/HomeStf';
import LoginStf from './pages/login/LoginStf';
import PurchasesSfl from './pages/purchases/PurchasesSfl';
import RegisterStf from './pages/register/RegisterStf';
import ShoppingCartStf from './pages/shoppingcart/ShoppingCartStf';

import PublicLayout from './components/layout/public/PublicLayout';
import PrivateLayout from './components/layout/private/PrivateLayout';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <PublicLayout>
//         <Switch>
//           <Route exact path="/login" component={LoginStf} />
//           <Route exact path="/register" component={RegisterStf} />
//           <Route exact path="/">
//             <Redirect to="/login" />
//           </Route>
//         </Switch>
//       </PublicLayout>
//     </BrowserRouter>
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Switch>
          <Route exact path="/home" component={HomeStf} />
          <Route exact path="/purchases" component={PurchasesSfl} />
          <Route exact path="/shoppingcart" component={ShoppingCartStf} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default App;
