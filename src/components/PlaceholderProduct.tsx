import Placeholder from 'react-bootstrap/Placeholder';
import styles from '../styles/PlaceholderProduct.module.css'; // Import the CSS Module

function PlaceholderProduct() {
  return (
    <div className={`card h-100 shadow-sm border-0 ${styles.cardContainer}`}>
      <div className={styles.imagePlaceholderWrapper}>
        <Placeholder
          as="div"
          animation="glow"
          className={styles.imagePlaceholder} // Apply class from CSS Module
        />
        <span className={styles.badgePlaceholder} /> {/* Apply class */}
        <span className={styles.iconPlaceholder} /> {/* Apply class */}
      </div>
      <div className="card-body d-flex flex-column px-3 py-3">
        <Placeholder as="h5" animation="glow">
          <Placeholder xs={8} style={{ height: 20 }} />
        </Placeholder>

        <Placeholder as="p" animation="glow">
          <Placeholder xs={10} /> <Placeholder xs={6} />
        </Placeholder>

        <Placeholder.Button
          variant='secondary'
          animation='glow'
          xs={12}
          className={styles.buttonPlaceholder} // Apply class
        />
      </div>
    </div>
  );
}

export default PlaceholderProduct;