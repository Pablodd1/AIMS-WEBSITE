import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  domain: 'https://www.aimedicalscriber.com/',
  language: localStorage.getItem('language') || 'en',
  openSignIn: false,
  openBooking: false,
  syncing: false,
  popup: false,
  syncStatus: 'info',
  error: '',
  bookingDate: null,
};

// Define action types
const ActionTypes = {
  SET_Domain: 'SET_Domain',
  SET_USER: 'SET_USER',
  SET_SIGNIN: 'SET_SIGNIN',
  SET_BOOKING: 'SET_BOOKING',
  SET_BOOKINGDATE: 'SET_BOOKINGDATE',
  SET_ERROR: 'SET_ERROR',
  SET_SYNCING: 'SET_SYNCING',
  SET_SYNCSTATUS: 'SET_SYNCSTATUS',
  SET_POPUP: 'SET_POPUP',
  SET_LANG: 'SET_LANG',
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_Domain:
      return {
        ...state,
        domain: action.payload,
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.SET_SIGNIN:
      return {
        ...state,
        openSignIn: action.payload,
      };
    case ActionTypes.SET_BOOKING:
      return {
        ...state,
        openBooking: action.payload,
      };
    case ActionTypes.SET_BOOKINGDATE:
      return {
        ...state,
        bookingDate: action.payload,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.SET_SYNCING:
      return {
        ...state,
        syncing: action.payload,
      };
    case ActionTypes.SET_SYNCSTATUS:
      return {
        ...state,
        syncStatus: action.payload,
      };
    case ActionTypes.SET_POPUP:
      return {
        ...state,
        popup: action.payload,
      };
    case ActionTypes.SET_LANG:
      localStorage.setItem('language', action.payload);
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
