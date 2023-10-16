import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({

  name: 'counter',
  
  initialState: initialState,
  
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
