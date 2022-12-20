import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function PaymentScreen() {
  const [selectedPayment, setSelectedPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPayment) {
      return toast.error('Please select a payment method');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPayment });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPayment,
      })
    );
    router.push('/placeorder');
  };
  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod, router, shippingAddress.address]);
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              type="radio"
              id={payment}
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              checked={selectedPayment === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            type="button"
            className="default-button"
            onClick={() => router.push('/shipping')}
          >
            Back
          </button>
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}
