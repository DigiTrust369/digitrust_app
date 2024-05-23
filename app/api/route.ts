import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import GOOGLE from "@/constants/google";

type SheetForm = {
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const body = req.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE.CLIENT_EMAIL,
        private_key: GOOGLE.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE.SHEET_ID,
      range: "A1:A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.email]],
      },
    });

    return res.status(201).json({
      data: response.data,
    });
  } catch (e) {
    return res.status(500).send({ message: "Something went wrong" });
  }
}
