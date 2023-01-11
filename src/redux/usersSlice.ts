/* eslint no-param-reassign: "error" */

import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AnyAction,
} from '@reduxjs/toolkit';

import { RootState } from './index';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UsersState = {
  users: User[];
  targetUser: null | number;
  error: string | null;
  isLoading?: boolean;
};

const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      return rejectWithValue('Error! Unable to load data :(');
    }
    const data = await response.json();
    return data;
  },
);

const initialState: UsersState = {
  users: [],
  targetUser: null,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // 2 reducers for sort
    setTargetUser: (state, { payload }: PayloadAction<number>) => {
      state.targetUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.error = null;
      })
      .addMatcher(
        (action: AnyAction): boolean => action.type.endsWith('rejected'),
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
        },
      );
  },
});

export { fetchUsers };
export const { setTargetUser } = usersSlice.actions;
export const charactersSelector = (state: RootState) => state.usersStore;
export default usersSlice.reducer;
