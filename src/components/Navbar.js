import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Tabs, Tab, Button, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "../Link";
import MyDrawer from "./MyDrawer";
import { TABS } from "../shared/TABS";


const MyAppBar = styled(AppBar)(({ theme }) => ({
    background: 'transparent',
    padding: '1rem 7rem',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
        padding: '1rem'
    }
}));

const MainContainer = styled('div')(() => ({
    minHeight: '100vh'
}));

const Logo = styled(Box)(() => ({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}));

const MyTab = styled(Tab)(({ theme }) => ({
    color: '#000',
    fontSize: '1.15rem',
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

const MyBtn = styled(Button)(() => ({
    minWidth: 165,
    marginLeft: '1rem'
}));

function Navbar() {
    const router = useRouter();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const [tabIndex, setTabIndex] = useState(false);

    const handleTabChange = (e, newVal) => setTabIndex(newVal);

    useEffect(() => {
        const index = TABS.findIndex(t => t.path === router.pathname);
        if (index >= 0) setTabIndex(index);
    }, [router]);

    return (
        <MainContainer>
            <MyAppBar>
                <Toolbar
                    disableGutters>
                    <Logo
                        component={Link}
                        href='/'>
                        <Image
                            priority
                            src='/logo.svg'
                            alt='logo'
                            width={162}
                            height={50} />
                    </Logo>
                    {matchesMd && <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        TabIndicatorProps={{
                            sx: { height: '2.5px' }
                        }}
                        sx={{ ml: 'auto' }}>
                        {TABS.map(t => (
                            <MyTab
                                key={t.name}
                                component={Link}
                                href={t.path}
                                label={t.name}
                                disableRipple />
                        ))}
                    </Tabs>}
                    <MyBtn
                        variant='outlined'
                        component={Link}
                        href='/contact'
                        sx={{ ml: 'auto' }}>
                        Get in Touch
                    </MyBtn>
                    {!matchesMd && <MyDrawer />}
                </Toolbar>
            </MyAppBar>
        </MainContainer>
    );
}

export default Navbar;