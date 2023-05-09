import {
    Accordion, AccordionDetails, AccordionSummary,
    Button, Divider, Grid, Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { faHeadset, faKitMedical, faQuestion, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosSharp";


const WelcomeSection = styled('div')(() => ({
    padding: '4rem 11.5rem',
    marginBottom: '6rem'
}));

const FAQSection = styled('div')(() => ({
    padding: '4rem 11.5rem'
}));

const BlueSection = styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '4rem 11.5rem',
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

const HeaderContainer = styled('div')(({ theme }) => ({
    width: '19rem'
}));

const Header = styled(Typography)(() => ({
    fontSize: '2rem',
    marginBottom: '0.8rem'
}));

const Underline = styled('div')(({ theme }) => ({
    background: theme.palette.primary.light,
    height: 2,
    width: '50%'
}));

const MyContainer = styled(Grid)(({ theme }) => ({
    border: `2px solid rgba(73, 190, 183, 0.5)`,
    padding: '2rem',
    height: '15rem',
    '&:hover': {
        background: theme.palette.grey[100],
        border: `2px solid ${theme.palette.primary.main}`
    }
}));

const MyAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const FAQHeaderContainer = styled('div')(() => ({
    position: 'relative',
    marginBottom: '2rem',
    height: '4rem'
}));

const FAQHeader = styled('div')(({ theme }) => ({
    ...theme.typography.h4,
    position: 'absolute',
    left: 0,
    top: '25%',
    width: '100%',
    height: '100%'
}));

const MyBtn = styled(Button)(({ theme }) => ({
    color: '#fff',
    border: '2px solid #fff',
    textTransform: 'uppercase',
    marginTop: '4rem',
    '&:hover': {
        background: '#fff',
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.standard
        }),
    }
}));


const FAQs = [
    {
        question: 'What type of Dental care is best for you?',
        answer: 'Suspendisse semper, neque sit amet sagittis molestie, enim urna efficitur ligula, ' +
            'eu dapibus nibh enim a massa. Cras vel orci ut velit vehicula commodo sed eu turpis. ' +
            'Fusce luctus bibendum mauris iaculis gravida'
    },
    {
        question: 'How to protect the tooth?',
        answer: 'Cras commodo mi ligula, ut egestas ipsum dapibus in. In eu erat metus. ' +
            'Nullam tempus rhoncus viverra. Curabitur urna diam, porta ut pharetra at, volutpat dictum nisi. ' +
            'Aliquam non est ut urna vulputate pulvinar vel ac ipsum'
    },
    {
        question: 'How often should one floss the teeth',
        answer: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ' +
            'Praesent molestie risus ut urna fermentum mollis. In ante mauris, ullamcorper vel scelerisque eu, dapibus sit amet odio'
    },
    {
        question: 'How smoking can affect your teeth',
        answer: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
            'Donec vitae urna neque.Cras at luctus ligula, fringilla ultrices arcu.Donec quis pellentesque quam. ' +
            'Donec at augue sed mauris tempus ultricies'
    }
];


function AboutPage() {


    return (
        <>
            <TitleContainer>
                <Title
                    component='h1'>
                    About
                </Title>
            </TitleContainer>

            <WelcomeSection>
                <Grid
                    container
                    columnSpacing={6}>
                    <Grid
                        item
                        lg={7}>
                        <Grid
                            container
                            direction='column'
                            rowSpacing={6}>
                            <Grid item>
                                <HeaderContainer>
                                    <Header>
                                        Welcome to {' '}
                                        <span style={{ fontWeight: 700 }}>
                                            Sunrise
                                        </span>
                                    </Header>
                                    <Underline />
                                </HeaderContainer>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color='text.secondary'>
                                    Vivamus condimentum sapien augue, nec euismod massa tempus at.
                                    Morbi at leo sed est consectetur suscipit.
                                    Nullam a metus luctus, condimentum dui ut, volutpat nisl.
                                    Nam sapien sapien, porta non congue nec, tristique sed dolor
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color='text.secondary'>
                                    Curabitur eget varius arcu. Phasellus vel justo facilisis, aliquet nisi eget,
                                    gravida eros. Phasellus mollis, erat facilisis molestie porta, sapien ligula
                                    facilisis est, non rutrum mi nisi in dui. Mauris sapien ipsum, posuere in
                                    dolor eget, imperdiet dignissim dolor.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color='text.secondary'>
                                    Etiam sollicitudin cursus nisi, porttitor pellentesque mauris facilisis ut.
                                    In vehicula eros augue, vel consequat purus dignissim quis.
                                    Morbi justo massa, euismod eu turpis in, pellentesque dignissim quam.
                                    Duis vitae lectus aliquam, interdum turpis ut, mattis nisi.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant='outlined'
                                    sx={{ mr: 4 }}>
                                    Know Your Facts
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='secondary'>
                                    Talk to Us
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        lg={5}
                        alignSelf='center'>
                        <MyContainer
                            container
                            alignItems='center'>
                            <Grid
                                item
                                xs={4}>
                                <FontAwesomeIcon
                                    icon={faHeadset}
                                    color='rgba(73, 190, 183, 0.7)'
                                    size='5x' />
                            </Grid>
                            <Grid
                                item
                                xs={8}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '1.3rem',
                                        mb: 2
                                    }}>
                                    24/7 Live Support
                                </Typography>
                                <Typography
                                    color='text.secondary'>
                                    Choose the type of department and
                                    your staff along with the time slot
                                </Typography>
                            </Grid>
                        </MyContainer>
                    </Grid>
                </Grid>
            </WelcomeSection>

            <BlueSection>
                <Grid
                    container
                    direction='column'
                    spacing={5}
                    sx={{ color: '#fff' }}>
                    <Grid item>
                        <Grid
                            container
                            justifyContent='center'
                            spacing={12}>
                            <Grid item
                                sx={{ textAlign: 'center' }}
                                lg={6}>
                                <FontAwesomeIcon
                                    size='4x'
                                    icon={faTooth}
                                    color='#fff'
                                    style={{ marginBottom: '1rem' }} />
                                <Typography
                                    sx={{ fontSize: '1.8rem' }}>
                                    Are you {' '}
                                    <span style={{ fontWeight: 700 }}>
                                        Losing your Teeth?
                                    </span>
                                </Typography>
                                <Typography
                                    variant='subtitle1'>
                                    For existing dental problems
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: '2rem',
                                        fontSize: '1.2rem',
                                        lineHeight: 1.5
                                    }}>
                                    Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                                    Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                                </Typography>
                            </Grid>
                            <Grid item
                                sx={{ textAlign: 'center' }}
                                lg={6}>
                                <FontAwesomeIcon
                                    size='4x'
                                    icon={faKitMedical}
                                    color="#fff"
                                    style={{ marginBottom: '1rem' }} />
                                <Typography
                                    sx={{ fontSize: '1.8rem' }}>
                                    Need a {' '}
                                    <span style={{ fontWeight: 700 }}>
                                        Solution?
                                    </span>
                                </Typography>
                                <Typography
                                    variant='subtitle1'>
                                    For existing dental problems
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: '2rem',
                                        fontSize: '1.2rem',
                                        lineHeight: 1.5
                                    }}>
                                    Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                                    Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider
                            sx={{ background: 'rgba(255,255,255,0.7)' }} />
                    </Grid>
                    <Grid item
                        sx={{ textAlign: 'center' }}>
                        <Typography
                            sx={{ fontSize: '1.8rem' }}>
                            You are always safe with us. {' '}
                            <span style={{ fontWeight: 700 }}>
                                We are ready to help any time
                            </span>
                        </Typography>
                        <Typography
                            variant='subtitle1'>
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                            Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                        </Typography>
                        <MyBtn
                            variant='outlined'>
                            Fix an Appointment with Us
                        </MyBtn>
                    </Grid>
                </Grid>
            </BlueSection>

            <FAQSection>
                <FAQHeaderContainer>
                    <FontAwesomeIcon
                        icon={faQuestion}
                        size='5x'
                        style={{ transform: 'rotate(30deg)' }}
                        opacity={.1} />
                    <FAQHeader>
                        Why we are the best? FAQs
                    </FAQHeader>
                </FAQHeaderContainer>
                <Grid
                    container
                    sx={{ mb: '6rem' }}
                    columnSpacing={14}>
                    <Grid
                        item
                        lg={7}>
                        {FAQs.map(faq => (
                            <Accordion
                                disableGutters
                                elevation={0}>
                                <MyAccordionSummary
                                    expandIcon={
                                        <ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />
                                    }>
                                    <Typography
                                        sx={{ fontSize: '1.1rem' }}>
                                        {faq.question}
                                    </Typography>
                                </MyAccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        color='text.secondary'>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </FAQSection>
        </>
    );
}

export default AboutPage;