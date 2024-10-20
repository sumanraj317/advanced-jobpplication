// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   jobs: [
//     { id: 1, title: 'Frontend Developer', company: 'Tech Corp', experience: 2 },
//     { id: 2, title: 'Backend Developer', company: 'Codebase', experience: 3 },
//   ],
// };

// const jobSlice = createSlice({
//   name: 'jobs',
//   initialState,
//   reducers: {
//     addJob: (state, action) => {
//       state.jobs.push(action.payload);
//     },
//     editJob: (state, action) => {
//       const { id, title, company, experience } = action.payload;
//       const jobIndex = state.jobs.findIndex((job) => job.id === id);
//       if (jobIndex !== -1) {
//         state.jobs[jobIndex] = { id, title, company, experience };
//       }
//     },
//     deleteJob: (state, action) => {
//       state.jobs = state.jobs.filter((job) => job.id !== action.payload);
//     },
//   },
// });

// export const { addJob, editJob, deleteJob } = jobSlice.actions;
// export default jobSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;  // Set jobs from Firebase
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    editJob: (state, action) => {
      const { id, title, company, experience } = action.payload;
      const jobIndex = state.jobs.findIndex((job) => job.id === id);
      if (jobIndex !== -1) {
        state.jobs[jobIndex] = { id, title, company, experience };
      }
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
  },
});

export const { setJobs, addJob, editJob, deleteJob } = jobSlice.actions;
export default jobSlice.reducer;
