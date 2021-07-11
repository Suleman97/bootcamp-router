
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="">
      <h1>Navbar</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Products</Link>
    </div>
  )
}

// export default ProductItem;