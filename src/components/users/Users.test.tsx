import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from 'tests/helpers';
import { User } from './types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
  },
  {
    id: 2,
    name: 'Ervin Howell',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
  },
];

describe('Users test', () => {
  let response: Promise<AxiosResponse<User[]>>;
  beforeEach(async () => {
    response = new Promise((resolve) => {
      resolve({
        data: mockData,
        status: 200,
        statusText: 'Ok',
        config: {
          headers: {} as AxiosRequestHeaders,
        },
        headers: {},
      });
    });

    mockedAxios.get.mockReturnValue(response);

    await act(async () => renderWithRouter({ initialEntry: '/users' }));
  });

  test('users fetch', async () => {
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  test('users count', async () => {
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(mockData.length);
  });

  test('user link', async () => {
    const userLinks = await screen.findAllByTestId('user-link');
    await userEvent.click(userLinks[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
