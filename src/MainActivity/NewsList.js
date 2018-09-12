import React, {Component} from 'react';
import {ScrollView,View} from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsList extends Component {

    state = { articles: [] };
    
    componentWillMount() {
        axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=60fe9dd7f6c14c66b11ab27faf499ec3')
        .then(response => this.setState({ articles: response.data.articles }));
    }

    renderArticles() {
        return this.state.articles.map(article => <NewsDetail key={article.title} article={article}/>
        );
    }

    render () {
        return (
            <ScrollView>
                {this.renderArticles()}
            </ScrollView>
        );
    }
}

export default NewsList;