import styles from './errorPage.module.css';
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <div className={styles.errorPageContainer}>
            <div className={styles.errorMessage}>
                <h1>Oops, an error occured</h1>
                <Link to="/">
                    Try again!
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage