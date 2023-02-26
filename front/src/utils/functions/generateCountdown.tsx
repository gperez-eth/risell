import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import React, { useMemo, useState } from "react";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

export function generateCountdown(endTime: string) {
  const targetDate = dayjs(endTime).utc();
  const now = dayjs().utc();
  const duration = dayjs.duration(targetDate.diff(now));
  var seconds = duration.seconds().toString();
  var minutes = duration.minutes().toString();
  var hours = duration.hours().toString();
  const finalTime = hours + "h : " + minutes + "m : " + seconds + "s";
  return finalTime;
}
