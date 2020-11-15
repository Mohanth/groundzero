import React from "react";
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { css, StyleSheet } from "aphrodite";
import IconBellNew from "../../assets/icon-bell-new";
import User from "../../resources/user";

const styles = StyleSheet.create({
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 14,
    border: "1px solid #DFE0EB",
  },
  container: {
    height: 40,
  },
  cursorPointer: {
    cursor: "pointer",
  },
  name: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  separator: {
    borderLeft: "1px solid #DFE0EB",
    marginLeft: 32,
    marginRight: 32,
    height: 32,
    width: 2,
    "@media (max-width: 768px)": {
      marginLeft: 12,
      marginRight: 12,
    },
  },
  title: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
    "@media (max-width: 768px)": {
      marginLeft: 36,
    },
    "@media (max-width: 468px)": {
      fontSize: 20,
    },
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 768px)": {
      marginLeft: 12,
    },
  },
});

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: User.userDetails,
    };
  }


  render() {
    return (
      <Row
        className={css(styles.container)}
        vertical="center"
        horizontal="space-between"
      >
        <span className={css(styles.title)}>{this.props.title}</span>
        <Row vertical="center">
          <div className={css(styles.iconStyles)}>
            <IconBellNew />
          </div>
          <div className={css(styles.separator)} />
          <Row vertical="center">
            <span className={css(styles.name, styles.cursorPointer)}>
              {this.props.info.userId.userId}
            </span>

            <img
              src={this.state.user.userAvatar}
              alt="avatar"
              className={css(styles.avatar, styles.cursorPointer)}
            />
          </Row>
        </Row>
      </Row>
    );
  }
}

HeaderComponent.propTypes = {
  title: string,
  userId:'',
};
