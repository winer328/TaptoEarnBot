// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   tasklist: [],
// };
// const api = "http://127.0.0.1:5000/api";

// export const taskSlice = createSlice({
//   name: "reducer",
//   initialState,
//   reducers: {
//     fetchTasks: async (state) => {
//       try {
//         const response = await axios.get(`${api}/task`);
//         console.log(response.data, "sssssssssssssssss");
//         state.tasklist = response.data;
//         console.log(state.tasklist);
//         return state;
//         console.log("success!", response);
//       } catch (err) {
//         console.error(err);
//       }
//       // state.tasklist = [...]
//     },
//     createTask: async (state, action) => {
//       try {
//         const response = await axios.post(`${api}/task`, action.payload, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         console.log("success!", state.tasklist);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//   },
// });

// export const { createTask, fetchTasks } = taskSlice.actions;
// export default taskSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasklist: [],
};

const api = "http://127.0.0.1:5000/api";

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  try {
    const response = await axios.get(`${api}/task`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskData) => {
    try {
      const response = await axios.post(`${api}/task`, taskData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasklist = action.payload;
    });
  },
});

export default taskSlice.reducer;
