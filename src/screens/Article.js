import React,{Component} from 'react';
import {View,Text} from 'react-native';
import NewsArticle from '../components/article/NewsArticle';

class Article extends Component {
    render () {
        const article = this.props.navigation.getParam('article', {});

        if (article) {
            return <NewsArticle article={article} />;
        }
        return <View style={{ flex: 1, backgroundColor: 'red' }} />;
    }
}

export default Article;