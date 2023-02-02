import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './TopNav.module.css';
import { FiShoppingCart } from 'react-icons/fi';

const TopNav = ({ handleHome, handleCheckout }) => {
   return (
      <>
         <div className={styles.container}>
            <div className="row">
               <div className="col-md-6 text-white">
                  <h1>Edspert.id</h1>
               </div>
               <div className="col-md-6">
                  <p style={{textAlign: 'right'}}>
                     <Link
                        to={handleHome}
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '20px'
                        }}
                     >
                        Beranda
                     </Link>
                     <Link
                        to='#'
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '20px'
                        }}
                     >
                        Program
                     </Link>
                     <Link
                        to='#'
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '20px'
                        }}
                     >
                        Bidang Ilmu
                     </Link>
                     <Link
                        to='#'
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '50px'
                        }}
                     >
                        Tentang Edspert
                     </Link>
                     <Button onClick={handleCheckout}>
                        <FiShoppingCart />
                     </Button>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default TopNav;