import type { NextApiRequest, NextApiResponse } from "next";
import helloWorld from "@/defer/helloWorld";

type Data = {
  ok: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await helloWorld("Charly");
  res.status(200).json({ ok: true });
}
