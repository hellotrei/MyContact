export const SET_CONTACT_LIST = 'SET_CONTACT_LIST';
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

/**
 * Set contact list
 * @param {Object} payload
 * @param {any[]} payload.data
 */
export const setContactList = (payload) => ({
  type: SET_CONTACT_LIST,
  payload,
});

/**
 * Add new contact
 * @param {Object} payload
 * @param {string} payload.id
 * @param {string} payload.firstName
 * @param {string} payload.lastName
 * @param {number} payload.age
 * @param {string} payload.photo
 */
export const addNewContact = (payload) => ({
  type: ADD_NEW_CONTACT,
  payload,
});

/**
 * Update contact
 * @param {Object} payload
 * @param {string} payload.id
 * @param {string} payload.firstName
 * @param {string} payload.lastName
 * @param {number} payload.age
 * @param {string} payload.photo
 */
export const updateContact = (payload) => ({
  type: UPDATE_CONTACT,
  payload,
});

/**
 * Delete contact
 * @param {Object} payload
 * @param {string} payload.id
 */
export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
