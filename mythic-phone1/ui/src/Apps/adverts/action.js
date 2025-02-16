import Nui from '../../util/Nui';

// Action Types
export const YP_ACTIONS = {
    CREATE_ADVERT: 'YP_CREATE_ADVERT',
    UPDATE_ADVERT: 'YP_UPDATE_ADVERT',
    DELETE_ADVERT: 'YP_DELETE_ADVERT',
    BUMP_ADVERT: 'YP_BUMP_ADVERT',
    SET_LOADING: 'YP_SET_LOADING',
    SET_ERROR: 'YP_SET_ERROR'
};

// Action Creators
const setLoading = (isLoading) => ({
    type: YP_ACTIONS.SET_LOADING,
    payload: isLoading
});

const setError = (error) => ({
    type: YP_ACTIONS.SET_ERROR,
    payload: error
});

// Create Advertisement
export const CreateAdvert = (id, advert, cb) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await Nui.send('CreateAdvert', {
            ...advert,
            createdAt: Date.now(),
            lastUpdated: Date.now()
        });

        dispatch({
            type: YP_ACTIONS.CREATE_ADVERT,
            payload: response
        });

        if (cb) cb();
    } catch (err) {
        dispatch(setError('Failed to create advertisement'));
        console.error('Create advert error:', err);
    } finally {
        dispatch(setLoading(false));
    }
};

// Update Advertisement
export const UpdateAdvert = (id, advert, cb) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await Nui.send('UpdateAdvert', {
            ...advert,
            lastUpdated: Date.now()
        });

        dispatch({
            type: YP_ACTIONS.UPDATE_ADVERT,
            payload: response
        });

        if (cb) cb();
    } catch (err) {
        dispatch(setError('Failed to update advertisement'));
        console.error('Update advert error:', err);
    } finally {
        dispatch(setLoading(false));
    }
};

// Delete Advertisement
export const DeleteAdvert = (id, cb) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await Nui.send('DeleteAdvert', { id });

        dispatch({
            type: YP_ACTIONS.DELETE_ADVERT,
            payload: id
        });

        if (cb) cb();
    } catch (err) {
        dispatch(setError('Failed to delete advertisement'));
        console.error('Delete advert error:', err);
    } finally {
        dispatch(setLoading(false));
    }
};

// Bump Advertisement
export const BumpAdvert = (id, myAd, cb) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await Nui.send('UpdateAdvert', {
            ...myAd,
            time: Date.now(),
            bumpedAt: Date.now()
        });

        dispatch({
            type: YP_ACTIONS.BUMP_ADVERT,
            payload: response
        });

        if (cb) cb();
    } catch (err) {
        dispatch(setError('Failed to bump advertisement'));
        console.error('Bump advert error:', err);
        if (cb) cb(err);
    } finally {
        dispatch(setLoading(false));
    }
};

// Helper function to validate advertisement data
export const validateAdvertData = (advert) => {
    const errors = [];

    if (!advert.title || advert.title.trim().length === 0) {
        errors.push('Title is required');
    }

    if (!advert.short || advert.short.trim().length === 0) {
        errors.push('Short description is required');
    }

    if (!advert.categories || advert.categories.length === 0) {
        errors.push('At least one category is required');
    }

    if (advert.price && isNaN(Number(advert.price))) {
        errors.push('Price must be a valid number');
    }

    return errors;
};

// Initial state for the Yellow Pages reducer
export const initialState = {
    loading: false,
    error: null,
    adverts: {},
    categories: [],
    currentUserAd: null
};

// Reducer for Yellow Pages
export const yellowPagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case YP_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case YP_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };

        case YP_ACTIONS.CREATE_ADVERT:
            return {
                ...state,
                adverts: {
                    ...state.adverts,
                    [action.payload.id]: action.payload
                },
                error: null
            };

        case YP_ACTIONS.UPDATE_ADVERT:
            return {
                ...state,
                adverts: {
                    ...state.adverts,
                    [action.payload.id]: {
                        ...state.adverts[action.payload.id],
                        ...action.payload
                    }
                },
                error: null
            };

        case YP_ACTIONS.DELETE_ADVERT:
            const { [action.payload]: deletedAd, ...remainingAds } = state.adverts;
            return {
                ...state,
                adverts: remainingAds,
                error: null
            };

        case YP_ACTIONS.BUMP_ADVERT:
            return {
                ...state,
                adverts: {
                    ...state.adverts,
                    [action.payload.id]: {
                        ...state.adverts[action.payload.id],
                        time: action.payload.time,
                        bumpedAt: action.payload.bumpedAt
                    }
                },
                error: null
            };

        default:
            return state;
    }
};

export default yellowPagesReducer;