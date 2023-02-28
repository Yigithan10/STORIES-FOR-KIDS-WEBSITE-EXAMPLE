import React, { useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Text, Button } from '@nextui-org/react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/Slice';
import Languages from '../languages.json';
import { FaLanguage } from 'react-icons/fa';
import { MdAllInbox, MdNightlight } from 'react-icons/md';

function Settings() {

    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    const lang = useSelector((state) => state.slice.lang);
    const dispatch = useDispatch();

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

    let txtSelectTheme = Languages.languages[lang].settings.txtSelectTheme;
    let txtDarkTheme = Languages.languages[lang].settings.txtDarkTheme;
    let txtSelectLanguage = Languages.languages[lang].settings.txtSelectLanguage;

    function HandleEng() {
        if (lang == "eng") {
            return (
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 +50%, $blue500 50%",
                    }}
                >
                    ✓✓✓
                </Text>
            );
        } else {
            return " ";
        }
    }

    function HandleDeu() {
        if (lang == "deu") {
            return (
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 +50%, $blue500 50%",
                    }}
                    weight="bold"
                >
                    ✓✓✓
                </Text>
            );
        } else {
            return " ";
        }
    }

    function HandleFra() {
        if (lang == "fra") {
            return (
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 +50%, $blue500 50%",
                    }}
                    weight="bold"
                >
                    ✓✓✓
                </Text>
            );
        } else {
            return " ";
        }
    }

    function HandleTur() {
        if (lang == "tur") {
            return (
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 +50%, $blue500 50%",
                    }}
                    weight="bold"
                >
                    ✓✓✓
                </Text>
            );
        } else {
            return " ";
        }
    }

    function MyButtons() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        <FaLanguage color={'#5DADE2'} size={60} />
                    </div>
                    <Text
                        h1
                        size={45}
                        css={{
                            textGradient: "45deg, $blue900 +15%, $red600 50%",
                        }}
                        weight="bold"
                    >
                        {txtSelectLanguage}
                    </Text>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 5,
                        width: 50
                    }}>
                        {HandleEng()}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                        width: 150
                    }}>
                        <Button color="primary" auto onClick={() => {
                            dispatch(changeLanguage("eng"));
                            localStorage.setItem("language", "eng");
                        }}>
                            English
                        </Button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 5,
                        width: 50
                    }}>
                        {HandleDeu()}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                        width: 150
                    }}>
                        <Button color="primary" auto onClick={() => {
                            dispatch(changeLanguage("deu"));
                            localStorage.setItem("language", "deu");
                        }}>
                            Deutsch
                        </Button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 5,
                        width: 50
                    }}>
                        {HandleFra()}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                        width: 150
                    }}>
                        <Button color="primary" auto onClick={() => {
                            dispatch(changeLanguage("fra"));
                            localStorage.setItem("language", "fra");
                        }}>
                            Français
                        </Button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 5,
                        width: 50
                    }}>
                        {HandleTur()}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                        width: 150
                    }}>
                        <Button color="primary" auto onClick={() => {
                            dispatch(changeLanguage("tur"));
                            localStorage.setItem("language", "tur");
                        }}>
                            Türkçe
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    function Main() {
        if (window.innerWidth > 750) {
            return (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 15
                    }} data-aos="fade-right">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <MdNightlight color={'#5DADE2'} size={60} />
                            </div>
                            <Text
                                h1
                                size={45}
                                css={{
                                    textGradient: "45deg, $blue600 -30%, $pink600 50%",
                                }}
                                weight="bold"
                            >
                                {txtSelectTheme}
                            </Text>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                margin: 5
                            }}>
                                <Text>
                                    {txtDarkTheme}
                                </Text>
                            </div>
                            <div style={{
                                margin: 5
                            }}>
                                <Switch
                                    checked={isDark}
                                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 15
                    }} data-aos="fade-left">
                        {MyButtons()}
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 15
                    }} data-aos="fade-right">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <MdNightlight color={'#5DADE2'} size={30} />
                            </div>
                            <Text
                                h1
                                size={30}
                                css={{
                                    textGradient: "45deg, $blue600 -30%, $pink600 50%",
                                }}
                                weight="bold"
                            >
                                {txtSelectTheme}
                            </Text>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <div style={{
                                margin: 5
                            }}>
                                <Text>
                                    {txtDarkTheme}
                                </Text>
                            </div>
                            <div style={{
                                margin: 5
                            }}>
                                <Switch
                                    checked={isDark}
                                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 15
                    }} data-aos="fade-left">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                                <div style={{
                                    marginLeft: 10,
                                    marginRight: 10
                                }}>
                                    <FaLanguage color={'#5DADE2'} size={30} />
                                </div>
                                <Text
                                    h1
                                    size={30}
                                    css={{
                                        textGradient: "45deg, $blue900 +15%, $red600 50%",
                                    }}
                                    weight="bold"
                                >
                                    {txtSelectLanguage}
                                </Text>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 10
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    width: 50
                                }}>
                                    {HandleEng()}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                    width: 150
                                }}>
                                    <Button color="primary" auto onClick={() => {
                                        dispatch(changeLanguage("eng"));
                                        localStorage.setItem("language", "eng");
                                    }}>
                                        English
                                    </Button>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 10
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    width: 50
                                }}>
                                    {HandleDeu()}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                    width: 150
                                }}>
                                    <Button color="primary" auto onClick={() => {
                                        dispatch(changeLanguage("deu"));
                                        localStorage.setItem("language", "deu");
                                    }}>
                                        Deutsch
                                    </Button>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 10
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    width: 50
                                }}>
                                    {HandleFra()}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                    width: 150
                                }}>
                                    <Button color="primary" auto onClick={() => {
                                        dispatch(changeLanguage("fra"));
                                        localStorage.setItem("language", "fra");
                                    }}>
                                        Français
                                    </Button>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 10
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    width: 50
                                }}>
                                    {HandleTur()}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                    width: 150
                                }}>
                                    <Button color="primary" auto onClick={() => {
                                        dispatch(changeLanguage("tur"));
                                        localStorage.setItem("language", "tur");
                                    }}>
                                        Türkçe
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div style={{
            width: '100%',
            height: windowDiemension.winHeight * 0.9,
        }}>
            {Main()}
        </div>
    )
}

export default Settings;