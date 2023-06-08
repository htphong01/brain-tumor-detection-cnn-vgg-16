const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const adminRoutes = require('./admin');
const patientRoutes = require('./patient');
const testResultRoutes = require('./test-result');
const healthRecordRoutes = require('./health-record');
const employeeRoute = require('./employee');

const defaultRoutes = [
  {
    path: '/admin',
    routes: adminRoutes,
  },
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/patients',
    routes: patientRoutes
  },
  {
    path: '/health-records',
    routes: healthRecordRoutes
  },
  {
    path: '/test-results',
    routes: testResultRoutes
  },
  {
    path: '/employees',
    routes: employeeRoute
  },
];

defaultRoutes.forEach((item) => router.use(item.path, item.routes));

module.exports = router;
