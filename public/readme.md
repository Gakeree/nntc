To integrate the **M-Pesa payment** functionality in your **React frontend**, follow these steps:

---

## **🛠️ Step 1: Update Your Frontend Code**
Modify your **React component** to allow users to enter their phone number and trigger the **STK push request**.

### **📌 Updated Payment Component (`Payment.js`)**
```jsx
import React, { useState } from "react";
import axios from "axios";

const Payment = ({ handlePrevious, handlePaymentSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePayment = async () => {
    if (!phoneNumber.match(/^2547\d{8}$/)) {
      setError("Enter a valid Safaricom phone number (e.g., 2547XXXXXXXX)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/payments/stk-push/", {
        phone_number: phoneNumber,
      });

      if (response.status === 200) {
        setPaymentConfirmed(true);
        handlePaymentSuccess(); // Callback to update parent state
      }
    } catch (err) {
      setError("Payment request failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-blue-600">Payment</h3>
      <p className="mb-4">Please complete the payment to finalize your application.</p>

      <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="2547XXXXXXXX"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        type="button"
        onClick={handlePayment}
        disabled={paymentConfirmed || loading}
        className={`mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition ${
          paymentConfirmed || loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : paymentConfirmed ? "Payment Confirmed" : "Pay with M-Pesa"}
      </button>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!paymentConfirmed}
          className={`bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition ${
            !paymentConfirmed ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Payment;
```

---

## **🛠️ Step 2: Add Backend Connection**
Ensure **CORS** is enabled on your Django backend to allow requests from React.

### **Enable CORS in Django**
Install CORS middleware:

```sh
pip install django-cors-headers
```

Add it to `settings.py`:

```python
INSTALLED_APPS = [
    ...
    "corsheaders",
    "rest_framework",
]

MIDDLEWARE = [
    ...
    "corsheaders.middleware.CorsMiddleware",
    ...
]

CORS_ALLOW_ALL_ORIGINS = True  # Allow all origins for development
```

Restart your server:

```sh
python manage.py runserver
```

---

## **🛠️ Step 3: Test in Frontend**
1. Enter a valid Safaricom number (e.g., **254712345678**).
2. Click **"Pay with M-Pesa"**.
3. Check if you receive an **STK push request** on your phone.
4. After payment, the button should show **"Payment Confirmed"**.

---

### **🚀 Now Your React Frontend is Integrated with M-Pesa!**
Let me know if you need any modifications! 💯🔥