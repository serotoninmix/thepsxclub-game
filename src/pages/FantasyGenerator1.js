import React, { useState, useCallback } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FantasyGenerator1.module.css";
import fantasies from './fantasydata.json';

const FantasyGenerator1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultFantasyValue = null; // Define the default value as per your requirements
  const fantasy = location.state?.fantasy || defaultFantasyValue;

  const getRandomFantasy = (category) => {
    const filtered = fantasies.filter(item => item.Category === category);
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onGenerateClick = () => {
    if (!selectedCategory || selectedCategory === "choose category") {
      setErrorMessage('You need to select a category first.');
    } else {
      const generatedFantasy = getRandomFantasy(selectedCategory);
      navigate("/fantasygenerator11", { state: { fantasy: generatedFantasy, Category: selectedCategory } });
    }
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
    // Replace with the correct path when you have one
    navigate("/truth-and-dare");
  };

  const goToKamaRoulette = () => {
    navigate("/kamaroulette");
  };


  return (
    <div className={styles.fantasyGenerator1}>
      <img className={styles.component11} alt="" src="/component-footer.png" />
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
      
      <h1 className={styles.fantasyGenerator} id="fgtitle">
        FANTASY GENERATOR
      </h1>
      <div className={styles.welcomeToAContainer} id="fgtext">
        <p className={styles.welcomeToA}>
          Welcome to a world where fantasies come true.
        </p>
        <p className={styles.welcomeToA}>&nbsp;</p>
        <p className={styles.inThisGameYouWillExplore}>
          <span
            className={styles.inThisGame}
          >{`In this game, you will explore the most infamous kinks, fetiches and romantic experiences together. Remember to practice `}</span>
          <span className={styles.rack}>RACK</span>
          <span className={styles.span}>.</span>
        </p>
        <p className={styles.welcomeToA}>&nbsp;</p>
        <p
          className={styles.welcomeToA}
        >{`Choose the type of play you want, and get to it! `}</p>
      </div>
      <p></p>
      <div className={styles.thePsxClub}>
        © 2023 The Psx Club. All Rights Reserved
      </div>
      <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
      <Button
    className={styles.completedButton}
    variant="outline-primary"
    onClick={onGenerateClick}
>
    GIVE ME!
</Button>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

<Form.Check 
    className={styles.fantasyGenerator1Child} 
    label={`Some easy & fun play`} 
    type="radio"
    name="category"
    onChange={() => setSelectedCategory('Some easy & fun play')} 
/>
<Form.Check 
    className={styles.fantasyGenerator1Item} 
    label="Getting kinky together" 
    type="radio"
    name="category"
    onChange={() => setSelectedCategory('Getting kinky together')} 
/>
<Form.Check 
    className={styles.fantasyGenerator1Inner} 
    label="Going all the way!" 
    type="radio"
    name="category"
    onChange={() => setSelectedCategory('Going all the way!')} 
/>
    </div>
  );
};

export default FantasyGenerator1;
