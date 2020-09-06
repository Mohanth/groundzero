import React from 'react';
import {Row} from 'simple-flexbox';
import {css, StyleSheet} from 'aphrodite';
import TransparentLogo from "../../assets/Transparent_logo.png";

const styles = StyleSheet.create({
    container: {
        marginLeft: 25,
        marginRight: 32
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: '0.4px',
        color: 'white',
        marginLeft: 12
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <img src={TransparentLogo} alt={"logo"} width={100}/>
        </Row>
    );
}

export default LogoComponent;
