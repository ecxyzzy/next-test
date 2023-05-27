import { NextApiRequest, NextApiResponse } from "next";

export type Handler<T> = (req: NextApiRequest, res: NextApiResponse<T>) => void;
