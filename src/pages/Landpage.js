import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Landpage.module.css";

const Landpage = () => {
  const navigate = useNavigate();

  const onLandpageContainerClick = useCallback(() => {
    navigate("/fantasy-generator-1-1");
  }, [navigate]);

  return (
    <div className={styles.landpage}>
      <img className={styles.component11} alt="" src="/component-footer.png" />
      <Button
        className={styles.landpageChild}
        variant="outline-primary"
        href="/fantasy-generator-1"
      >
        FANTASY GENERATOR
      </Button>
      <Button
        className={styles.landpageItem}
        variant="outline-primary"
        href="/fetishaz"
      >
        FETISH A-Z
      </Button>
      <Button
        className={styles.landpageInner}
        variant="outline-primary"
        href="/kamaroulette"
      >
        KAMA-ROULETTE
      </Button>
      <a className={styles.logoVector06} id="logo" />
      <div className={styles.thePsxClub}>
        © 2023 The Psx Club. All Rights Reserved
      </div>
      <img
        className={styles.asset6Icon}
        id="iconplug"
        alt=""
        src="/cute-butt-plug@2x.png"
      />
      <img className={styles.asset7Icon} alt="" src="/cute-p-ring@2x.png" />
      <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
    </div>
  );
};

export default Landpage;
