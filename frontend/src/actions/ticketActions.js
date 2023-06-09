import axios from "axios";
import {
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_LIST_FAIL,
  TICKET_DETAILS_REQUEST,
  TICKET_DETAILS_SUCCESS,
  TICKET_DETAILS_FAIL,
} from "../constants/ticketConstants";

export const listTickets = () => async (dispatch) => {
  try {
    dispatch({ type: TICKET_LIST_REQUEST });

    const { data } = await axios.get("/api/tickets");
    console.log(data);
    dispatch({
      type: TICKET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TICKET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTicketDetails = () => async (dispatch) => {
  try {
    dispatch({ type: TICKET_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/tickets`);

    dispatch({
      type: TICKET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TICKET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
