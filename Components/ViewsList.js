import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ViewsItem from './ViewsItem'
import { connect } from 'react-redux'

class ViewsList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            films: []
        }
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
      }

    render(){
        return(
            <FlatList
                style={styles.list}
                data={this.props.films}
                extraData={this.props.filmViews}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ViewsItem
                    film={item}
                    isFilmView={(this.props.filmViews.findIndex(film => film.id === item.id) !== -1) ? true : false}
                    displayDetailForFilm={this._displayDetailForFilm}
                    />
                )}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (!this.props.filmViews && this.props.page < this.props.totalPages) {
                    this.props.loadFilms()
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
      flex: 1
    }
  })

const mapStateToProps = state => ({
    filmViews: state.toggleView.filmViews
})

export default connect(mapStateToProps)(ViewsList)