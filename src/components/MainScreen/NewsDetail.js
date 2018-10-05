import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet} from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

class NewsDetail extends React.Component {

    handleArticlePress = () => {
        this.props.onArticlePress()
    };

    render() {
        const{
            author, title, description, url, urlToImage, publishedAt
        } = this.props.article;
        
        return (
            <TouchableOpacity onPress={this.handleArticlePress}>
                <Card>
                    <CardSection>
                        <View style={styles.articleContainerStyle}>
                            <Text style={styles.fontStyle} numberOfLines={1}>{title === null ? 'no Title' : title}</Text>
                            <Text numberOfLines={3}>{description === null ? 'no description' : description}</Text>
                        </View>

                        <View>
                            <Image 
                                style={styles.imageStyle}
                                source={urlToImage === null ? require('../../images/news-placeholder.png') : { uri: urlToImage}}
                            />
                        </View>
                    </CardSection>
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    articleContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-around'
    },
    fontStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 100,
        height: 100
    }
});

export default NewsDetail;
