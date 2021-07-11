import Shoes from '../Shoes.json';

export const Product = () => {
  // console.log(Shoes)
  return (
    <div className="">
      <h1>Product</h1>
      <div>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName]
          return (
            <div key={keyName}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} alt='shoes' height={200} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export default Product;
