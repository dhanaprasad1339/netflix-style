"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();

  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: "500px",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            marginBottom: "10px",
          }}
        >
          Payment Successful!
        </h1>

        <p>
          Your Razorpay test payment was verified successfully.
        </p>

        {paymentId && (
          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              background: "#f7f7f7",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <strong>Payment ID</strong>

            <p
              style={{
                wordBreak: "break-all",
                fontSize: "14px",
              }}
            >
              {paymentId}
            </p>

            <strong>Order ID</strong>

            <p
              style={{
                wordBreak: "break-all",
                fontSize: "14px",
              }}
            >
              {orderId}
            </p>
          </div>
        )}

        <button
          onClick={() => {
            window.location.href = "/payment";
          }}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            background: "#3399cc",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back to Payment
        </button>
      </div>
    </main>
  );
}