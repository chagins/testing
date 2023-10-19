import { render, screen, fireEvent } from '@testing-library/react';
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { User } from './types';
import { Users } from './Users';

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
  beforeEach(() => {
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
  });

  test('1', async () => {
    mockedAxios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(mockData.length);
    expect(mockedAxios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
