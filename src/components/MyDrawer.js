import { useState } from "react";
import { Fade, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { TABS } from "../shared/TABS";
import Link from "../Link";


const MainContainer = styled('div')(() => ({
    background: '#000',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%'
}));

function MyDrawer() {
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Fade
                appear={false}
                in={openDrawer}
                duration={theme.transitions.duration.complex}
                mountOnEnter
                unmountOnExit>
                <MainContainer>
                    <List
                        disablePadding>
                        {TABS.map(t => (
                            <ListItemButton
                                disableRipple
                                key={t.name}
                                sx={{ borderBottom: '1px solid #fff' }}>
                                <ListItemText
                                    color="inherit"
                                    component={Link}
                                    href={t.path}
                                    primary={t.name}
                                    disableTypography
                                    sx={{ color: '#fff', fontWeight: 500 }} />
                            </ListItemButton>
                        ))}
                    </List>
                </MainContainer>
            </Fade>
            <IconButton
                disableRipple
                onClick={() => setOpenDrawer(!openDrawer)}>
                {openDrawer ?
                    <CloseIcon
                        fontSize='large' /> :
                    <MenuIcon
                        fontSize='large' />}
            </IconButton>
        </>
    );
}

export default MyDrawer;