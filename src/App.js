import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import NewsList from './MainActivity/NewsList';

class App extends Component {
    render() {
        return (
            <View style={styles.viewFlex}>
                <Header headerText='Daily News'/>
                <NewsList />
            </View>
        );
    }
}

const styles = {
    viewFlex: {
        flex: 1
    }
};

export default App;