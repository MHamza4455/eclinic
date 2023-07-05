import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "lib/prisma";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, address, phoneNo, email, doctorId } = req.body;

  const fromEmail = "info@ridemcr.com";

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: fromEmail,
      pass: "Saeed.1965",
    },
  });
  const info = await transporter.sendMail({
    from: fromEmail,
    to: "mugheesraza@protonmail.com",
    subject: "appointment",
    text: `appointment booked`,
    html: `appointment booked`,
  });

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
