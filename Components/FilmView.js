import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button } from 'react-native'
import FilmItem from './FilmItem'
import FilmDetail from './FilmDetail'
import { connect } from 'react-redux'

class FilmView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
          this.setState({
            film: data,
            isLoading: false
          })
        })
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props.filmView)
      }
    
      _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              
            </View>
          )
        }
      }

      _toggleView() {
        // definition de l'action
        const action = { type: 'TOGGLE_VIEW', value: this.state.film}
        this.props.dispatch(action)
    }

    render() {
        return(
            <View style={styles.main_container}>
                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 15
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    }
  })
  
  const mapStateToProps = (state) => {
    return {
      filmView: state.filmView
    }
  }
export default connect(mapStateToProps)(FilmView)