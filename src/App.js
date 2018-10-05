import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Header from './components/common/Header';
import NewsList from './components/MainScreen/NewsList';
import {StackNavigator} from 'react-navigation';
import Root from './manifest/manifest';

class App extends Component {
    render() {
        return <Root />
    }
}

const styles = {
    viewFlex: {
        flex: 1
    }
};

export default App;