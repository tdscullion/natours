/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HTnBwFdrNtowPBaMVxk5CwakePtKwLOzT9Twha8a2t6Fb4RQOIfhmxwWu15Acji5cIE1q9ltuL4SbVQqmSNMp6W00qpthqRde'
);

export const bookTour = async (tourId) => {
  try {
    // 1, Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2, Create checkout form and charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
