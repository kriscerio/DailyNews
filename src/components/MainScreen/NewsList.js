import React, {Component} from 'react';
import {ScrollView,View} from 'react-native';

import NewsDetail from './NewsDetail';

class NewsList extends Component {
    renderArticles() {
        return this.props.data.map(article => <NewsDetail key={article.title} article={article} onArticlePress={() => this.props.onArticle(article)} />
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