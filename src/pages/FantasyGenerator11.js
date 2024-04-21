import { useState, useCallback } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FantasyGenerator11.module.css";
import fantasies from './fantasydata.json';

const FantasyGenerator11 = () => {
  const navigate = useNavigate(); // Moved inside the component
  const location = useLocation();
  const fantasy = location.state?.fantasy;
  const [currentFantasy, setCurrentFantasy] = useState(fantasy || fantasies[0]);


  const fetchNewFantasy = () => {
    const categoryFantasies = fantasies.filter(f => f.Category === location.state?.Category);
    const randomIndex = Math.floor(Math.random() * categoryFantasies.length);
    setCurrentFantasy(categoryFantasies[randomIndex]);
  };  


  const onLogoVector07ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const goToHome = () => {
    navigate("/");
  };

  const goToFantasyGenerator = () => {
    navigate("/fantasy-generator-1");
  };

  const goToTruthAndDare = () => {
    navigate("/truth-and-dare");
  };

  const goToKamaRoulette = () => {
    navigate("/kamaroulette");
  };

  return (
    <div className={styles.fantasyGenerator11}>
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
        title=""
      >
        <Dropdown.Item onClick={goToHome}>Home</Dropdown.Item>
        <Dropdown.Item onClick={goToFantasyGenerator}>Fantasy Generator</Dropdown.Item>
        <Dropdown.Item onClick={goToTruthAndDare}>Fetishes A-Z</Dropdown.Item>
        <Dropdown.Item onClick={goToKamaRoulette}>Kama-Roulette</Dropdown.Item>
        <Dropdown.Item>menu</Dropdown.Item>
      </DropdownButton>
      <h1 className={styles.fantasyGenerator} id="fgtitle1">
        FANTASY GENERATOR
      </h1>
      <Button
    className={styles.completedButton}
    variant="outline-primary"
    onClick={goToFantasyGenerator}
>
    COMPLETED
</Button>

<Button 
    className={styles.giveMoreButton} 
    variant="outline-primary"
    onClick={fetchNewFantasy}
>
    GIVE ME MORE!
</Button>

      <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
    <div className={styles.fantasyBackground}></div>
    <div className={styles.fantasyContent} id="fgtext">
    {currentFantasy && (
  <>
    <p style={{textAlign: 'center', fontSize: '20px'}}>{currentFantasy.Intro}</p>
    <p style={{fontWeight: 'bold', textAlign: 'center', wordWrap: 'break-word', fontSize: '20px'}}>{currentFantasy.Title}</p>
  </>
)}

    </div>
</div>
  );
};

export default FantasyGenerator11;
