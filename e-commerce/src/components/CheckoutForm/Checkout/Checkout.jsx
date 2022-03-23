import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                setCheckoutToken(token);
            } catch (error) {
                navigate('/');
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 10000);
    }

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      ) : isFinished ? (
          <>
            <div>
                <Typography variant="h5">Thank you for your purchase!</Typography>
                <br />
                <Typography variant="p">Your Transaction was completed with setTimeout function, since the card number you provided was invalid.</Typography>
                <br />
                <Typography variant="p">See you later!</Typography>
                <Divider className={classes.divider} />                
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>          
          </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));
    
      if (error) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
          </>
        );
      }

    const Form = () => (activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout} />);

    

  return (
    <>
    <CssBaseline />
        <div className={classes.toolbar} /> 
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </main>    
    </>
  )
}

export default Checkout