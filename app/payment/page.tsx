"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan") || "basic";
  const amount = Number(searchParams.get("amount")) || 149;

  const [loading, setLoading] = useState(false);

  const planName =
    plan === "premium"
      ? "Premium"
      : plan === "standard"
      ? "Standard"
      : "Basic";

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Create Razorpay order
      const response = await fetch("/api/payment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.message || "Unable to create payment order");
        setLoading(false);
        return;
      }

      if (!window.Razorpay) {
        alert("Razorpay is loading. Please try again.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: "INR",

        name: "Netflix Clone",

        description: `${planName} Plan`,

        order_id: data.order.id,

        handler: function (paymentResponse: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          routerToSuccess(paymentResponse);
        },

        theme: {
          color: "#e50914",
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response);

        alert(
          response?.error?.description ||
            "Payment failed. Please try again."
        );

        setLoading(false);
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);

      alert("Something went wrong.");

      setLoading(false);
    }
  };

  const routerToSuccess = (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => {
    const query = new URLSearchParams({
      payment_id: response.razorpay_payment_id,
      order_id: response.razorpay_order_id,
      signature: response.razorpay_signature,
      plan,
      amount: String(amount),
    });

    window.location.href = `/payment/success?${query.toString()}`;
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <main className="payment-page">
        <div className="payment-card">

          <h1>Choose your plan</h1>

          <div className="selected-plan">
            <h2>{planName}</h2>

            <div className="price">
              ₹{amount}
            </div>

            <p>Netflix Clone Subscription</p>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : `Pay ₹${amount}`}
          </button>

        </div>
      </main>
    </>
  );
}