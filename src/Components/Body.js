import { useEffect, useState } from "react";

import DashboardCards from "./DashboardCards";

const Body = () => {
  const [dashboard, setDashboard] = useState([]);

  async function getCardsData() {
    let data = await fetch("http://localhost:3000/users/shirts");
    let shirtsData = await data.json();
    setDashboard(shirtsData.data);
    console.log(shirtsData);
  }

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {dashboard.map((data) => {  
       return <DashboardCards key={data.id} {...data}/>;
      })}
    </div>
  );
};

export default Body;
