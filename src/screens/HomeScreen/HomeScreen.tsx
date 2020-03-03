import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SearchBar from '../../components/SearchBar'
import ExperienceCard from '../../components/ExperienceCard'
import styles from './styles'
const HomeScreen = () => {
    return (
        <View  style={{width:'100%', justifyContent:'center'}}>
            <SearchBar />
            <ScrollView style={{height:500, marginTop:10}}>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </ScrollView>
        </View>
    )
}


export default HomeScreen