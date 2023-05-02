import { Button, Divider, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainContainer = styled('div')(() => ({
    padding: '4rem 11.5rem',
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

const HeaderContainer = styled('div')(({ theme }) => ({
    width: '19rem'
}));

const Header = styled(Typography)(({ theme }) => ({
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

const MyBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`
}));


function AboutPage() {
    const theme = useTheme();

    return (
        <>
            <TitleContainer>
                <Title
                    component='h1'>
                    About
                </Title>
            </TitleContainer>
            <MainContainer>
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
                                <MyBtn
                                    variant='outlined'>
                                    Talk to Us
                                </MyBtn>
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
                                    width={74}
                                    height={74} />
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
            </MainContainer>
        </>
    );
}

export default AboutPage;