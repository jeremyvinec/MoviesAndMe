import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import FadeIn from '../Animations/FadeIn'
import { connect } from 'react-redux'

class ViewsItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            text : this.props.film.title,
        }
    }

    _onLongPressButton = () => {
      const { film } = this.props
      getFilmDetailFromApi(film.release_date).then(film => {
        this.setState({ text : 'Sortie le ' + moment(new Date(film.release_date)).format('DD/MM/YYYY') })
      })
    }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <FadeIn>
        <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.poster_path)}}
          />
          <TouchableHighlight underlayColor="white" onPress={() => displayDetailForFilm(film.id)} onLongPress={this._onLongPressButton}>
            <View style={styles.content_container}> 
                  <Text style={styles.title_text}>{this.state.text}</Text>
            </View>
          </TouchableHighlight>
        </TouchableOpacity>
      </FadeIn>
    )
  }
}



const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height:80,
    margin: 5,
    borderRadius: 50
  },
  content_container: {
    flex: 1,
    margin: 15,
  },
  title_text: {
    fontSize: 15,
    color: '#666666',
    marginTop: 15
  },
  date_text: {
    fontSize: 14
  }
})

const mapStateToProps = (state) => {
    return {
      filmViews: state.toggleView.filmViews
    }
  }

export default connect(mapStateToProps)(ViewsItem)
