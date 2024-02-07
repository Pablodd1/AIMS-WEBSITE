import * as React from 'react';
import {
    List,
    ListItem,
    Typography,
    Divider,
    SwipeableDrawer,
    IconButton,
    Box,
} from "@mui/material";
import { RiMenuFill } from "react-icons/ri";
import MenuIcon from '@mui/icons-material/Menu';
import { Close, } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function CustomDrawer({ links, styles }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useTranslation()
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer} aria-label='Toggle Menu Drawer' >
                {isOpen ? <Close className='text-white-500' /> : <MenuIcon className='text-white-500' />}
            </IconButton>
            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Box sx={{maxHeight:'80vh'}}  >

                    <Box className='bg-teal-900 p-2 '  >
                        <Typography component={'span'} variant='h5' className='text-white-300' >
                            <IconButton onClick={toggleDrawer}  aria-label='Toggle Menu Drawer' >
                                <RiMenuFill className='text-white-300' />
                            </IconButton>
                            {t('headings.mainMenu')}
                        </Typography>
                    </Box>
                    <Divider />

                    <List>
                        {links.map((x, index) => (
                            <ListItem key={index}>
                                <Link to={x.add} rel='follow index'>
                                    <Typography component={'span'} className='text-black-100'>
                                        <IconButton className='text-black-100' aria-label={x.title} > {x.icon}  </IconButton>
                                        {x.title}
                                    </Typography>

                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
}
