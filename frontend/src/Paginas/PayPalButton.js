import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ total }) => {
  return (
    <PayPalScriptProvider options={{  }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
         
          console.log("Pago aprobado:", data);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
