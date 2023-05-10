import {
    Button, Card, CardContent, CardMedia, Fade, Grid,
    Grow,
    IconButton, Paper, Slide, Stack, TextField, Typography
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MySlide from "../shared/MySlide";
import { useInView } from "react-intersection-observer";


const LocationsSection = styled('div')(() => ({
    padding: '4rem 11.5rem',
    marginBottom: '6rem'
}));

const ContactFormSection = styled('div')(() => ({
    padding: '0 11.5rem',
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

const BackgroundIcon = styled(LocationOnIcon)(() => ({
    width: 150,
    height: 150,
    opacity: .1
}));

const MyCard = styled(Card)(({ theme }) => ({
    height: '24rem',
    background: theme.palette.grey[100],
    border: '1px solid transparent',
    '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`
    }
}));

const MyPaper = styled(Paper)(() => ({
    padding: '4rem 2rem'
}));

const MyIconButton = styled(IconButton)(({ theme }) => ({
    background: '#fff',
    padding: 16,
    border: '2px solid rgba(0,0,0,0.2)',
    '&:hover': {
        background: 'rgba(109, 203, 197, 0.2)'
    }
}));

const LOCATIONS = [
    {
        name: 'Hogwarts, HP',
        description: <>3524 Deerfield Drive <br />Valdosta, GA 31601 <br /> (973) 486 - 4862</>,
        image: '04.jpg'
    },
    {
        name: 'Hoboken, NJ',
        description: <>1995 Briarwood Drive <br /> Mount Vernon,  NY 10550 <br /> (973) 780-5805</>,
        image: '05.jpg'
    },
    {
        name: 'Cambridge, NJ',
        description: <>9543 State Street <br />Union, NJ 07083 <br /> (973) 486-4862</>,
        image: '06.jpg'
    }
];


function ContactPage() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');

    const [contactFormRef, contactFormInView] = useInView({ triggerOnce: true, threshold: .6 });

    return (
        <>
            <TitleContainer>
                <Title
                    component='h1'>
                    Contact
                </Title>
            </TitleContainer>

            <LocationsSection>
                <Slide
                    in={true}
                    direction='down'
                    timeout={1000}>
                    <HeadingContainer>
                        <BackgroundIcon />
                        <HeadingContent>
                            <Typography
                                component='h2'
                                align='center'
                                sx={{ fontSize: '2.4rem' }}>
                                Our {' '}
                                <SpanText>
                                    Locations
                                </SpanText>
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                                sx={{ fontSize: '1.2rem' }}
                                align='center'>
                                Tincidunt vitae nisi etiam dolor tellus euismod
                            </Typography>
                        </HeadingContent>
                    </HeadingContainer>
                </Slide>
                <Grid
                    container
                    columnSpacing={4}>
                    {LOCATIONS.map((location, index) => (
                        <MySlide
                            in={true}
                            direction='up'
                            timeout={1000}
                            delay={index * 200 + 1000}>
                            <Grid
                                item
                                key={location.name}
                                lg={4}>
                                <MyCard
                                    elevation={0}>
                                    <CardMedia
                                        src={location.image}
                                        component='img'
                                        height={200} />
                                    <CardContent
                                        sx={{ px: 8 }}>
                                        <Typography
                                            align='center'
                                            sx={{ fontSize: '1.8rem' }}>
                                            {location.name}
                                        </Typography>
                                        <Typography
                                            sx={{ mt: 3 }}
                                            color='text.secondary'
                                            align='center'>
                                            {location.description}
                                        </Typography>
                                    </CardContent>
                                </MyCard>
                            </Grid>
                        </MySlide>
                    ))}
                </Grid>
            </LocationsSection>

            <ContactFormSection>
                <Grow
                    in={contactFormInView}
                    timeout={1000}>
                    <MyPaper
                        elevation={5}
                        sx={{ mt: 16 }}
                        ref={contactFormRef}>
                        <Grid
                            container
                            columnSpacing={8}>
                            <Grid item
                                lg={6}>
                                <Typography
                                    color='text.secondary'
                                    sx={{ lineHeight: 1.6, mb: 4 }}>
                                    About Dental uas molestias excepturi sint occaecati
                                    cupiditate non provident,similique sunt in culpa qui
                                    officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: '1.8rem', mb: 3 }}>
                                    Head Office
                                </Typography>
                                <Typography
                                    color='text.secondary'
                                    sx={{ mb: 2 }}>
                                    524 Deerfield Drive, Valdosta, GA 31601
                                </Typography>
                                <Grid
                                    container
                                    spacing={1}>
                                    <Grid item>
                                        <LocationOnIcon color='disabled' />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            color='text.secondary'>
                                            (973) 486-4862
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={1}>
                                    <Grid item>
                                        <EmailIcon color='disabled' />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            color='text.secondary'>
                                            (973) 486-4862
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    sx={{ mt: 3 }}
                                    columnSpacing={2}>
                                    <Grid item>
                                        <MyIconButton>
                                            <FacebookIcon />
                                        </MyIconButton>
                                    </Grid>
                                    <Grid item>
                                        <MyIconButton>
                                            <TwitterIcon />
                                        </MyIconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                lg={6}>
                                <form>
                                    <Stack
                                        spacing={4}>
                                        <TextField
                                            fullWidth
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder='Name'
                                            variant='standard' />
                                        <TextField
                                            fullWidth
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            placeholder='Phone'
                                            variant='standard' />
                                        <TextField
                                            multiline
                                            fullWidth
                                            rows={5}
                                            value={question}
                                            onChange={e => setQuestion(e.target.value)}
                                            placeholder='Question'
                                            variant='standard' />
                                    </Stack>
                                    <Button
                                        variant='outlined'
                                        sx={{ mt: 6 }}
                                        fullWidth>
                                        Send Message
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </MyPaper>
                </Grow>
            </ContactFormSection>
        </>
    );
}

export default ContactPage;