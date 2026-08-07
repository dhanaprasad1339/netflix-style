import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userId,
      orderId,
      paymentId,
      amount,
      status,
      plan,
    } = body;

    // Required fields check
    if (!userId || !paymentId || !orderId) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing payment details",
        },
        { status: 400 }
      );
    }

    // Save payment in Firestore
    const paymentRef = await adminDb.collection("payments").add({
      userId,
      orderId,
      paymentId,
      amount: amount || 0,
      currency: "INR",
      status: status || "success",
      plan: plan || "Netflix Plan",
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "Payment saved successfully",
      paymentId: paymentRef.id,
    });
  } catch (error) {
    console.error("Payment Save Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save payment",
      },
      { status: 500 }
    );
  }
}