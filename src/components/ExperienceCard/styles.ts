import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300
    },
    experience: {
        width: 300
    },
    headerContainer: {
        display: 'flex', flexDirection: 'row'
    },
    bullseye: {
        color: 'purple'
    },
    title: {
        fontSize: 25, marginLeft: 15
    },
    pointsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 30
    },
    coins: {
        color: 'silver'
    },
    points: {
        fontSize: 25,
        marginLeft: 15
    },
    map: {
        position: 'absolute',
        bottom: -25,
        right: 10,
        color: 'purple'
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    heart:{
        color: 'red' 
    },
    likes:{
        fontSize: 14, 
        marginLeft: 10
    },
    commentIcon:{
        color: 'grey', 
        marginLeft: 10 
    },
    commentText:{
        fontSize: 14, 
        marginLeft: 10
    }
})
export default styles