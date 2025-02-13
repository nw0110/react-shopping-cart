import styles from './cartProductView.module.css'

function CartProductView({product, quantity}){
    return (
      <div className={styles.productViewContainer}>
          <img src={product.image} width={64}/>
          <div>{product.title}</div>
          <div>Quantity: {quantity}</div>
      </div>
    );
}

export default CartProductView;