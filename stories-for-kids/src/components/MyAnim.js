import React, { useEffect, useState } from 'react';
import { useTheme } from "@nextui-org/react";
import Lottie from "lottie-react";
import AnimDark from "../AnimDark.json";
import AnimLight from "../AnimLight.json";
import { useNavigate } from 'react-router-dom';

function MyAnim() {

    const navigate = useNavigate();

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

    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
        }, 3000);
    }, [])

    function Anim() {
        if (window.innerWidth > 750) {
            if (isDark == true) {
                return (
                    <div style={{
                        maxWidth: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Lottie animationData={AnimDark} loop={true} />
                    </div>
                );
            } else {
                return (
                    <div style={{
                        maxWidth: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Lottie animationData={AnimLight} loop={true} />
                    </div>
                );
            }
        } else {
            if (isDark == true) {
                return (
                    <div style={{
                        maxWidth: '75%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Lottie animationData={AnimDark} loop={true} />
                    </div>
                );
            } else {
                return (
                    <div style={{
                        maxWidth: '75%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Lottie animationData={AnimLight} loop={true} />
                    </div>
                );
            }
        }
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: windowDiemension.winHeight * 0.9
        }}>
            {Anim()}
        </div>
    )

}

export default MyAnim;