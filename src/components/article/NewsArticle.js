import React,{Component} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

class NewsArticle extends Component {
    render () {

        const { article } = this.props;
        // console.log('article:', article);

    
        return (
            <View style={styles.articleContainerStyle}>
                <View style={styles.imageContainerStyle}>
                    <Image 
                        style={styles.imageStyle}
                        source={require('../../images/news-placeholder.png')}
                    />
                </View> 
                
                <View >
                <Card>
                    <CardSection>
                        <View>
                            <Text style={styles.fontStyle}>{article.title}</Text>
                            <Text>{article.description || 'Lorem ipsum sit amet dolor...'}</Text>
                        </View>
                    </CardSection>
                </Card>
                </View>
            </View>
        );
    }
}

NewsArticle.propType = {
    article: PropTypes.object.isRequired,
};

const styles = StyleSheet.create ({
    imageStyle : {
        height: 150,
        width: 375,
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    articleContainerStyle: {
        flexDirection: 'column'
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default NewsArticle