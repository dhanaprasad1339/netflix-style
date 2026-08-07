interface RazorpayOptions {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;

  handler?: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;

  theme?: {
    color?: string;
  };

  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;

  on: (
    event: string,
    callback: (response: any) => void
  ) => void;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

interface Window {
  Razorpay: RazorpayConstructor;
}