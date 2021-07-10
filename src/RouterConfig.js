
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const RouterConfig = () => {
  return (
    <div>
      <h1>this is Router</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig;