import { Response, Request } from 'express';

export const getProductRoute = (req: Request, res: Response): Response => res.sendStatus(200);
