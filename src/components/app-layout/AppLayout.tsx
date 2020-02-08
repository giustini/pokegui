import React, { Component } from "react";
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import PokemonList from "../pokemon-list/PokemonList";

const drawerWidth = 200;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create([ 'width', 'margin' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${ drawerWidth }px)`,
        transition: theme.transitions.create([ 'width', 'margin' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [ theme.breakpoints.up('sm') ]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});


interface AppLayoutProps {

}

interface AppLayoutState {
    drawerOpen: boolean;
}

class AppLayout extends Component<AppLayoutProps & WithStyles, AppLayoutState> {

    constructor(props: AppLayoutProps & WithStyles) {
        super(props);

        this.state = { drawerOpen: false };
    }

    render() {

        const { drawerOpen } = this.state;

        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <AppBar
                    position="fixed"
                    className={ clsx(classes.appBar, {
                        [ classes.appBarShift ]: drawerOpen,
                    }) }
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={ this.handleDrawerOpen }
                            edge="start"
                            className={ clsx(classes.menuButton, {
                                [ classes.hide ]: drawerOpen,
                            }) }
                        >
                            <MenuIcon />
                        </IconButton>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="textPrimary">PokéGUI</Typography>
                            <Typography color="textPrimary">Pokémon list</Typography>
                        </Breadcrumbs>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={ clsx(classes.drawer, {
                        [ classes.drawerOpen ]: drawerOpen,
                        [ classes.drawerClose ]: !drawerOpen,
                    }) }
                    classes={ {
                        paper: clsx({
                            [ classes.drawerOpen ]: drawerOpen,
                            [ classes.drawerClose ]: !drawerOpen,
                        }),
                    } }
                    open={ false }
                >
                    <div className={ classes.toolbar }>
                        <IconButton onClick={ this.handleDrawerClose }>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={ "Pokémon list" } />
                        </ListItem>
                    </List>
                </Drawer>

                <PokemonList />

            </div>
        );
    }

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerOpen: false });
    };
}

export default withStyles(styles)(AppLayout);
