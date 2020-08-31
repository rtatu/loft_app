export const header = [
  {
    id:1,
    label:'Safety Item',
    name:'safetyItem',
    style:'medium',
    type:'text'
  },
  {
    id:2,
    label:'Description',
    name:'description',
    style:'large',
    type:'multiline'
  },
  {
    id:3,
    label:'Mileage',
    name:'mileage',
    style:'small',
    type:'number'
  },
  {
    id:4,
    label:'Mileage Unit',
    name:'mileageUnit',
    style:'medium',
    type:'select',
    data:['KM','MILES']
  },
  {
    id:5,
    label:'Period',
    name:'period',
    style:'small',
    type:'number'
  },
  {
    id:6,
    label:'Period Unit',
    name:'periodUnit',
    style:'medium',
    type:'select',
    data:['DAYS','WEEKS','MONTHS','YEARS']
  },
  {
    id:7,
    label:'Text',
    name:'text',
    style:'medium',
    type:'text'
  },
  {
    id:8,
    label:'Affiliated With',
    name:'affiliatedWith',
    style:'medium',
    type:'select',
    data:['TRUCK','TRAILER','CHASIS','CONTAINER','DRIVER']
  },
]

export const newdata = {
  safetyItem: "",
  description: "",
  mileage: 0,
  mileageUnit: "KM",
  period: 0,
  periodUnit: "DAYS",
  text: "",
  affiliatedWith: "TRUCK",
};