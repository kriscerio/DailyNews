import React,{Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import NewsList from '../components/MainScreen/NewsList';

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    state = { articles: [] };

    componentDidMount() {
        axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=60fe9dd7f6c14c66b11ab27faf499ec3')
        .then(response => this.setState({ articles: response.data.articles }));
    }

    onArticleShow = (article) => {
         this.props.navigation.navigate('Article', { article: article });
    };

    render () {
        return(
            <NewsList onArticle={this.onArticleShow} data={this.state.articles} />
        )
    }
}

export default Home