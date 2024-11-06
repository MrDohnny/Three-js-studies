// pages/api/characters.ts
import type { NextApiRequest, NextApiResponse } from "next";
import characters from "../../data/characters.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { workId } = req.query;
  const filteredCharacters = characters.filter(
    (char) => char.workId === workId
  );
  res.status(200).json(filteredCharacters);
}
