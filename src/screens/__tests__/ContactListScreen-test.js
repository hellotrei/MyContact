import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from '../../stores';
import {Api} from '../../services';
import ContactListScreen from '../ContactListScreen';

jest.mock('../../services');

describe('ContactList', () => {
  let useEffect;
  let navigation;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  const store = configureStore();

  beforeEach(() => {
    Platform.OS = 'android';

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    Api.fetchAllContact.mockResolvedValue({
      data: {
        data: [
          {
            id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
            firstName: 'Bilbo',
            lastName: 'Baggins',
            age: 111,
            photo:
              'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
          },
        ],
      },
    });

    navigation = {
      navigate: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('loads all contacts on start', async () => {
    const component = (
      <Provider store={store}>
        <ContactListScreen navigation={navigation} />
      </Provider>
    );

    const {getByTestId} = render(component);
    await waitFor(() => getByTestId('contact-list'));
    expect(Api.fetchAllContact).toBeCalled();
  });

  it('loads render all contacts on start', async () => {
    const component = (
      <Provider store={store}>
        <ContactListScreen navigation={navigation} />
      </Provider>
    );

    const {getByTestId} = render(component);
    const contactList = await waitFor(() => getByTestId('contact-list'));
    expect(contactList.props.data).toHaveLength(1);
  });

  it('handle button ContactUpdate correctly', async () => {
    const component = (
      <Provider store={store}>
        <ContactListScreen navigation={navigation} />
      </Provider>
    );

    const {getByTestId} = render(component);

    const addContactbutton = await waitFor(() =>
      getByTestId('action-add-contact-button'),
    );

    fireEvent.press(addContactbutton);
    expect(navigation.navigate).toBeCalledWith('ContactUpdate');
  });

  it('render correctly', async () => {
    const component = (
      <Provider store={store}>
        <ContactListScreen navigation={navigation} />
      </Provider>
    );

    const {getByTestId, toJSON} = render(component);
    await waitFor(() => getByTestId('contact-list'));
    expect(toJSON()).toMatchSnapshot();
  });

  it('handle press listItem correctly', async () => {
    const component = (
      <Provider store={store}>
        <ContactListScreen navigation={navigation} />
      </Provider>
    );

    const {getByTestId} = render(component);
    const contactList = await waitFor(() => getByTestId('contact-list'));

    const contactListItem = contactList.findByProps({
      testID: 'contact-list-item-button',
    });
    fireEvent.press(contactListItem);
    expect(navigation.navigate).toBeCalledWith(
      'ContactDetail',
      expect.objectContaining({
        id: expect.any(String),
      }),
    );
  });
});
