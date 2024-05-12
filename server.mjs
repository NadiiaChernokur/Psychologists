// import express from 'express';
// // const express = require('express');
// import morgan from 'morgan';
// import cors from 'cors';
// import contactsRouter from './routes/contactsRouter.js';
// import usersRouter from './routes/usersRouters.js';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { avatarsDir } from './helpers/upload.js';

// dotenv.config();
// const { apiKey } = process.env;
// console.log(apiKey);
// export const go = () => {
//   console.log(apiKey);
// };
// mongoose
//   .connect(apiKey)
//   .then(() => {
//     app.listen(3000);
//     console.log('Database connection successful');
//   })
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   });

// const app = express();
// app.use('/', express.static(avatarsDir));
// app.use(morgan('tiny'));
// app.use(cors());
// app.use(express.json());
// app.use('/', usersRouter);
// app.use('/', contactsRouter);

// app.use((_, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//   if (err.message.includes('E11000')) {
//     console.log(err.message);
//     return res.status(409).json({ Messege: 'Email in use' });
//   }
//   const { status = 500, message = 'Server error' } = err;
//   res.status(status).json({ message });
// });
