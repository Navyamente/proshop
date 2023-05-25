import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

const createTicket = asyncHandler(async (req, res) => {
  const user = { user: req._id };
  res.status(200).json({ message: "Ticket created successfully" });
});

const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});
  res.json({
    tickets: [
      { name: "ticket1", description: "ticket1 description" },
      { name: "ticket2", description: "ticket2 description" },
      { name: "ticket3", description: "ticket3 description" },
      { name: "ticket4", description: "ticket4 description" },
      { name: "ticket5", description: "ticket5 description" },
    ],
  });
});

export { getTickets, createTicket };
