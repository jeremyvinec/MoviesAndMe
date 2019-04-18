import React from 'react'
import { StyleSheet, View } from 'react-native'
import ViewList from './ViewsList'
import { connect } from 'react-redux'

class Views extends React.Component {
    render(){
        return(
            <View style={styles.main_container}>
                <ViewList
                films={this.props.filmViews}
                navigation={this.props.navigation}
                viewList={true}
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