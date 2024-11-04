import { FOOD_DATA } from "@/constants/recipe-data";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { createContext } from "react";

export const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [foodData, setFoodData] = useState(FOOD_DATA);

  const updateFoodStatus = (id, status) => {
    setFoodData((prevData) =>
      prevData.map((food) =>
        food.id === id ? { ...food, status: status } : food
      )
    );
  };

  return (
    <StatusContext.Provider value={{ foodData, updateFoodStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
