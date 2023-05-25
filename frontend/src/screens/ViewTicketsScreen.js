import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTickets } from "../actions/ticketActions";

const ViewTicketsScreen = () => {
  const dispatch = useDispatch();

  const ticketList = useSelector((state) => state.ticketList);
  const { loading, error, tickets } = ticketList;
  console.log(tickets);

  useEffect(() => {
    dispatch(listTickets());
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-blue-50 max-w-xl mx-auto my-10 shadow-md p-10 space-y-8">
      <div className="space-y-2">
        {tickets &&
          tickets.map((ticket, index) => {
            <div className="text-black">
              <p>{ticket.title}</p>
              <p>{ticket.description}</p>
              <p>Navya</p>
            </div>;
          })}
      </div>
    </div>
  );
};

export default ViewTicketsScreen;
