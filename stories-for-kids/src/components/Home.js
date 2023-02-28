import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row, Button, Text, Pagination, Grid, Radio, Loading, Image, useTheme } from "@nextui-org/react";
import Languages from '../languages.json';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillStopCircleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowRepeat } from 'react-icons/bs';
import story1_eng from '../voices/story1_eng.mp3';
import story2_eng from '../voices/story2_eng.mp3';
import story3_eng from '../voices/story3_eng.mp3';
import story4_eng from '../voices/story4_eng.mp3';
import story5_eng from '../voices/story5_eng.mp3';
import story6_eng from '../voices/story6_eng.mp3';
import story1_deu from '../voices/story1_deu.mp3';
import story2_deu from '../voices/story2_deu.mp3';
import story3_deu from '../voices/story3_deu.mp3';
import story4_deu from '../voices/story4_deu.mp3';
import story5_deu from '../voices/story5_deu.mp3';
import story6_deu from '../voices/story6_deu.mp3';
import story1_fra from '../voices/story1_fra.mp3';
import story2_fra from '../voices/story2_fra.mp3';
import story3_fra from '../voices/story3_fra.mp3';
import story4_fra from '../voices/story4_fra.mp3';
import story5_fra from '../voices/story5_fra.mp3';
import story6_fra from '../voices/story6_fra.mp3';
import story1_tur from '../voices/story1_tur.mp3';
import story2_tur from '../voices/story2_tur.mp3';
import story3_tur from '../voices/story3_tur.mp3';
import story4_tur from '../voices/story4_tur.mp3';
import story5_tur from '../voices/story5_tur.mp3';
import story6_tur from '../voices/story6_tur.mp3';

function Home() {

    const lang = useSelector((state) => state.slice.lang);

    const [counter, setCounter] = useState(1);

    const [isReadingOrListening, setIsReadingOrListening] = useState(false);

    const { isDark, type } = useTheme();

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

    const [spinner, setSpinner] = useState(false);

    const [storyPhoto, setStoryPhoto] = useState(null);
    const [storyId, setStoryId] = useState(0);
    const [storyHeader, setStoryHeader] = useState("");
    const [storyExplanation, setStoryExplanation] = useState("");
    const [storyAll, setStoryAll] = useState("");

    const [storyAudio, setStoryAudio] = useState(null);
    const [isPlayingStory, setIsPlayingStory] = useState(false);
    const [isPlayingStarted, setIsPlayingStarted] = useState(false);

    const Story1 = require("../photos/tomAndJerry.png");
    const Story2 = require("../photos/sivrisinekİleAslan.png");
    const Story3 = require("../photos/uykucuTavsan.png");
    const Story4 = require("../photos/kocaAyıİleMaşa.png");
    const Story5 = require("../photos/karınca.png");
    const Story6 = require("../photos/zürafa.png");

    let txtCardButton = Languages.languages[lang].home.txtCardButton;
    let txtBackHomePage = Languages.languages[lang].home.txtBackHomePage;
    let txtStart = Languages.languages[lang].home.txtStart;
    let txtStop = Languages.languages[lang].home.txtStop;
    let txtReplay = Languages.languages[lang].home.txtReplay;

    let txtHeader1 = Languages.languages[lang].Story1.txtHeader;
    let txtExplanation1 = Languages.languages[lang].Story1.txtExplanation;
    let txtStory1 = Languages.languages[lang].Story1.txtStory;

    let txtHeader2 = Languages.languages[lang].Story2.txtHeader;
    let txtExplanation2 = Languages.languages[lang].Story2.txtExplanation;
    let txtStory2 = Languages.languages[lang].Story2.txtStory;

    let txtHeader3 = Languages.languages[lang].Story3.txtHeader;
    let txtExplanation3 = Languages.languages[lang].Story3.txtExplanation;
    let txtStory3 = Languages.languages[lang].Story3.txtStory;

    let txtHeader4 = Languages.languages[lang].Story4.txtHeader;
    let txtExplanation4 = Languages.languages[lang].Story4.txtExplanation;
    let txtStory4 = Languages.languages[lang].Story4.txtStory;

    let txtHeader5 = Languages.languages[lang].Story5.txtHeader;
    let txtExplanation5 = Languages.languages[lang].Story5.txtExplanation;
    let txtStory5 = Languages.languages[lang].Story5.txtStory;

    let txtHeader6 = Languages.languages[lang].Story6.txtHeader;
    let txtExplanation6 = Languages.languages[lang].Story6.txtExplanation;
    let txtStory6 = Languages.languages[lang].Story6.txtStory;

    let audio1_eng = useRef(new Audio(story1_eng));
    let audio2_eng = useRef(new Audio(story2_eng));
    let audio3_eng = useRef(new Audio(story3_eng));
    let audio4_eng = useRef(new Audio(story4_eng));
    let audio5_eng = useRef(new Audio(story5_eng));
    let audio6_eng = useRef(new Audio(story6_eng));

    let audio1_deu = useRef(new Audio(story1_deu));
    let audio2_deu = useRef(new Audio(story2_deu));
    let audio3_deu = useRef(new Audio(story3_deu));
    let audio4_deu = useRef(new Audio(story4_deu));
    let audio5_deu = useRef(new Audio(story5_deu));
    let audio6_deu = useRef(new Audio(story6_deu));

    let audio1_fra = useRef(new Audio(story1_fra));
    let audio2_fra = useRef(new Audio(story2_fra));
    let audio3_fra = useRef(new Audio(story3_fra));
    let audio4_fra = useRef(new Audio(story4_fra));
    let audio5_fra = useRef(new Audio(story5_fra));
    let audio6_fra = useRef(new Audio(story6_fra));

    let audio1_tur = useRef(new Audio(story1_tur));
    let audio2_tur = useRef(new Audio(story2_tur));
    let audio3_tur = useRef(new Audio(story3_tur));
    let audio4_tur = useRef(new Audio(story4_tur));
    let audio5_tur = useRef(new Audio(story5_tur));
    let audio6_tur = useRef(new Audio(story6_tur));

    function CallAudio() {
        if (lang == "eng") {
            if (storyId == 1) {
                setStoryAudio(audio1_eng);
            } else if (storyId == 2) {
                setStoryAudio(audio2_eng);
            } else if (storyId == 3) {
                setStoryAudio(audio3_eng);
            } else if (storyId == 4) {
                setStoryAudio(audio4_eng);
            } else if (storyId == 5) {
                setStoryAudio(audio5_eng);
            } else if (storyId == 6) {
                setStoryAudio(audio6_eng);
            }
        } else if (lang == "deu") {
            if (storyId == 1) {
                setStoryAudio(audio1_deu);
            } else if (storyId == 2) {
                setStoryAudio(audio2_deu);
            } else if (storyId == 3) {
                setStoryAudio(audio3_deu);
            } else if (storyId == 4) {
                setStoryAudio(audio4_deu);
            } else if (storyId == 5) {
                setStoryAudio(audio5_deu);
            } else if (storyId == 6) {
                setStoryAudio(audio6_deu);
            }
        } else if (lang == "fra") {
            if (storyId == 1) {
                setStoryAudio(audio1_fra);
            } else if (storyId == 2) {
                setStoryAudio(audio2_fra);
            } else if (storyId == 3) {
                setStoryAudio(audio3_fra);
            } else if (storyId == 4) {
                setStoryAudio(audio4_fra);
            } else if (storyId == 5) {
                setStoryAudio(audio5_fra);
            } else if (storyId == 6) {
                setStoryAudio(audio6_fra);
            }
        } else if (lang == "tur") {
            if (storyId == 1) {
                setStoryAudio(audio1_tur);
            } else if (storyId == 2) {
                setStoryAudio(audio2_tur);
            } else if (storyId == 3) {
                setStoryAudio(audio3_tur);
            } else if (storyId == 4) {
                setStoryAudio(audio4_tur);
            } else if (storyId == 5) {
                setStoryAudio(audio5_tur);
            } else if (storyId == 6) {
                setStoryAudio(audio6_tur);
            }
        }
    }

    {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            Your day your way
                        </Text>
                        <Text h3 color="white">
                            Your checklist for better sleep
                        </Text>
                    </Col>
                </Card.Header> */}


    useEffect(() => {
        if (isReadingOrListening == true) {
            setSpinner(true);
            CallAudio();
            setTimeout(() => {
                setSpinner(false);
            }, 1000);
        }
    }, [isReadingOrListening])

    function FirstPage() {
        return (
            <div style={{
                width: '100%',
                height: windowDiemension.winHeight * 0.8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story1}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader1}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation1}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(1);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story1);
                                                setStoryHeader(txtHeader1);
                                                setStoryExplanation(txtExplanation1);
                                                setStoryAll(txtStory1);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story2}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader2}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation2}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(2);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story2);
                                                setStoryHeader(txtHeader2);
                                                setStoryExplanation(txtExplanation2);
                                                setStoryAll(txtStory2);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }

    function SecondPage() {
        return (
            <div style={{
                width: '100%',
                height: windowDiemension.winHeight * 0.8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story3}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader3}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation3}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(3);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story3);
                                                setStoryHeader(txtHeader3);
                                                setStoryExplanation(txtExplanation3);
                                                setStoryAll(txtStory3);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story4}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader4}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation4}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(4);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story4);
                                                setStoryHeader(txtHeader4);
                                                setStoryExplanation(txtExplanation4);
                                                setStoryAll(txtStory4);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }

    function ThirdPage() {
        return (
            <div style={{
                width: '100%',
                height: windowDiemension.winHeight * 0.8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story5}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader5}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation5}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(5);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story5);
                                                setStoryHeader(txtHeader5);
                                                setStoryExplanation(txtExplanation5);
                                                setStoryAll(txtStory5);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
                <div style={{
                    width: '90%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <Card css={{ w: "100%", h: "100%" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={Story6}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid $gray800",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <Text color="#d1d1d1" size={14}>
                                                {txtHeader6}
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                {txtExplanation6}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                            className='story-button'
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "primary", bg: "primary" }}
                                            onClick={() => {
                                                setStoryId(6);
                                                setIsReadingOrListening(true);
                                                setStoryPhoto(Story6);
                                                setStoryHeader(txtHeader6);
                                                setStoryExplanation(txtExplanation6);
                                                setStoryAll(txtStory6);
                                            }}
                                        >
                                            <Text
                                                css={{ color: "solid" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {txtCardButton}
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }

    function PlayOrStopIconButtons() {
        if (isPlayingStory == false) {
            return (
                <Button className='story-button' icon={<BsFillPlayCircleFill fill="currentColor" />} bordered color="warning" auto onClick={() => {
                    storyAudio.current.play();
                    setIsPlayingStory(true);
                    setIsPlayingStarted(true);
                }}>
                    {txtStart}
                </Button>
            );
        } else {
            return (
                <Button className='story-button' icon={<BsFillStopCircleFill fill="currentColor" />} bordered color="warning" auto onClick={() => {
                    storyAudio.current.pause();
                    setIsPlayingStory(false);
                }}>
                    {txtStop}
                </Button>
            );
        }
    }

    function RepeatIconButton() {
        return (
            <Button className='story-button' disabled={!isPlayingStarted} icon={<BsArrowRepeat fill="currentColor" />} bordered color="warning" auto onClick={() => {
                if (isPlayingStarted == true) {
                    storyAudio.current.currentTime = 0;
                    storyAudio.current.pause();
                    setIsPlayingStory(false);
                    setIsPlayingStarted(false);
                }
            }}>
                {txtReplay}
            </Button>
        );
    }

    function MyImageAndHeader() {
        if (window.innerWidth > 750) {
            return (
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div>
                        <Image
                            src={storyPhoto}
                            objectFit="contain"
                            width="100%"
                            height="10%"
                            alt="Relaxing app background"
                            style={{
                                marginTop: 25
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 20
                    }}>
                        <Button className='story-button' icon={<AiFillHome fill="currentColor" />} bordered color="primary" auto onClick={() => {
                            setIsReadingOrListening(false);
                            setCounter(1);
                            storyAudio.current.currentTime = 0;
                            storyAudio.current.pause();
                            setIsPlayingStory(false);
                            setIsPlayingStarted(false);
                        }}>
                            {txtBackHomePage}
                        </Button>
                    </div>
                    <div style={{
                        width: '75%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'rpw'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '25%',
                        }}>
                            <div>
                                {PlayOrStopIconButtons()}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '25%',
                        }}>
                            <div>
                                {RepeatIconButton()}
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '80%',
                    }}>
                        <div style={{
                            witdh: '70%'
                        }}>
                            <Text
                                h1
                                size={60}
                                css={{
                                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                }}
                                weight="bold"
                            >
                                {storyHeader}
                            </Text>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div>
                        <Image
                            src={storyPhoto}
                            objectFit="cover"
                            width="75%"
                            height="10%"
                            alt="Relaxing app background"
                            style={{
                                marginTop: windowDiemension.winHeight * 0.1
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 20
                    }}>
                        <Button className='story-button' icon={<AiFillHome fill="currentColor" />} bordered color="primary" auto onClick={() => {
                            setIsReadingOrListening(false);
                            setCounter(1);
                        }}>
                            {txtBackHomePage}
                        </Button>
                    </div>
                    <div style={{
                        width: '75%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'rpw'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                        }}>
                            <div>
                                {PlayOrStopIconButtons()}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                        }}>
                            <div>
                                {RepeatIconButton()}
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                        <div>
                            <Text
                                h1
                                size={30}
                                css={{
                                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                }}
                                weight="bold"
                            >
                                {storyHeader}
                            </Text>
                        </div>
                    </div>
                </div>
            );
        }
    }

    function ListenStory() {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                {MyImageAndHeader()}

                <div style={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text h3
                    >
                        {storyAll}
                    </Text>
                </div>
            </div>
        );
    }

    function CounterPagesOrStory() {
        if (isReadingOrListening == false) {
            if (counter == 1) {
                return (
                    <div>
                        {FirstPage()}
                        {MyPagination()}
                    </div>
                );
            } else if (counter == 2) {
                return (
                    <div>
                        {SecondPage()}
                        {MyPagination()}
                    </div>
                );
            } else if (counter == 3) {
                return (
                    <div>
                        {ThirdPage()}
                        {MyPagination()}
                    </div>
                );
            }
        } else {
            if (spinner == true && isReadingOrListening == true) {
                return (
                    <div style={{
                        marginTop: 25
                    }}>
                        <Loading type="spinner" size="lg" />
                    </div>
                )
            } else {
                return (
                    <div>
                        {ListenStory()}
                    </div>
                )
            }
        }
    }

    function MyPagination() {
        return (
            <Grid.Container style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid>
                    <Pagination
                        color={"primary"}
                        total={3}
                        initialPage={1}
                        value={counter}
                        onChange={setCounter}
                        onChangeCapture={(num) => setCounter(num)} />
                </Grid>
                <Grid xs={12}>
                    <Radio.Group
                        size="lg"
                        orientation="horizontal"
                        value={counter}
                        onChange={setCounter}
                    >
                    </Radio.Group>
                </Grid>
            </Grid.Container>
        );
    }

    return (
        <div style={{
            width: '100%',
            height: windowDiemension.winHeight * 0.9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            {CounterPagesOrStory()}
        </div>
    )
}

export default Home;