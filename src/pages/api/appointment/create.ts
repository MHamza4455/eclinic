import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, address, phoneNo, email, doctorId } = req.body;

  try {
    await prisma.bookAppoinment.create({
      data: {
        name,
        address,
        phoneNo,
        email,
        doctorId: parseInt(doctorId), // Convert to an integer
      },
    });

    res.status(200).json({ message: "Appointment Created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create appointment" });
  }
}
