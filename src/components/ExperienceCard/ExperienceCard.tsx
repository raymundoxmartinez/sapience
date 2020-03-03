import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import styles from './styles'
const experience = {
    title: 'Holy Grail',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    category: 'purple',
    likes: 122,
    points: 200
}

const ExperienceCard = () => {
    return (
        <Card title={
            <View style={styles.headerContainer}>
                <FontAwesome
                    name="bullseye"
                    size={30}
                    style={styles.bullseye}
                />
                <Text style={styles.title}>{experience.title}</Text>
                <View style={styles.pointsContainer}>
                    <FontAwesome5 name="coins" size={30} style={styles.coins} /><Text style={styles.points}>{experience.points}</Text>
                </View>
            </View>}>
            <View style={styles.experience}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: experience.avatar }}
                />
                <FontAwesome name="map" size={60} style={styles.map} />
            </View>
            <View style={styles.footerContainer}>
                <FontAwesome name="heart" size={20} style={styles.heart} /><Text style={styles.likes}>{experience.likes}</Text>
                <FontAwesome name="comment" size={20} style={styles.commentIcon} /><Text style={styles.commentText}>{experience.likes}</Text>
            </View>
        </Card>
    )
}
export default ExperienceCard