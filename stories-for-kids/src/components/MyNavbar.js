import React, { useState, useEffect } from 'react';
import { Navbar, Button, Text } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/Slice';
import Languages from '../languages.json';

function MyNavbar() {
  let browserLanguage = navigator.language;
  let browserLanguageCode = localStorage.getItem("language");

  let txtHome;
  let txtSettings;

  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActiveSettings, setIsActiveSettings] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsActiveHome(true);
    setIsActiveSettings(false);
    dispatch(changeLanguage(localStorage.getItem("language")));
    navigate("/");
  }, [])

  const collapseItems = [
    "Home",
    "Settings"
  ];

  const lang = useSelector((state) => state.slice.lang);

  const [windowDiemension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDiemension])

  function ControlBrowserLanguage() {
    if (localStorage.getItem("language") == null) {
      if (browserLanguage == "en-EN") {
        browserLanguageCode = "eng";
      } else if (browserLanguage == "de-DE") {
        browserLanguageCode = "deu";
      } else if (browserLanguage == "fr-FR") {
        browserLanguageCode = "fra";
      } else if (browserLanguage == "tr-TR") {
        browserLanguageCode = "tur";
      } else {
        browserLanguageCode = "eng";
      }

      dispatch(changeLanguage(browserLanguageCode));
      localStorage.setItem("language", browserLanguageCode);
    } else {
      dispatch(changeLanguage(localStorage.getItem("language")));
    }

    txtHome = Languages.languages[lang].navbar.txtHome;
    txtSettings = Languages.languages[lang].navbar.txtSettings;
  }

  return (
    <div style={{
      width: '100%',
      height: windowDiemension.winHeight * 0.1
    }}>
      {ControlBrowserLanguage()}
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          onClick={() => {
            setIsActiveHome(true);
            setIsActiveSettings(false);
            navigate("/home");
          }}
          css={{
            "@xs": {
              w: "12%",
              cursor: 'pointer'
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Stories For Kids
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link onClick={() => {
            setIsActiveHome(true);
            setIsActiveSettings(false);
          }} isActive={isActiveHome} as={Link} to={'/home'}>{txtHome}</Navbar.Link>
          <Navbar.Link onClick={() => {
            setIsActiveHome(false);
            setIsActiveSettings(true);
          }} isActive={isActiveSettings} as={Link} to={'/settings'}>{txtSettings}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link
              onClick={() => {
                setIsActiveHome(true);
                setIsActiveSettings(false);
              }}
              to={"/home"}
              style={{
                margin: 10,
                fontSize: 30,
                fontWeight: isActiveHome == true ? "bold" : "normal",
                color: isActiveHome == true ? "blue" : "gray",
              }}
            >
              {txtHome}
            </Link>
            <Link
              onClick={() => {
                setIsActiveHome(false);
                setIsActiveSettings(true);
              }}
              to={"/settings"}
              style={{
                margin: 10,
                fontSize: 30,
                fontWeight: isActiveSettings == true ? "bold" : "normal",
                color: isActiveSettings == true ? "blue" : "gray",
              }}
            >
              {txtSettings}
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar >
    </div >
  )
}

export default MyNavbar;