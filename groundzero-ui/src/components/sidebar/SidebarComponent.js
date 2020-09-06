import React from 'react';
import {Column, Row} from 'simple-flexbox';
import {css, StyleSheet} from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconSettings from '../../assets/icon-settings';
import IconSubscription from '../../assets/icon-subscription';
import IconBurger from '../../assets/icon-burger';
import StudentDashboardObj from '../../resources/StudentDashboardPanels';

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = {expanded: false, dashboard: StudentDashboardObj.panels};

    onItemClicked = (item) => {
        this.setState({expanded: true});
        return this.props.onChange(item);
    };

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({expanded: !prevState.expanded}));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger/>
        </div>
    };

    render() {
        const {expanded, dashboard} = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{position: 'relative'}}>
                <Row className={css(styles.mainContainer)} breakpoints={{768: css(styles.mainContainerMobile)}}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)}
                            breakpoints={{768: css(styles.containerMobile, expanded ? styles.show : styles.hide)}}>
                        <LogoComponent/>
                        <Column className={css(styles.menuItemList)}>
                            {
                                dashboard.map((panel) => {
                                    return (
                                        <MenuItemComponent
                                            title={panel.value} icon={panel.icon}
                                            onClick={() => this.onItemClicked(panel.id)}
                                            active={this.props.selectedItem === panel.id}/>
                                    )
                                })
                            }
                            <div className={css(styles.separator)}/>
                            <MenuItemComponent
                                title="Settings" icon={"fas-fa-cog"}
                                onClick={() => this.onItemClicked('Settings')}
                                active={this.props.selectedItem === 'Settings'}/>
                            <MenuItemComponent
                                title="Subscription" icon={""}
                                onClick={() => this.onItemClicked('Subscription')}
                                active={this.props.selectedItem === 'Subscription'}/>
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}/>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;
