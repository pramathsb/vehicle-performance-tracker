import React from "react";
import Vpt from "./layouts/main";

class App extends React.Component {
  state = {
    car: {
      carData: {
        brand: "Hyundai",
        model: "i10 Grand Nios",
        type: "Car",
        fuelType: "Diesel",
        fuel: "48 litres",
        ratedMileage: "25 Km/l",
        actualMileage: "20 Km/l",
        topSpeed: "110 km/h",
        age: "",
        dateOfPurchase: "2/9/2020",
      },
      odoData: [
        {
          id: 0,
          date: "9/2/2020",
          odo: 0,
          fuelPrice: 0,
          quantiyRs: 0,
          quantiyLtrs: 10,
          // prevCapactiy: 0,
        },
        {
          id: 1,
          date: "9/2/2020",
          odo: 20,
          fuelPrice: 68.3,
          quantiyRs: 1000,
          quantiyLtrs: 14.64,
          // prevCapactiy: 5,
        },
        {
          id: 2,
          date: "19/2/2020",
          odo: 176,
          fuelPrice: 67.55,
          quantiyRs: 2921,
          quantiyLtrs: 43.23,
          // prevCapactiy: 20,
        },
        {
          id: 3,
          date: "06/05/2020",
          odo: 840,
          fuelPrice: 66.75,
          quantiyRs: 1799,
          quantiyLtrs: 26.96,
          // prevCapactiy: 20,
        },
        {
          id: 4,
          date: "10/06/2020",
          odo: 1631,
          fuelPrice: 68.95,
          quantiyRs: 2825.57,
          quantiyLtrs: 40.98,
          // prevCapactiy: 5,
        },
        {
          id: 5,
          date: "03/07/2020",
          odo: 2407,
          fuelPrice: 77.7,
          quantiyRs: 3073.81,
          quantiyLtrs: 39.56,
          // prevCapactiy: 6,
        },
        {
          id: 6,
          date: "08/09/2020",
          odo: 3185,
          fuelPrice: 78.65,
          quantiyRs: 3383.52,
          quantiyLtrs: 43.02,
          // prevCapactiy: 6,
        },
        {
          id: 7,
          date: "02/10/2020",
          odo: 3952,
          fuelPrice: 76,
          quantiyRs: 3383.52,
          quantiyLtrs: 43.8,
          // prevCapactiy: 6,
        },
        {
          id: 8,
          date: "07/12/2020",
          odo: 4793,
          fuelPrice: 78.8,
          quantiyRs: 3500.3,
          quantiyLtrs: 44.42,
          // prevCapactiy: 6,
        },
        {
          id: 9,
          date: "25/12/2020",
          odo: 5405,
          fuelPrice: 78.41,
          quantiyRs: 2486.38,
          quantiyLtrs: 31.71,
          // prevCapactiy: 6,
        },
        {
          id: 10,
          date: "07/01/2021",
          odo: 6277,
          fuelPrice: 79.5,
          quantiyRs: 3121.7,
          quantiyLtrs: 39.26,
          // prevCapactiy: 6,
        },
        {
          id: 11,
          date: "24/02/2021",
          odo: 6855,
          fuelPrice: 87.1,
          quantiyRs: 3500.55,
          quantiyLtrs: 40.19,
          // prevCapactiy: 6,
        },
        {
          id: 12,
          date: "14/03/2021",
          odo: 7630,
          fuelPrice: 87.1,
          quantiyRs: 3399.5,
          quantiyLtrs: 39.03,
          // prevCapactiy: 6,
        },
        {
          id: 13,
          date: "02/04/2021",
          odo: 8341,
          fuelPrice: 87.2,
          quantiyRs: 3401.7,
          quantiyLtrs: 39.01,
          // prevCapactiy: 6,
        },
        {
          id: 14,
          date: "02/04/2021",
          odo: 9086,
          fuelPrice: 86.5,
          quantiyRs: 3200.5,
          quantiyLtrs: 37.0,
          // prevCapactiy: 6,
        },
      ],
    },
  };

  render() {
    return <Vpt state={this.state} />;
  }
}

export default App;
