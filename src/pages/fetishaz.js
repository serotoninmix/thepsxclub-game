import React, { useState, useEffect, useCallback } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./fetishaz.module.css"; // Adjust the styles import if necessary
import data from './fetishesdata.json'; 

const AZMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdownClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    useEffect(() => {
        // Add any initialization or data fetching here if required
    }, []);

    const onLogoVector07ImageClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const goToHome = () => navigate("/");
    const goToFantasyGenerator = () => navigate("/fantasy-generator-1");
    const goToTruthAndDare = () => navigate("/truth-and-dare");
    const goToKamaRoulette = () => navigate("/kamaroulette");

    return (
        <div className={styles.azMenu}>
            <div className={styles.header}>
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
                </DropdownButton>
            </div>
    
            <div className={styles.container}>
                {data.map((item, index) => (
                    <div key={index} className={styles.dropdown}>
                        <Dropdown>
                        <Dropdown.Toggle 
                            className={styles.dropdownTitle}  // <-- applying style here
                            variant="primary" 
                            id={`dropdown-basic-${index}`}
                            onClick={() => handleDropdownClick(index)}
                        >
                            {item.Title}
                        </Dropdown.Toggle>
    
                            {openIndex === index && (
                                <Dropdown.Menu show>
                                    <Dropdown.Item className={styles.dropdownContent}>
                                        {item.Description}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            )}
                        </Dropdown>
                    </div>
                ))}
            </div>
    
            <div className={styles.footer}>
                <div className={styles.thePsxClub}>
                    © 2023 The Psx Club. All Rights Reserved
                </div>
                <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
                <img className={styles.component11} alt="" src="/component-footer.png" />
            </div>
        </div>
    );
};

export default AZMenu;