import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "lib/prisma";
import * as nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, address, phoneNo, email, doctorId } = req.body;

  const fromEmail = "info@ridemcr.com";
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account");
      console.error(err);
      return process.exit(1);
    }

    console.log("Credentials obtained, sending message...");

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(
      {
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
        logger: true,
        transactionLog: true, // include SMTP traffic in the logs
        allowInternalNetworkInterfaces: false,
      },
      {
        // default message fields

        // sender info
        from: account.user,
      }
    );

    // Message object
    let message = {
      // Comma separated list of recipients
      to: email,

      // Subject of the message
      subject: "appointment booked",

      // plaintext body
      text: "appointment booked",

      // HTML body
      html: "appointment booked",
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log("Error occurred");
        console.log(error.message);
        return process.exit(1);
      }

      console.log("Message sent successfully!");
      console.log(nodemailer.getTestMessageUrl(info));

      // only needed when using pooled connections
      transporter.close();
    });
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
