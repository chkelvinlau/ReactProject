import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

export default class AddScreenComponent extends Component {
    
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Header
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={{ text: 'CANCEL', style: { color: '#fff' } }}
                      rightComponent={{ text: 'SAVE', style: { color: '#fff' } }}
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
    },

    placeholder: {
        height: 280,
        width: 170,
        resizeMode: 'contain',
    },

  notesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 10,
  },
});