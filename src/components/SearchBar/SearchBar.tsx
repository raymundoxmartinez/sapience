import * as React from 'react'
import { Input } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'
const SearchBar = () => {
    return (
        <Input
            placeholder="Search"
            leftIcon={<FontAwesome name="search" size={20} />}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
        />
    )
}
export default SearchBar