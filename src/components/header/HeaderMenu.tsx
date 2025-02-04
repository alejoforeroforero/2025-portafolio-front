import { NavLink, useLocation } from "react-router-dom";
import styles from "./HeaderMenu.module.css";

export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export interface NavMenuProps {
  className?: string;
}

const Headermenu = ({ className = "" }: NavMenuProps) => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { id: "about", label: "ABOUT", path: "/about" },
    { id: "experience", label: "EXPERIENCE", path: "/experience" },
    { id: "projects", label: "PROJECTS", path: "/projects" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(itemId);
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <menu className={`${styles.navContainer} ${className}`.trim()}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuItem}>
            <div
              className={`${styles.menuLine} ${
                location.pathname === item.path ? styles.active : ""
              }`}
            />
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.menuLink} ${isActive ? styles.active : ""}`
              }
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Headermenu;
