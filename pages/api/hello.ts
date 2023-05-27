import { Handler } from "@/handler";

type ResponseData = {
  message: string;
};

const handler: Handler<ResponseData> = (req, res) => {
  res.status(200).json({ message: "Hello from Next.js!" });
};

export default handler;
