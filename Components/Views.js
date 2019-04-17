import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Views extends React.Component {

    render(){
        return(
            <View style={styles.main_container}>
            <FilmList
              data={this.props.films}
              navigation={this.props.navigation}
              //viewList={true}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        flex: 1
      }
})

const mapStateToProps = (state) => {
    return{
        filmViews: state.toggleView.filmViews
    }
}

export default connect(mapStateToProps)(Views)