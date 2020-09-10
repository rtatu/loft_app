import Fields from "../FormFields";
import { formatDate } from "../../../utils/data_functions";

const Odometer = {
  General: [
    {
      label: "Old Reading",
      name: "odometer",
      component: Fields.Text,
      disabled: true,
    },
    {
      label: "Old Reading Date",
      name: "odometerDate",
      component: Fields.Date,
      disabled: true,
    },
    {
      label: "New Reading",
      name: "odometerNew",
      component: Fields.Text,
    },
    {
      label: "Reading Unit",
      name: "odometerUnit",
      component: Fields.Select,
      data: ["KM", "MILES"],
      readOnly: true,
      defaultValue: "MILES"
    },
    {
      label: "New Reading Date",
      name: "odometerDateNew",
      component: Fields.Date,
      max:formatDate(new Date()),
    },
  ],
};

export default Odometer;
