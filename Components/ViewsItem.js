import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import FadeIn from '../Animations/FadeIn'
import { connect } from 'react-redux'

class ViewsItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            film: this.props,
            title : '',
        }
    }

    _onLongPressButton() {
      getFilmDetailFromApi(this.film.release_date).then(data => {
        console.log({ title : film.release_date })
      })
    }

  render() {
    const { film } = this.props
    getFilmDetailFromApi(this.props.film.release_date).then(data => {
      console.log({ title : film.release_date })
  })
    return (
      <FadeIn>
        <TouchableOpacity style={styles.main_container}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.poster_path)}}
          />
          <View style={styles.content_container}>
            <TouchableHighlight onLongPress={this._onLongPressButton}>
                <Text style={styles.title_text}>{film.title}</Text>
            </TouchableHighlight>
          </View>
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
    margin: 20
  },
  title_text: {
    fontSize: 15,
    color: '#666666'
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
