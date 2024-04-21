import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import styles from "./KamaRoulette1.module.css";

const KamaRoulette1 = () => {
  const navigate = useNavigate();

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

  const categoryImages = {
    "KAMASUTRA": [
      { path: "/images/kamasutra/1.gif", title: "Reverse" },
      { path: "/images/kamasutra/2.gif", title: "Lotus" },
      { path: "/images/kamasutra/3.gif", title: "Captain Sex" },
      { path: "/images/kamasutra/4.gif", title: "Banana Split" },
      { path: "/images/kamasutra/5.gif", title: "Doggystyle" },
      { path: "/images/kamasutra/6.gif", title: "Full Nelson" },
      { path: "/images/kamasutra/7.gif", title: "Praying Mantis" },
      { path: "/images/kamasutra/8.gif", title: "Wheelbarrow" },
      { path: "/images/kamasutra/9.jpg", title: "The 96" },
      { path: "/images/kamasutra/10.jpg", title: "Ballerina" },
      { path: "/images/kamasutra/11.jpg", title: "Brute" },
      { path: "/images/kamasutra/12.jpg", title: "Cow Girl Gaze" },
      { path: "/images/kamasutra/13.jpg", title: "Fifth Posture Of The Perfumed Garden" },
      { path: "/images/kamasutra/14.jpg", title: "Golden Gate" },
      { path: "/images/kamasutra/15.jpg", title: "Handstand" },
      { path: "/images/kamasutra/16.jpg", title: "Spooning Behind Her" },
      { path: "/images/kamasutra/17.jpg", title: "Mermaid" },
      { path: "/images/kamasutra/18.jpg", title: "Monkey Bars" },
      { path: "/images/kamasutra/19.jpg", title: "Ninth Posture Of The Perfumed Garden" },
      { path: "/images/kamasutra/20.jpg", title: "Overpass" },
      { path: "/images/kamasutra/21.jpg", title: "Prison Style" },
      { path: "/images/kamasutra/22.jpg", title: "Raging Bull" },
      { path: "/images/kamasutra/23.jpg", title: "Saggitarius" },
      { path: "/images/kamasutra/24.jpg", title: "Screwdriver" },
      { path: "/images/kamasutra/25.jpg", title: "Seesaw" },
      { path: "/images/kamasutra/26.jpg", title: "Side by Side" },
      { path: "/images/kamasutra/27.jpg", title: "Sideways" },
      { path: "/images/kamasutra/28.jpeg", title: "Spanking" },
      { path: "/images/kamasutra/29.jpg", title: "Spider" },
      { path: "/images/kamasutra/30.jpg", title: "Spoonilates" },
      { path: "/images/kamasutra/31.jpeg", title: "The Cat of The Wife of Indra Position" },
      { path: "/images/kamasutra/32.jpg", title: "Waterfall" },
    ],
    "ORAL": [
      { path: "/images/oral/1.jpg", title: "Face Seat" },
      { path: "/images/oral/2.jpg", title: "Fire Hydrant" },
      { path: "/images/oral/3.jpg", title: "Golden Gate" },
      { path: "/images/oral/4.jpg", title: "Hucklebuck" },
      { path: "/images/oral/5.jpg", title: "Jackhammer" },
      { path: "/images/oral/6.jpg", title: "Mexican Halloween" },
      { path: "/images/oral/7.jpg", title: "Pisces" },
      { path: "/images/oral/8.jpg", title: "Raging Bull" },
      { path: "/images/oral/9.jpg", title: "The 69" },
      { path: "/images/oral/10.jpg", title: "The Hummingbird" },
    ],
    "ANAL": [
      { path: "/images/anal/1.jpg", title: "A Lying Down" },
      { path: "/images/anal/2.jpg", title: "Acrobatic" },
      { path: "/images/anal/3.jpg", title: "Spooning Deep" },
      { path: "/images/anal/4.jpg", title: "Cat Whisperer" },
      { path: "/images/anal/5.jpg", title: "The Lovemaker" },
      { path: "/images/anal/6.jpg", title: "Cow Girl Gaze" },
      { path: "/images/anal/7.jpg", title: "G Whiz" },
      { path: "/images/anal/8.jpg", title: "Nirvana" },
      { path: "/images/anal/9.jpg", title: "Prone Bone" },
      { path: "/images/anal/10.jpg", title: "The Pet Play" },
    ],
    "HE RIDES": [
      { path: "/images/herides/1.jpg", title: "Rocket Ride" },
      { path: "/images/herides/2.jpg", title: "Lovemaking" },
      { path: "/images/herides/3.jpg", title: "Passionate Embrace" },
      { path: "/images/herides/4.jpg", title: "Sphynx" },
      { path: "/images/herides/5.jpg", title: "Yogic Entry" },
      { path: "/images/herides/6.jpg", title: "Reverse Missionary" },
      { path: "/images/herides/7.jpg", title: "Scissors" },
      { path: "/images/herides/8.jpg", title: "Scorpion" },
      { path: "/images/herides/9.jpg", title: "Screwdriver" },
      { path: "/images/herides/10.jpg", title: "Seesaw" },
    ],
    "SHE RIDES": [
      { path: "/images/sherides/1.jpg", title: "Face-Off" },
      { path: "/images/sherides/2.jpg", title: "Face to Face" },
      { path: "/images/sherides/3.jpg", title: "Gemini" },
      { path: "/images/sherides/4.jpg", title: "Hot Seat" },
      { path: "/images/sherides/5.jpg", title: "Lap-Dance" },
      { path: "/images/sherides/6.jpg", title: "Mermaid" },
      { path: "/images/sherides/7.jpg", title: "Reverse" },
      { path: "/images/sherides/8.jpg", title: "Riding" },
      { path: "/images/sherides/9.jpg", title: "Sex Swing" },
      { path: "/images/sherides/10.jpg", title: "Side Saddle" },
    ],
    "THREESOME": [
      { path: "/images/threesome/1.jpg", title: "Double Suc*s" },
      { path: "/images/threesome/2.jpg", title: "Lady Show" },
      { path: "/images/threesome/3.jpg", title: "Old Faithful" },
      { path: "/images/threesome/4.jpg", title: "Grabbed Top to Bottom" },
      { path: "/images/threesome/5.jpg", title: "The Basket" },
      { path: "/images/threesome/6.jpg", title: "Love Sandwich" },
      { path: "/images/threesome/7.jpg", title: "The Cowgirl and The Cattle Rustler" },
      { path: "/images/threesome/8.jpg", title: "The Low Hanging Fruit" },
      { path: "/images/threesome/9.jpg", title: "The Magic Triangle" },
      { path: "/images/threesome/10.jpg", title: "Two Man, One Hand" },
    ],
    "ALL": [
      { path: "/images/all/kamasutra/1.gif", title: "Reverse" },
      { path: "/images/all/kamasutra/2.gif", title: "Lotus" },
      { path: "/images/all/kamasutra/3.gif", title: "Captain Sex" },
      { path: "/images/all/kamasutra/4.gif", title: "Banana Split" },
      { path: "/images/all/kamasutra/5.gif", title: "Doggystyle" },
      { path: "/images/all/kamasutra/6.gif", title: "Full Nelson" },
      { path: "/images/all/kamasutra/7.gif", title: "Praying Mantis" },
      { path: "/images/all/kamasutra/8.gif", title: "Wheelbarrow" },
      { path: "/images/all/kamasutra/9.jpg", title: "The 96" },
      { path: "/images/all/kamasutra/10.jpg", title: "Ballerina" },
      { path: "/images/all/kamasutra/11.jpg", title: "Brute" },
      { path: "/images/all/kamasutra/12.jpg", title: "Cow Girl Gaze" },
      { path: "/images/all/kamasutra/13.jpg", title: "Fifth Posture Of The Perfumed Garden" },
      { path: "/images/all/kamasutra/14.jpg", title: "Golden Gate" },
      { path: "/images/all/kamasutra/15.jpg", title: "Handstand" },
      { path: "/images/all/kamasutra/16.jpg", title: "Spooning Behind Her" },
      { path: "/images/all/kamasutra/17.jpg", title: "Mermaid" },
      { path: "/images/all/kamasutra/18.jpg", title: "Monkey Bars" },
      { path: "/images/all/kamasutra/19.jpg", title: "Ninth Posture Of The Perfumed Garden" },
      { path: "/images/all/kamasutra/20.jpg", title: "Overpass" },
      { path: "/images/all/kamasutra/21.jpg", title: "Prison Style" },
      { path: "/images/all/kamasutra/22.jpg", title: "Raging Bull" },
      { path: "/images/all/kamasutra/23.jpg", title: "Saggitarius" },
      { path: "/images/all/kamasutra/24.jpg", title: "Screwdriver" },
      { path: "/images/all/kamasutra/25.jpg", title: "Seesaw" },
      { path: "/images/all/kamasutra/26.jpg", title: "Side by Side" },
      { path: "/images/all/kamasutra/27.jpg", title: "Sideways" },
      { path: "/images/all/kamasutra/28.jpeg", title: "Spanking" },
      { path: "/images/all/kamasutra/29.jpg", title: "Spider" },
      { path: "/images/all/kamasutra/30.jpg", title: "Spoonilates" },
      { path: "/images/all/kamasutra/31.jpeg", title: "The Cat of The Wife of Indra Position" },
      { path: "/images/all/kamasutra/32.jpg", title: "Waterfall" },
      { path: "/images/all/oral/1.jpg", title: "Face Seat" },
      { path: "/images/all/oral/2.jpg", title: "Fire Hydrant" },
      { path: "/images/all/oral/3.jpg", title: "Golden Gate" },
      { path: "/images/all/oral/4.jpg", title: "Hucklebuck" },
      { path: "/images/all/oral/5.jpg", title: "Jackhammer" },
      { path: "/images/all/oral/6.jpg", title: "Mexican Halloween" },
      { path: "/images/all/oral/7.jpg", title: "Pisces" },
      { path: "/images/all/oral/8.jpg", title: "Raging Bull" },
      { path: "/images/all/oral/9.jpg", title: "The 69" },
      { path: "/images/all/oral/10.jpg", title: "The Hummingbird" },
      { path: "/images/all/anal/1.jpg", title: "A Lying Down" },
      { path: "/images/all/anal/2.jpg", title: "Acrobatic" },
      { path: "/images/all/anal/3.jpg", title: "Spooning Deep" },
      { path: "/images/all/anal/4.jpg", title: "Cat Whisperer" },
      { path: "/images/all/anal/5.jpg", title: "The Lovemaker" },
      { path: "/images/all/anal/6.jpg", title: "Cow Girl Gaze" },
      { path: "/images/all/anal/7.jpg", title: "G Whiz" },
      { path: "/images/all/anal/8.jpg", title: "Nirvana" },
      { path: "/images/all/anal/9.jpg", title: "Prone Bone" },
      { path: "/images/all/anal/10.jpg", title: "The Pet Play" },
      { path: "/images/all/herides/1.jpg", title: "Rocket Ride" },
      { path: "/images/all/herides/2.jpg", title: "Lovemaking" },
      { path: "/images/all/herides/3.jpg", title: "Passionate Embrace" },
      { path: "/images/all/herides/4.jpg", title: "Sphynx" },
      { path: "/images/all/herides/5.jpg", title: "Yogic Entry" },
      { path: "/images/all/herides/6.jpg", title: "Reverse Missionary" },
      { path: "/images/all/herides/7.jpg", title: "Scissors" },
      { path: "/images/all/herides/8.jpg", title: "Scorpion" },
      { path: "/images/all/herides/9.jpg", title: "Screwdriver" },
      { path: "/images/all/herides/10.jpg", title: "Seesaw" },
      { path: "/images/all/sherides/1.jpg", title: "Face-Off" },
      { path: "/images/all/sherides/2.jpg", title: "Face to Face" },
      { path: "/images/all/sherides/3.jpg", title: "Gemini" },
      { path: "/images/all/sherides/4.jpg", title: "Hot Seat" },
      { path: "/images/all/sherides/5.jpg", title: "Lap-Dance" },
      { path: "/images/all/sherides/6.jpg", title: "Mermaid" },
      { path: "/images/all/sherides/7.jpg", title: "Reverse" },
      { path: "/images/all/sherides/8.jpg", title: "Riding" },
      { path: "/images/all/sherides/9.jpg", title: "Sex Swing" },
      { path: "/images/all/sherides/10.jpg", title: "Side Saddle" },
      { path: "/images/all/threesome/1.jpg", title: "Double Suc*s" },
      { path: "/images/all/threesome/2.jpg", title: "Lady Show" },
      { path: "/images/all/threesome/3.jpg", title: "Old Faithful" },
      { path: "/images/all/threesome/4.jpg", title: "Grabbed Top to Bottom" },
      { path: "/images/all/threesome/5.jpg", title: "The Basket" },
      { path: "/images/all/threesome/6.jpg", title: "Love Sandwich" },
      { path: "/images/all/threesome/7.jpg", title: "The Cowgirl and The Cattle Rustler" },
      { path: "/images/all/threesome/8.jpg", title: "The Low Hanging Fruit" },
      { path: "/images/all/threesome/9.jpg", title: "The Magic Triangle" },
      { path: "/images/all/threesome/10.jpg", title: "Two Man, One Hand" },
    ],
  };

  const location = useLocation();
  const selectedCategory = location.state ? location.state.category : "defaultCategory";
  const imagesForCategory = categoryImages[selectedCategory] || [];
  const selectedImage = imagesForCategory[Math.floor(Math.random() * imagesForCategory.length)];
  const [currentImage, setCurrentImage] = useState(imagesForCategory[Math.floor(Math.random() * imagesForCategory.length)]);

  const generateNewImage = () => {
    let newImage;
    do {
      newImage = imagesForCategory[Math.floor(Math.random() * imagesForCategory.length)];
    } while (newImage.path === currentImage.path); 
    setCurrentImage(newImage); // Update the current image with the new one.
  };

  return (
    <div className={styles.kamaRoulette1}>
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
      >
        <Dropdown.Item onClick={goToHome}>Home</Dropdown.Item>
        <Dropdown.Item onClick={goToFantasyGenerator}>Fantasy Generator</Dropdown.Item>
        <Dropdown.Item onClick={goToTruthAndDare}>Fetishes A-Z</Dropdown.Item>
        <Dropdown.Item onClick={goToKamaRoulette}>Kama-Roulette</Dropdown.Item>
        <Dropdown.Item>menu</Dropdown.Item>
      </DropdownButton>
      <h1 className={styles.kamaRoulette} id="krtitle">
        KAMA-ROULETTE
      </h1>
      <Button className={styles.completedButton} variant="primary" onClick={generateNewImage}>
          GENERATE
      </Button>
      <img className={styles.socialLinksIcon} alt="" src="/social-links.png" />
<div className={styles.path22293}>
    <div className={styles.blurTop}></div>
    <div className={styles.blurBottom}></div>
    <img src={selectedImage.path} alt={selectedImage.title} className={styles.insideImage} />
    <div className={styles.imageTitle}>{selectedImage.title}</div>
</div>
</div>

  );
};

export default KamaRoulette1;
