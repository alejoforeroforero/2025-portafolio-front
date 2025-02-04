import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";
import HeaderProfile from "./HeaderProfile";
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles['header-profile-container']} >
        <HeaderProfile />
      </div>
      <div className={styles['header-menu-container']}>
        <HeaderMenu />
      </div>
      <div className={styles['header-links-container']}>
        <HeaderLinks />
      </div>
    </>
  );
};

export default Header;
