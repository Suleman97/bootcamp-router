
import { Home, Product, ProductItem, About, Navbar } from './components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/product' component={Product} />
          <Route path='/product/:id' component={ProductItem} />
          <Route path='*' component={() => <h2>404 not found</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig;