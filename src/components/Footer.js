import Image from "next/image";
import { Grid, IconButton, SvgIcon, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Link from "../Link";


const MainContainer = styled('div')(({ theme }) => ({
    height: '25rem',
    padding: '4rem 11.5rem',
    background: 'rgba(109, 203, 197, 0.07)'
}));

const MyLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

const Header = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: '1.3rem'
}));

const SpanText = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main
}));

const MyIconButton = styled(IconButton)(() => ({
    background: '#fff',
    padding: 16,
    '&:hover': {
        background: 'rgba(109, 203, 197, 0.2)'
    }
}));


function Footer() {
    const router = useRouter();

    if (router.pathname === '/')
        return <></>;

    return (
        <MainContainer>
            <Grid
                container
                columnSpacing={16}>
                <Grid
                    item
                    lg={4}>
                    <Grid
                        container
                        direction='column'
                        spacing={4}>
                        <Grid item>
                            <Image
                                src='/logo.svg'
                                width={162}
                                height={50}
                                alt='logo' />
                        </Grid>
                        <Grid item>
                            <Typography
                                color='text.secondary'
                                sx={{ lineHeight: 1.8 }}>
                                Regular dental checkups help in detection of early
                                warning signs of certain health related issues.
                                Visit your dentists regularly and stay healthy.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{ fontSize: '1.5rem' }}>
                                Trusted by{' '}
                                <span style={{ fontWeight: 700 }}>
                                    15,000
                                </span>
                                {' '}people
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    lg={3}>
                    <Grid
                        container
                        direction='column'
                        spacing={5}>
                        <Grid item>
                            <Header>
                                Useful {' '}
                                <SpanText>
                                    Links
                                </SpanText>
                            </Header>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction='column'
                                rowSpacing={1}>
                                <Grid item>
                                    <MyLink
                                        href='/'>
                                        Home
                                    </MyLink>
                                </Grid>
                                <Grid item>
                                    <MyLink
                                        href='/about'>
                                        About
                                    </MyLink>
                                </Grid>
                                <Grid item>
                                    <MyLink
                                        href='/services'>
                                        Services
                                    </MyLink>
                                </Grid>
                                <Grid item>
                                    <MyLink
                                        href='/appointments'>
                                        Appointments
                                    </MyLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    lg={4}>
                    <Grid
                        container
                        direction='column'
                        spacing={3}>
                        <Grid item>
                            <Header>
                                Contact {' '}
                                <SpanText>
                                    Address
                                </SpanText>
                            </Header>
                        </Grid>
                        <Grid item>
                            <Typography
                                color='text.secondary'>
                                64C East Crest, Melane Plaza,<br />
                                DanyBoyle, TT 33546
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Header>
                                Call {' '}
                                <SpanText>
                                    Us
                                </SpanText>
                            </Header>
                        </Grid>
                        <Grid item>
                            <Typography
                                color='text.secondary'>
                                335-565-2900
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                spacing={2}>
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
                    </Grid>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default Footer;