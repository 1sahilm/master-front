import styles from "./Cart.module.scss";
import CartItems from "../../components/utils/CartItems";
import Navbar from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Link from "next/link";
import Contactform from '../../components/contact/Contactform';

//actions
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import axios from "axios";
import router from "next/router";

function Cart({ session }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  const qtyHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  let cartArray = [];

  cartItems.map((item) => {
    let data = {
      quantity: item.qty,
      name: item.name,
      images: [item.images],
      amount: Math.round(item.price * 100),
      currency: "usd",
    };

    cartArray.push(data);
  });

  console.log(cartArray);

  const redirectToCheckout = async () => {
    const { data } = await axios.post("/api/checkout", {
      items: cartArray,
    });

    console.log(data);

    if (data) {
      await router.push(data.url);
    }
  };
  return (
    <div>
      
      <Navbar session={session} />
      
      <div className="container text-center mt-8 mb-6 cart-heading">
        <h1>Your basket and service options</h1>

      </div>
      <div className="container-fluid" style={{background:"rgb(243, 243, 248)"}}>
      <div  className="container "  >
        <div className="row">
          <div className="col-md-7 mt-6 first-boxcart">
          <Contactform/>
          <br/>
            <h5>Services recommended for you</h5>
            <br/>
            <div className="bg-white boxfirst-cart">
              <h4>Mattress and bed frame recycling service</h4> <br/>
              <p>For peace of mind, add this to your order today – we’ll collect and recycle your old bed during the delivery of your new bed.</p>
              <ul className="boxfirst-cartul">
                <li>All recyclable materials are reused, and waste is turned into green energy</li>
                <li>Ensure you have dismantled any furniture items prior to delivery</li>
                <li> We’ll provide you with a green bag to wrap your item in before delivery</li>
                <li>All recyclable materials are reused, and waste is turned into green energy</li>
              </ul>

            </div>
<br/>
            <div className="bg-white boxfirst-cart">
              <h4>Bed frame assembly</h4> <br/>
              <p>Fancy sitting back and relaxing while we assemble your new bed?</p>
              <ul className="boxfirst-cartul">
                <li>Our team are fully trained in bed building</li>
                <li>
We offer a quick and tidy service – all packaging is taken away
</li>
               
              </ul>

            </div>
            <br/>
            <div className="bg-white boxfirst-cart mb-6">
              <h4>Bedcover service plan</h4> <br/>
              <p>Be rest assured by adding insurance to your purchase. We’ll then provide:</p>
              <ul className="boxfirst-cartul">
                <li>Structural defect cover for 8 years*</li>
                <li>
                Accidental cosmetic damage cover for 5 years
</li>
<li>A FREE mattress protector with each mattress added to the service plan

</li>
               
              </ul>

            </div>

          </div>

          
          
          <div className="col-md-5 mt-6">
          {cartItems.length === 0 ? (
            <div
              style={{
                width: "100%",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="cart-product"
            >
              {" "}
              Your Cart Is Empty
              <div className="shopping-page">
                <Link href="/product/divanbed">Continue Shopping</Link>
              </div>
            </div>
            
          ) : (
            
            
            <>
              
              <p style={{color:"#0e3f70",fontWeight:"700",fontSize:"20px"}}>
                My Bag <span style={{color:"rgb(0 178 189)"}}> {cartItems.length}</span> item (s)
              </p>
              {cartItems.map((item) => {
                console.log(item);
                return (
                  <>
                    <CartItems
                      item={item}
                      removeFromCartHandler={removeFromCartHandler}
                       qtyHandler={qtyHandler}
                    />
                  </>
                );
              })}
            </>
          )}
        
        { cartItems.length ? <div className="mt-8 cart-scndbox">
          <div  >
            {console.log(cartItems)}
            <div className="cart-priceh">
              <p>Price Summary </p>
            </div>
            <div className={styles.price}>
              <p>Total MRP (Incl. of taxes) </p>
              <p>
                {cartItems.length === 0 ? (
                  <div> £0 </div>
                ) : (
                  <>£{getSubTotal().toFixed(2)}</>
                )}
              </p>
            </div>
            <div className={styles.price}>
              <p>Delivery Fee </p>
              <p>FREE</p>
            </div>
            <div className={styles.price}>
              <p>Bag Discount </p>
              <p>£ 1024</p>
            </div>
            <div className={styles.price}>
              <p>Subtotal </p>
              <p>£ {getSubTotal().toFixed(2)}</p>
            </div>
            <p className="cart-savebtn">
              You are saving £ 3090 on this order
            </p>

            <div className={styles.finalCheckout}>
              <div className={styles.text}>
                <p>Total</p>
                <p>£{getSubTotal().toFixed(2)}</p>
              </div>
              <div>
                <button onClick={redirectToCheckout}>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
 :null}
        

        </div>
        </div>

      </div>
      </div>
      

      <div className={styles.mobile}>
        <div className={styles.finalCheckouts}>
          <div className={styles.text}>
            <p>Total</p>
            <p>£{getSubTotal().toFixed(2)}</p>
          </div>
          <div>
            <button onClick={redirectToCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <br/>
     
      <Footer/>
    </div>
    
  );
}

export default Cart;
