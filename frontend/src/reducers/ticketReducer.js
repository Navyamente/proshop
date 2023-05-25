import {
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_LIST_FAIL,
  TICKET_DETAILS_REQUEST,
  TICKET_DETAILS_SUCCESS,
  TICKET_DETAILS_FAIL,
} from "../constants/ticketConstants";

export const ticketListReducer = (state = { tickets: [] }, action) => {
  switch (action.type) {
    case TICKET_LIST_REQUEST:
      return { loading: true };
    case TICKET_LIST_SUCCESS:
      return { loading: false, tickets: action.payload.tickets };
    case TICKET_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ticketDetailsReducer = (state = { tickets: {} }, action) => {
  switch (action.type) {
    case TICKET_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TICKET_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case TICKET_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
