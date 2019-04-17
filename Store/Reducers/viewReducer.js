const initialState = { filmViews: [] }

function toggleView(state = initialState, action){
    let nextState
    switch (action.type){
        case 'TOGGLE_VIEW':
        const filmViewIndex = state.filmViews.findIndex(item => item.id === action.value.id)
        if(filmViewIndex !== -1){
            nextState = {
                ...state,
                filmViews: state.filmViews.filter((item,index) => index !== filmViewIndex)
            }
        } else{
            nextState = {
                ...state,
                filmViews: [...state.filmViews, action.value]
            }
        }
        return nextState || state
        default: 
            return state
        
    }
}

export default toggleView