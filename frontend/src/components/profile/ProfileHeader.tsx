import { FC } from "react";

import styles from "./profile.module.scss";

export const ProfileHeader: FC = () => {

  return (
    <div>
      <h1>Profile</h1>
      <p>
        Information About Me Here:
      </p>
      {/* <iframe
        className={styles.profileFrame}
        scrolling="no"
        title="fx."
        src=""
        frameBorder="no"
        allowTransparency={true}
        allowFullScreen={true}
      /> */}
    </div>
  );
};
