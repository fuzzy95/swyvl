import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
