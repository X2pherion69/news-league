import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51K1E77HP3V93TDTZbGfX5E5HpdKWRgE8qJ0igtYBMvrgozry53J9jQZufJkQX1pGRJURxRl7yJmgXdKssfX5laEq00ATHAepEY";
  const onToken = (token) => {
    alert("Payment Successul!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="League Shop Payment"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};
export default StripeCheckoutButton;
