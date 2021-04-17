import moment from "moment";

moment.locale("br");

const ParseDate = (date) => {
  const splitedDate = date.split(" de ");

  const day = splitedDate[0];
  const month = moment().month(splitedDate[1]).format("M");
  const year = splitedDate[2];

  const formatedDate = new Date(`${year}-${month}-${day}`);
  
  return moment(formatedDate).format("YYYY-MM-DD");
};

export default ParseDate;
