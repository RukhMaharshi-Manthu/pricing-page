import React from "react";
import { Card } from "./components/Card";
import "./styles.css";

const PLANS = [
  {
    id:"1",
    title: "FREE",
    planInfos: ["Single User",
     " 5GB Storage",
      "Unlimited Public Projects",
     " Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"],
    price: "$0",
    rytmark:"&#x2714;",
    btnText: "BUTTON"
  },
  {
    id:"2",
    title: "PLUS",
    planInfos: ["5 Users",
      "50GB Storage",
     "Unlimited Public Projects",
    " Community Access",
     "Unlimited Private Projects",
     "Dedicated Phone Support",
     "Free Subdomain",
     "Monthly Status Reports"],
    price: "$9",
  
    btnText: "BUTTON"
  },
  {
    id:"3",
    title: "PRO",
    planInfos: ["Unlimited Users",
    "150GB Storage",
      "Unlimited Public Projects",
     " Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"],
    price: "$49",
    
    btnText: "BUTTON"
  }
];


export default function App() {
  return (
    <div className="App">
      {PLANS.map((plan) => (
        <Card {...plan} />
      ))}
     
    </div>
  );
}
