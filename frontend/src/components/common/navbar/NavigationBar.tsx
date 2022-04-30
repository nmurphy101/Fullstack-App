import { FC } from "react";

import styles from "./NavigationBar.module.scss";


interface Props {
  brand: { name: string; to: string },
  links: Array<{ name: string, to: string }>,
}

export const NavigationBar: FC<Props> = ({ brand, links }) => {
  return (
    <nav className={styles.nav}>
      <a className={styles.brand} href={brand.to}>{brand.name}</a>
      <ul className={styles.ul}>
        {links.map((link: { name: string, to: string }) => {
          return (
            <li key={link.name} className={styles.li}>
              <a href={link.to}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
