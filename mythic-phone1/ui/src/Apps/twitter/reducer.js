// Initial state for the Twitter application
export const initialState = {
    tab: 0,           // Current active tab (0: Feed, 1: Profile)
    refreshKey: 0,    // Key to force refresh of tweet list
    searchQuery: '',  // Search query for filtering tweets
    filters: {
        showReplies: true,
        showRetweets: true,
    }
};

// Reducer function to handle all Twitter-related state changes
export default (state = initialState, action) => {
    switch (action.type) {
        // Handle tab changes
        case 'SET_TWITTER_TAB':
            return {
                ...state,
                tab: action.payload.tab,
            };

        // Handle search query updates
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload.query,
            };

        // Toggle tweet filters
        case 'TOGGLE_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.filterType]: action.payload.value,
                },
            };

        // Force refresh of tweet list
        case 'REFRESH_TWEETS':
            return {
                ...state,
                refreshKey: state.refreshKey + 1,
            };

        // Reset all Twitter state
        case 'UI_RESET':
            return {
                ...initialState,
            };

        // Return current state if action is not handled
        default:
            return state;
    }
};