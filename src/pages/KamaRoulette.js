import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./KamaRoulette.module.css";
import LoadingAnimation from './loadinganimation/loadinganimation.js';

const KamaRoulette = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("CHOOSE CATEGORY");
  const [showLoading, setShowLoading] = useState(false);

  const durationOfLoadingAnimation = 3000;

  const handleDropdownItemClick = (category) => (e) => {
    e.stopPropagation();
    setSelectedCategory(category);
  };

  const [showError, setShowError] = useState(false); 

  const onKamaRouletteContainerClick = useCallback(() => {
    if (selectedCategory === "CHOOSE CATEGORY") {
      setShowError(true);
      return;
    }
    setShowError(false);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      navigate("/kamaroulette-1", { state: { category: selectedCategory } });
    }, durationOfLoadingAnimation);
  }, [navigate, selectedCategory]);
  
  const onLogoVector07ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDropdownClick = (e) => {
    e.stopPropagation(); // This stops the event from reaching the parent div
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToFantasyGenerator = () => {
    navigate("/fantasy-generator-1");
  };

  const goToTruthAndDare = () => {
    // Replace with the correct path when you have one
    navigate("/truth-and-dare");
  };

  const goToKamaRoulette = () => {
    navigate("/kamaroulette");
  };

  return (
    <div className={styles.kamaRoulette}>
      { showLoading && <LoadingAnimation /> }

      <img className={styles.component12} alt="" src="/component-footer.png" />
      <div className={styles.thePsxClub}>
        © 2023 The Psx Club. All Rights Reserved
      </div>
      <img
        className={styles.logoVector07Icon}
        alt=""
        src="/logo-1@2x.png"
        onClick={onLogoVector07ImageClick}
      />
    
<DropdownButton
    className={styles.menu}
    variant="primary"
    align="start"
    drop="down"
    onClick={onDropdownClick}
>
    <Dropdown.Item onClick={(e) => { e.stopPropagation(); goToHome(); }}>
        Home
    </Dropdown.Item>
    <Dropdown.Item onClick={(e) => { e.stopPropagation(); goToFantasyGenerator(); }}>
        Fantasy Generator
    </Dropdown.Item>
    <Dropdown.Item onClick={(e) => { e.stopPropagation(); goToTruthAndDare(); }}>
        Fetishes A-Z
    </Dropdown.Item>
    <Dropdown.Item onClick={(e) => { e.stopPropagation(); goToKamaRoulette(); }}>
        Kama-Roulette
    </Dropdown.Item>
</DropdownButton>

      <h1 className={styles.kamaRoulette1} id="krtitle">
        KAMA-ROULETTE
      </h1>
      <Button
        className={styles.completedButton}
        variant="outline-primary"
        onClick={onKamaRouletteContainerClick}
      >
        GENERATE
      </Button>

      {showError && <div style={{ color: 'red', marginTop: '10px' }}>You need to select a category first.</div>}

      <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
      <a className={styles.theWholeSubjectContainer} id="krtext">
        <p
          className={styles.theWholeSubject}
        >{`“The whole subject of embracing, is of such a nature that men who ask questions about it, or who hear about it, or who talk about it, acquire thereby a desire for enjoyment.  `}</p>
        <p className={styles.theWholeSubject}>
          The rules apply so long as the passion of man is middling, but when
          the wheel of love is set in motion, then there is no motion and no
          order.”
        </p>
        <p className={styles.theWholeSubject}>- The Kamasutra</p>
      </a>
      <DropdownButton
        className={styles.menu1}
        title={selectedCategory}        
        variant="primary"
        align="start"
        drop="down"
        onClick={onDropdownClick}
      >
        <Dropdown.Item onClick={handleDropdownItemClick("Choose Category")}>
          CHOOSE CATEGORY
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("KAMASUTRA")}>
          KAMASUTRA
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("ORAL")}>
          ORAL
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("ANAL")}>
          ANAL
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("HE RIDES")}>
          HE RIDES
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("SHE RIDES")}>
          SHE RIDES
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("THREESOME")}>
          THREESOME
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropdownItemClick("ALL")}>
          ALL
        </Dropdown.Item>
      </DropdownButton>
      
    </div>
  );
};

export default KamaRoulette;
