import logo from './logo.svg';
import './App.css';
import PriceCard from './pricecard';

function App() {
  let pricelist=[
    { 
      Plan :"Free",
      price:20,
      currency:"$",
      period:"month",
      features: [
        
        {
          name :"Single User",
          enable :true
        },
        {
          name :"5GB Storage",
          enable :true
        },
        {
          name :"Unlimited public prpject",
          enable :false
        },
        {
          name :" community Access",
          enable :true
        },
        {
          name :"Dedicated phone support",
          enable :false
        },
        {
          name :"Free Subdomain",
          enable :false
        },       
        {
          name :"monthly status Reports",
          enable :false
        },

      ]

    },
    { 
      Plan :"online",
      price:200,
      currency:"$",
      period:"month",
      features: [
        
        {
          name :"Single User",
          enable :true
        },
        {
          name :"50GB Storage",
          enable :true
        },
        {
          name :"Unlimited public prpject",
          enable :false
        },
        {
          name :" community Access",
          enable :true
        },
        {
          name :"Dedicated phone support",
          enable :false
        },
        {
          name :"Free Subdomain",
          enable :false
        },       
        {
          name :"monthly status Reports",
          enable :false
        },

      ]
    

    },
    { 
      Plan :"pro",
      price:2000,
      currency:"$",
      period:"month",
      features: [
        
        {
          name :"Single User",
          enable :true
        },
        {
          name :"500GB Storage",
          enable :true
        },
        {
          name :"Unlimited public prpject",
          enable :false
        },
        {
          name :" community Access",
          enable :true
        },
        {
          name :"Dedicated phone support",
          enable :false
        },
        {
          name :"Free Subdomain",
          enable :false
        },       
        {
          name :"monthly status Reports",
          enable :false
        },

      ]
    

    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
      <div class="row">
        <PriceCard data={pricelist[0]}></PriceCard>
        <PriceCard data={pricelist[1]}></PriceCard>
        <PriceCard data={pricelist[2]}></PriceCard>

       
      </div>
      </div>
    </section>
    
    
    
  );
}

export default App;
