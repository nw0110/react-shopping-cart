import styles from './shop.module.css';
import CardContainer from '../cardContainer/cardContainer.jsx';
import {useOutletContext} from "react-router-dom";

function Shop(){
    const propsFromContext = useOutletContext();

    return (
      <div className={styles.shoppingContainer}>
          <div>
              <h1>Product Selection</h1>
              <p>Discover our great selection of products, from clothing to electronics</p>
          </div>
          <CardContainer {...propsFromContext} />
      </div>
    );
}

export default Shop;