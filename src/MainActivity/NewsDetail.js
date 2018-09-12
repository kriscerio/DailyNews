import React from 'react';
import { View, Text, Image} from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

const NewsDetail = ({ article }) => {

    //Objects
    const{
        author, title, description, url, urlToImage, publishedAt
    } = article;

    const {
        articleContainerStyle,
        fontStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={articleContainerStyle}>
                    <Text style={fontStyle} numberOfLines={1}>{title === null ? 'no Title' : title}</Text>
                    <Text numberOfLines={3}>{description === null ? 'no description' : description}</Text>
                </View>

                <View>
                    <Image 
                        style={imageStyle}
                        source={urlToImage === null ? require('../images/news-placeholder.png') : { uri: urlToImage}}
                    />
                </View>
            </CardSection>
        </Card>
    );
}

const styles = {
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
};

export default NewsDetail;