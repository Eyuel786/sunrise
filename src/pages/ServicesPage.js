import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import { Button, Card, Fade, Grid, Slide, Typography } from "@mui/material";
import {
    faTooth, faSyringe, faMedkit, faShieldAlt,
    faHandHoldingMedical, faFileMedicalAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

import MySlide from "../shared/MySlide";


const SpecificServicesSection = styled('div')(() => ({
    padding: '0 11.5rem',
    minHeight: '100vh',
    marginBottom: '6rem'
}));

const BlueSection = styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '4rem 11.5rem',
    marginBottom: '6rem',
    color: '#fff'
}));

const GeneralServicesSection = styled('div')(() => ({
    marginBottom: '6rem'
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

const MyImage = styled(Image)(() => ({
    objectFit: 'cover',
    objectPosition: 'center center'
}));

const MyCard = styled(Card)(({ theme }) => ({
    background: theme.palette.grey[100],
    width: '1125px',
}));


const STEPS = [
    {
        label: 'Implants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faTooth,
    },
    {
        label: 'Minor oral surgeries',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faMedkit,
    },
    {
        label: 'Orthodontics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faHandHoldingMedical
    },
    {
        label: 'Crown and bridge work',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faShieldAlt
    },
    {
        label: 'Cosmetics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faSyringe
    },
    {
        label: 'Root canal treatments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: faFileMedicalAlt
    },
];

const GENEREAL_SERVICES = [
    {
        label: 'Restorative Dentistry',
        image: '/08.jpg',
        description: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. Maecenas turpis dui, ' +
            'vestibulum in libero et, sollicitudin viverra leo. Cum sociis natoque penatibus et magnis dis ' +
            'Curabitur non ipsum risus. Cras pharetra gravida lectus, interdum consectetur elit sodales et. \n' +
            'parturient montes, nascetur ridiculus mus. Proin in quam faucibus, interdum ante a, mattis nibh ' +
            'Pellentesque convallis, dui sit amet congue scelerisque, tortor nunc elementum sem, eget lobortis lacus'
    },
    {
        label: 'Implant Dentistry',
        image: '/09.jpg',
        description: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. Maecenas turpis dui, ' +
            'vestibulum in libero et, sollicitudin viverra leo. Cum sociis natoque penatibus et magnis dis ' +
            'Curabitur non ipsum risus. Cras pharetra gravida lectus, interdum consectetur elit sodales et. \n' +
            'parturient montes, nascetur ridiculus mus. Proin in quam faucibus, interdum ante a, mattis nibh ' +
            'Pellentesque convallis, dui sit amet congue scelerisque, tortor nunc elementum sem, eget lobortis lacus'
    },
    {
        label: 'Cosmetic Dentistry',
        image: '/10.jpg',
        description: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. Maecenas turpis dui, ' +
            'vestibulum in libero et, sollicitudin viverra leo. Cum sociis natoque penatibus et magnis dis ' +
            'Curabitur non ipsum risus. Cras pharetra gravida lectus, interdum consectetur elit sodales et. \n' +
            'parturient montes, nascetur ridiculus mus. Proin in quam faucibus, interdum ante a, mattis nibh ' +
            'Pellentesque convallis, dui sit amet congue scelerisque, tortor nunc elementum sem, eget lobortis lacus'
    },
    {
        label: 'Preventive Dentistry',
        image: '/11.jpg',
        description: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. Maecenas turpis dui, ' +
            'vestibulum in libero et, sollicitudin viverra leo. Cum sociis natoque penatibus et magnis dis ' +
            'Curabitur non ipsum risus. Cras pharetra gravida lectus, interdum consectetur elit sodales et. \n' +
            'parturient montes, nascetur ridiculus mus. Proin in quam faucibus, interdum ante a, mattis nibh ' +
            'Pellentesque convallis, dui sit amet congue scelerisque, tortor nunc elementum sem, eget lobortis lacus'
    }
];

function Services() {
    const theme = useTheme();
    const [btnRef, btnInView] = useInView({ triggerOnce: true });
    const [gs1Ref, gs1Inview] = useInView({ triggerOnce: true });
    const [gs2Ref, gs2Inview] = useInView({ triggerOnce: true });
    const [gs3Ref, gs3Inview] = useInView({ triggerOnce: true });
    const [gs4Ref, gs4Inview] = useInView({ triggerOnce: true });

    const gs = [
        { gsRef: gs1Ref, gsInView: gs1Inview },
        { gsRef: gs2Ref, gsInView: gs2Inview },
        { gsRef: gs3Ref, gsInView: gs3Inview },
        { gsRef: gs4Ref, gsInView: gs4Inview }
    ];

    return (
        <>
            <TitleContainer>
                <Title
                    component='h1'>
                    Services
                </Title>
            </TitleContainer>
            <SpecificServicesSection>
                <MySlide
                    in={true}
                    direction='up'
                    timeout={1000}
                    delay={0}>
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
                </MySlide>
                <Grid
                    container
                    columnSpacing={20}
                    alignItems='center'>
                    <MySlide
                        in={true}
                        direction='right'
                        timeout={1000}
                        delay={1000}>
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
                                                    <FontAwesomeIcon
                                                        icon={step.icon}
                                                        color='#fff'
                                                        size='2x' />
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
                    </MySlide>
                    <MySlide
                        in={true}
                        direction='left'
                        timeout={1000}
                        delay={1000}>
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
                                                    align='right'>
                                                    {step.label}
                                                </MyLabel>
                                                <Typography
                                                    color='text.secondary'
                                                    align='right'>
                                                    {step.description}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <MyIcon>
                                                    <FontAwesomeIcon
                                                        icon={step.icon}
                                                        color='#fff'
                                                        size='2x' />
                                                </MyIcon>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </MySlide>
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
            </SpecificServicesSection>

            <BlueSection>
                <Typography
                    variant='h4'
                    align='center'
                    sx={{ mb: 5 }}>
                    Dentistry is restoring smile in people
                </Typography>
                <Grid
                    container
                    justifyContent='center'
                    spacing={6}>
                    <Grid
                        item
                        lg={4}>
                        <Typography
                            variant='h2'
                            align='center'
                            sx={{ mb: 4, color: '#000', fontWeight: 700 }}>
                            650
                        </Typography>
                        <Typography
                            align='center'
                            variant='h5'
                            sx={{ mb: 3 }}>
                            650+ Cosmetic Surgeries
                        </Typography>
                        <Typography
                            align='center'
                            sx={{ lineHeight: 1.6 }}>
                            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={4}>
                        <Typography
                            variant='h2'
                            align='center'
                            sx={{ mb: 4, color: '#000', fontWeight: 700 }}>
                            250
                        </Typography>
                        <Typography
                            align='center'
                            variant='h5'
                            sx={{ mb: 3 }}>
                            250+ Root Canal Treatments
                        </Typography>
                        <Typography
                            align='center'
                            sx={{ lineHeight: 1.6 }}>
                            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={4}>
                        <Typography
                            variant='h2'
                            align='center'
                            sx={{ mb: 4, color: '#000', fontWeight: 700 }}>
                            150
                        </Typography>
                        <Typography
                            align='center'
                            variant='h5'
                            sx={{ mb: 3 }}>
                            150+ Root Canal Treatments
                        </Typography>
                        <Typography
                            align='center'
                            sx={{ lineHeight: 1.6 }}>
                            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat
                        </Typography>
                    </Grid>
                </Grid>
            </BlueSection>

            <Grid
                container
                direction='column'
                sx={{ width: '100vw', margin: '0 0 6rem' }}
                rowSpacing={8}>
                {GENEREAL_SERVICES.map((service, index) => {
                    const fromRight = index % 2 === 0;

                    return (
                        <Grid
                            item
                            ref={gs[index].gsRef}>
                            <Slide
                                in={gs[index].gsInView}
                                direction={fromRight ? 'left' : 'right'}
                                timeout={1000}
                                key={service.label}>
                                <MyCard
                                    elevation={0}
                                    sx={{ ml: fromRight ? 'auto' : '' }}>
                                    <Grid
                                        container
                                        columnSpacing={4}
                                        direction={fromRight ? '' : 'row-reverse'}>
                                        <Grid
                                            item
                                            lg={5}>
                                            <MyImage
                                                src={service.image}
                                                loading='lazy'
                                                height={380}
                                                width={450}
                                                alt={service.label} />
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6.5}
                                            align={fromRight ? '' : 'right'}>
                                            <Typography
                                                sx={{ my: 3 }}
                                                variant='h4'>
                                                {service.label.split(' ')[0]}
                                                {' '}
                                                <span
                                                    style={{
                                                        fontWeight: 700,
                                                        color: theme.palette.primary.main
                                                    }}>
                                                    {service.label.split(' ')[1]}
                                                </span>
                                            </Typography>
                                            <Typography
                                                color='text.secondary'
                                                sx={{ mb: 2 }}>
                                                {service.description.split('\n')[0]}
                                            </Typography>
                                            <Typography
                                                color='text.secondary'>
                                                {service.description.split('\n')[1]}
                                            </Typography>
                                            <Button
                                                variant='outlined'
                                                color='primary'
                                                sx={{ mt: 3, ml: 'auto' }}>
                                                Read More
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </MyCard>
                            </Slide>
                        </Grid>
                    )
                })}
            </Grid >

        </>
    );
}

export default Services;