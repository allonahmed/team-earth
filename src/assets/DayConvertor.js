import dayjs from "dayjs";

// converts utc to formated date
const DayConvertor = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export default DayConvertor;
