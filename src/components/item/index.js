import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {View, ViewPropTypes} from 'react-native';
import {Button} from 'react-native-material-buttons';

import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
    style: undefined,
  };

  static propTypes = {
    style: (ViewPropTypes || View.propTypes).style,

    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,

    onPress: PropTypes.func.isRequired,

    index: PropTypes.number.isRequired,
    baseColor: PropTypes.string.isRequired,
    animationDuration: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {onPress, index} = this.props;

    if (typeof onPress === 'function') {
      onPress(index);
    }
  }

  render() {
    const {
      children,
      style,
      animationDuration,
      baseColor,
      ...props
    } = this.props;

    return (
      <Button
        {...props}

        style={[styles.container, style]}
        rippleDuration={animationDuration * 2}
        rippleColor={baseColor}
        shadeColor={baseColor}
        onPress={this.onPress}
      >
        {children}
      </Button>
    );
  }
}
