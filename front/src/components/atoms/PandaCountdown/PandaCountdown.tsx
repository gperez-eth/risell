import React, { useState, useEffect } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import dayjs from "dayjs";

type PandaCountdownProps = {
  auctionEndTime: string;
  style?: StyleProp<TextStyle>;
};

function PandaCountdown({ ...props }: PandaCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTimeLeft() {
    const now = dayjs();
    const endTime = dayjs(props.auctionEndTime).utc();
    const diffSeconds = endTime.diff(now, "second");
    return diffSeconds >= 0 ? diffSeconds : 0;
  }

  function formatTimeLeft() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return `${hoursStr}h : ${minutesStr}m : ${secondsStr}s`;
  }

  return (
    <Text style={props.style ? props.style : styles.countdown}>
      {timeLeft > 0 ? `${formatTimeLeft()}` : "Auction ended!"}
    </Text>
  );
}

export default PandaCountdown;

const styles = StyleSheet.create({
  countdown: {},
});
