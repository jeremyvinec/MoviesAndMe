import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Vus extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: false
        }
    }

    render(){
        return(
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        flex: 1
      }
})

const mapStateToprops = (state) => {
    return{

    }
}

export default connect(mapStateToprops)(Vus)