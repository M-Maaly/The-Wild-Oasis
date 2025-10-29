import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookinks, confirmedStays, numDays, cabinCount }) {
  //  1. num of bookings
  const numBookings = bookinks.length;

  //    2. Sales
  const sales = bookinks.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //    3. num of Confirmed
  const checkins = confirmedStays.length;

  //   4. num of occupation (checked in nights / all available night (num of day * num of cabin))
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title={"Bookings"}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        color={"blue"}
      />
      <Stat
        title={"Sales"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        color={"green"}
      />
      <Stat
        title={"Check ins"}
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        color={"indigo"}
      />
      <Stat
        title={"Occupancy rate"}
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
        color={"yellow"}
      />
    </>
  );
}

export default Stats;
