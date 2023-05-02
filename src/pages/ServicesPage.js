import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Button, Fade, Grid, Slide, Typography } from "@mui/material";
import {
    faTooth, faSyringe, faMedkit, faShieldAlt,
    faHandHoldingMedical, faFileMedicalAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";


const MainContainer = styled('div')(() => ({
    padding: '0 11.5rem',
    minHeight: '100vh'
}));

const TitleContainer = styled('div')(({ theme }) => ({
    background: theme.palette.grey[100],
    padding: '2rem 11.5rem'
}));

const Title = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: '2rem',
    textTransform: 'uppercase'
}));

const HeadingContainer = styled('div')(() => ({
    width: '30rem',
    padding: 0,
    margin: '4rem auto 6rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const HeadingContent = styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
}));

const SpanText = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700
}));

const MyIcon = styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    width: 64,
    height: 64,
    padding: 16,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const MyLabel = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: '1.3rem'
}));

const MyBtnContainer = styled('div')(() => ({
    width: '100%',
    margin: '6rem 1rem',
    display: 'flex',
    justifyContent: 'center'
}));


const STEPS = [
    {
        label: 'Implants',
        icon: <FontAwesomeIcon color='#fff' icon={faTooth} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        label: 'Minor oral surgeries',
        icon: <FontAwesomeIcon color='#fff' icon={faMedkit} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        label: 'Orthodontics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <FontAwesomeIcon color='#fff' icon={faHandHoldingMedical} />
    },
    {
        label: 'Crown and bridge work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <FontAwesomeIcon color='#fff' icon={faShieldAlt} />
    },
    {
        label: 'Cosmetics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <FontAwesomeIcon color='#fff' icon={faSyringe} />
    },
    {
        label: 'Root canal treatments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <FontAwesomeIcon color='#fff' icon={faFileMedicalAlt} />
    },
];


function Services() {

    const [btnRef, btnInView] = useInView({ triggerOnce: true });

    return (
        <>
            <TitleContainer>
                <Title
                    component='h1'>
                    Services
                </Title>
            </TitleContainer>
            <MainContainer>
                <Slide
                    in={true}
                    direction='up'
                    timeout={1000}>
                    <HeadingContainer>
                        <Image
                            src='/oral.svg'
                            alt='dentistry tools'
                            width={150}
                            height={150}
                            style={{ opacity: 0.06 }} />
                        <HeadingContent>
                            <Typography
                                component='h2'
                                align='center'
                                sx={{ fontSize: '2.4rem' }}>
                                Our {' '}
                                <SpanText>
                                    Umbrella of Services
                                </SpanText>
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                                sx={{ fontSize: '1.2rem' }}
                                align='center'>
                                Pain free procedures in dentistry
                            </Typography>
                        </HeadingContent>
                    </HeadingContainer>
                </Slide>
                <Grid
                    container
                    columnSpacing={20}
                    alignItems='center'>
                    <Slide
                        in={true}
                        direction='right'
                        timeout={1000}>
                        <Grid
                            item
                            lg={6}>
                            <Grid
                                container
                                direction='column'
                                rowSpacing={4}>
                                {STEPS.slice(0, 3).map(step => (
                                    <Grid
                                        item
                                        key={step.label}>
                                        <Grid
                                            container
                                            alignItems='baseline'
                                            columnSpacing={3}>
                                            <Grid item>
                                                <MyIcon>
                                                    {step.icon}
                                                </MyIcon>
                                            </Grid>
                                            <Grid item>
                                                <MyLabel>
                                                    {step.label}
                                                </MyLabel>
                                                <Typography
                                                    color='text.secondary'>
                                                    {step.description}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Slide>
                    <Slide
                        in={true}
                        direction='left'
                        timeout={1000}>
                        <Grid
                            item
                            lg={6}>
                            <Grid
                                container
                                direction='column'
                                rowSpacing={4}>
                                {STEPS.slice(3).map(step => (
                                    <Grid
                                        item
                                        key={step.label}>
                                        <Grid
                                            container
                                            alignItems='baseline'
                                            columnSpacing={3}>
                                            <Grid item>
                                                <MyLabel
                                                    align='end'>
                                                    {step.label}
                                                </MyLabel>
                                                <Typography
                                                    color='text.secondary'
                                                    align='end'>
                                                    {step.description}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <MyIcon>
                                                    {step.icon}
                                                </MyIcon>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Slide>
                </Grid>
                <MyBtnContainer>
                    <Fade
                        in={btnInView}
                        timeout={1000}>
                        <Button
                            variant='contained'
                            ref={btnRef}>
                            Know More
                        </Button>
                    </Fade>
                </MyBtnContainer>
            </MainContainer>
        </>
    );
}

export default Services;