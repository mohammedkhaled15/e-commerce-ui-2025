"use client";

import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { CartItemsType, ShippingFormInputs } from "@repo/types";
import useCartStore from "@/stores/cartStore";
const stripe = loadStripe(
  "pk_test_51MZZ73DGrKqTRj4p9kiAh7cmqKaX3F5XYDs5fLHywXbjhAj6wAIYfkJbGnWrymYTEzlwW2m85DVxMQLuU5KJFxJW00Gv60GYRa"
);


const StripePaymentForm = ({
  shippingForm,
}: {
  shippingForm: ShippingFormInputs;
}) => {
  const { cart } = useCartStore();
  const [token, setToken] = useState<string | null>(null);
  const { getToken } = useAuth();
  const clientSecretPromiseRef = useRef<Promise<string> | null>(null);

  useEffect(() => {
    getToken().then((token) => setToken(token));
  }, []);

  if (token && !clientSecretPromiseRef.current) {
    clientSecretPromiseRef.current = (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRIPE_PAYMENT_SERVICE}/sessions/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cart }),
        }
      );

      const data = await res.json();

      if (!data.checkoutSessionClientSecret) {
        throw new Error("Missing checkoutSessionClientSecret");
      }

      return data.checkoutSessionClientSecret;
    })();
  }

  if (!token || !clientSecretPromiseRef.current) {
    return <div>Loading . . .</div>;
  }

  return (
    <CheckoutProvider
      stripe={stripe}
      options={{ clientSecret: clientSecretPromiseRef.current }}
    >
      <CheckoutForm shippingForm={shippingForm} />
    </CheckoutProvider>
  );
};

export default StripePaymentForm;
