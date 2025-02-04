import { BsSun, BsMoon } from 'react-icons/bs';
import styles from "./Nav.module.css";

type NavType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const Nav = ({ isDark, setIsDark }: NavType) => {
  const handleChangeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav>
      <span onClick={handleChangeMode} className="theme-toggle">
        {isDark ? <BsSun className={styles['sun']} size={30} /> : <BsMoon className={styles['moon']} size={30} />}
      </span>
    </nav>
  );
};

export default Nav;
