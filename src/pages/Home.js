import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material/styles';

import Slider from 'react-slick';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';


const MainContainer = styled('div')(() => ({
    height: '100vh',
    overflow: 'hidden'
}));

const Slide = styled('div', {
    shouldForwardProp: prop => prop !== 'currentSlide' && prop !== 'transformOrigin'
})(({ currentSlide, transformOrigin }) => ({
    height: '100vh',
    position: 'relative',
    '& img': {
        transformOrigin,
        transition: 'transform 5s ease',
        transform: currentSlide ? 'scale(1.1)' : '',
    }
}));

const MyImage = styled(Image)(() => ({
    objectFit: 'cover',
}));

const TextContainer = styled(Grid, {
    shouldForwardProp: prop => prop !== 'left' && prop !== 'right'
})(({ left, right }) => ({
    left,
    right,
    position: 'absolute',
    zIndex: 2,
    top: '45%',
    width: '35%'
}));

const ContainerOverlay = styled('div', {
    shouldForwardProp: prop => prop !== 'background'
})(({ background }) => ({
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(${background}, rgba(255,255,255,0.7) 45%, transparent 55%)`,
}));

const BigText = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    '& span': {
        color: theme.palette.primary.main
    }
}));

const SmallText = styled(Typography)(() => ({
    fontSize: '1.1rem'
}));

const SLIDES = [
    {
        bigText: <>From Simple <span>Procedures</span> to Complex <span>Surgeries</span></>,
        smallText: 'With best facilities and better equipments, you are in safe hands',
        background: 'to right',
        image: '/01.jpg',
    },
    {
        bigText: <>Make your <span>Dental</span> Experience a lot <span>Brighter</span></>,
        smallText: 'With best facilities and better equipments, you are in safe hands',
        background: 'to left',
        image: '/02.jpg'
    },
    {
        bigText: <>Expertise in Major <span>Dental Procedures</span></>,
        smallText: 'With best facilities and better equipments, you are in safe hands',
        background: 'to right',
        image: '/03.jpg',
    }
];

function Home() {

    const [slideIndex, setSlideIndex] = useState(0);

    const sliderSettings = {
        autoplay: true,
        infinite: true,
        fade: true,
        dots: false,
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'ease',
        speed: 1000,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setSlideIndex(next)
    }

    return (
        <MainContainer>
            <Slider
                {...sliderSettings}>
                {SLIDES.map((slide, index) => (
                    <Slide
                        key={index}
                        currentSlide={index === slideIndex}
                        transformOrigin={slide.background === 'to right' ? '75% 50%' : '25% 50%'}>
                        <MyImage
                            src={slide.image}
                            alt='home background'
                            fill />
                        <ContainerOverlay
                            background={slide.background} />
                        <TextContainer
                            container
                            spacing={2}
                            direction='column'
                            justifyContent='center'
                            right={slide.background === 'to left' ? '12rem' : ''}
                            left={slide.background === 'to right' ? '12rem' : ''}>
                            <Grid item>
                                <BigText>
                                    {slide.bigText}
                                </BigText>
                            </Grid>
                            <Grid item>
                                <SmallText>
                                    {slide.smallText}
                                </SmallText>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant='contained'>
                                    Make an Appointment
                                </Button>
                            </Grid>
                        </TextContainer>
                    </Slide>
                ))}
            </Slider>
        </MainContainer>
    );
}

export default Home;