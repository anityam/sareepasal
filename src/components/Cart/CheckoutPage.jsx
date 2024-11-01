'use client'
import React,{useEffect,useState} from 'react'; 
import {
    useStripe,
    useElements,
    PaymentElement,
} from '@stripe/react-stripe-js'
import convertToCents from '@/utils/convertToCents';
import { redirect } from 'next/navigation'

const CheckoutElement = (amount) => {
    const stripe = useStripe();
    const paymentElementOptions = {
        type: 'accordion',
        defaultCollapsed: false,
        radios: true,
        spacedAccordionItems: false
        };
    console.log(amount.amount)
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetch("/api/payment",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({amount: convertToCents(amount.amount)})
        })
        .then((res)=> res.json())
        .then((data)=> setClientSecret(data.clientSecret))
    },[amount.amount])

    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      if (!stripe || !elements) {
        return;
      }
      const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: redirect(`/Success?amount=${amount.amount}`),
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      redirect(`/Success?amount=${amount.amount}`)
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
    return(
        <form onSubmit={handleSubmit} class="bg-white p-2 rounded-md">
            <input
          id="email"
          type="text"
          class="border p-3"
          placeholder="Enter email address"
        />
            {clientSecret && <PaymentElement class="dark:text-white" options={paymentElementOptions}/>}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 my-2 px-5 rounded-lg ">Pay {amount.amount}</button>
        </form>
    )
}

export default CheckoutElement