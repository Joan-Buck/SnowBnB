const ADD_SEARCH_RESULTS = 'search/addSearchResults';
const LOAD_SEARCH_RESULTS = 'search/loadSearchResults';

export const loadSearchResults = (searchResults) => {
    return {
        type: LOAD_SEARCH_RESULTS,
        searchResults
    }
}



export const getSearchResultsThunk = (searchResults) => async dispatch => {

    dispatch(loadSearchResults(searchResults))

}


const initialState = { searchResults: {}}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH_RESULTS: {
            return action.searchResults
        }
        default:
            return state
    }
}

export default searchReducer;
