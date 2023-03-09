import { useEffect, useState } from "react";

import DashboardCards from "./DashboardCards";

const Body = () => {

  const [dashboard, setDashboard] = useState([]);
  const [filter,setFilterdata] =  useState() 


  async function getCardsData() {
    let data = await fetch("http://localhost:3000/users/shirts");
    let shirtsData = await data.json();
    setDashboard(shirtsData.data);
    setFilterdata(shirtsData.data);
  }

  useEffect(() => {
    getCardsData();
  }, []);

  

  return (
    <div className="flex flex-wrap justify-center">
      {dashboard.map((data) => {
        return <DashboardCards key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Body;
