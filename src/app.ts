import express, { Express, Router } from 'express';

export const buildApp = (apiRouter: Router): Express => express().use(apiRouter);
