import React from "react";
import Product from "../Products/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="123456"
          title="Larn startUp basic information: how to invest money correctly"
          price={11.96}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
          }
        />
        <Product
          id="123456"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={11.96}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          }
        />
      </div>
      <div className="home_row">
        <Product
          id="123456"
          title="Create your own Apple Watch Series 6 (GPS + Cellular) style in the Apple Watch Studio. Buy now with a trade-in, monthly financing."
          price={199.96}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
        />
        <Product
          id="123456"
          title="Best Speaker For iPhone: Sonos Move · Best Voice Assistant Speaker For iPhone: Apple HomePod mini "
          price={18.96}
          rating={4}
          image={
            "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
          }
        />
        <Product
          id="123456"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={499.96}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          }
          
        />
      </div>
      <div className='home_row last'>
        <Product
            id="123456"
            title="Explore TV models ranging 8K & 4K QLED, The Frame, 4K UHD and more with curved & flat screens. Find the ultimate voice-enabled Samsung Smart TV for you."
            price={310.96}
            rating={5}
            
            image1={
              "https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua43tu8000uxtw-frontblack-229856295?$720_576_PNG$"
            }
            
          />
      </div>
    </div>
  );
};

export default Home;
