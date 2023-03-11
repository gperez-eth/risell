import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

export function generateCountdown(endTime: string) {
  const targetDate = dayjs(endTime).utc();
  const now = dayjs().utc();
  const diff = targetDate.diff(now);
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const finalTime = hours + "h : " + minutes + "m : " + seconds + "s";
  return finalTime;
}
