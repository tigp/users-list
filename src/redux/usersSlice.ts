/* eslint no-param-reassign: "error" */

import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AnyAction,
} from '@reduxjs/toolkit';
import sortBy from 'sort-by';

import type { RootState } from './index';

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
  readOnlyForm?: boolean;
  isLoading?: boolean;
};

const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      return rejectWithValue('Error! Unable to load data :(');
    }

    return await response.json();
  },
);

const initialState: UsersState = {
  users: [],
  targetUser: null,
  error: null,
  readOnlyForm: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortByCity: (state): void => {
      state.users = state.users.sort(sortBy('address.city'));
    },
    sortByCompany: (state): void => {
      state.users = state.users.sort(sortBy('company.name'));
    },
    setTargetUser: (state, { payload }: PayloadAction<null | number>) => {
      state.targetUser = payload;
    },
    switchFormState: (state, { payload }: PayloadAction<boolean>) => {
      state.readOnlyForm = payload;
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
export const { sortByCity, sortByCompany, setTargetUser, switchFormState } =
  usersSlice.actions;
export const charactersSelector = (state: RootState) => state.usersStore;
export default usersSlice.reducer;
