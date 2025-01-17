import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class SettingsSection extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    heading: PropTypes.string
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {this.props.heading}
        </Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15
  },
  heading: {
    color: colors.grey3,
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 15,
    marginRight: 15
  }
});