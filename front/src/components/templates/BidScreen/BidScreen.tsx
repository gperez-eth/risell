import { PandaText, PandaView } from "@components/Themed";
import { PandaAvatar, PandaIcon } from "@components/atoms";
import { PandaButton } from "@components/atoms/PandaButton/PandaButton";
import PandaCountdown from "@components/atoms/PandaCountdown/PandaCountdown";
import { PandaProductHeader } from "@components/molecules";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import Colors from "@utils/constants/Colors";
import { ICONS } from "@utils/constants/Icons";
import { calculateMinimumBidPrice } from "@utils/functions/calculateMinBidAmount";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CurrencyInput from "react-native-currency-input";

type BidScreenProps = {
  image: string;
  name: string;
  avatar: string;
  username: string;
  auctionTime: string;
  highestBid: number;
  currencyCode: string;
  currencySymbol: string;
};

export function BidScreen({ ...props }: BidScreenProps) {
  const [value, setValue] = useState(0);
  const [isValidBid, setIsValidBid] = useState(false);

  const onChangeBidValue = (value) => {
    setValue(value);
    value >= calculateMinimumBidPrice(props.highestBid / 100)
      ? setIsValidBid(true)
      : setIsValidBid(false);
  };

  useEffect(() => {
    value >= calculateMinimumBidPrice(props.highestBid / 100)
      ? setIsValidBid(true)
      : setIsValidBid(false);
  }, [props.highestBid]);

  return (
    <View style={styles.container}>
      <PandaProductHeader
        avatar={props.avatar}
        image={props.image}
        name={props.name}
        username={props.username}
      />
      <View style={styles.amountContainer}>
        <View style={styles.inputContainer}>
          <CurrencyInput
            value={value}
            onChangeValue={onChangeBidValue}
            renderTextInput={(textInputProps) => (
              <BottomSheetTextInput {...textInputProps} />
            )}
            prefix={props.currencySymbol}
            delimiter="."
            separator=","
            precision={2}
            placeholder="0"
            style={styles.amountInput}
          />
        </View>
        <Pressable
          onPress={() =>
            onChangeBidValue(calculateMinimumBidPrice(props.highestBid / 100))
          }
        >
          <PandaText style={styles.setAmountButtonText}>
            Set minimal bid amount (
            {calculateMinimumBidPrice(props.highestBid / 100).toLocaleString(
              "es-ES",
              { maximumFractionDigits: 2 },
            )}{" "}
            {props.currencySymbol})
          </PandaText>
        </Pressable>
      </View>
      <PandaView darkColor={Colors.dark[800]} style={styles.barInfo}>
        <PandaIcon icon={ICONS.CLOCK} color={Colors.dark[600]} size={17} />
        <PandaText darkColor={Colors.dark[600]} style={styles.barInfoText}>
          Time left:
        </PandaText>
        <PandaCountdown
          auctionEndTime={props.auctionTime}
          style={styles.auctionTime}
        />
      </PandaView>
      <PandaButton
        disabled={!isValidBid}
        style={styles.bidButton}
        pressAction={() => console.log("asdf")}
      >
        <PandaText
          darkColor={isValidBid ? Colors.dark[900] : Colors.dark[700]}
          style={styles.bidButtonText}
        >
          Send Bid
        </PandaText>
      </PandaButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  amountContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  amountInput: {
    fontSize: 50,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    color: "white",
  },
  currencySymbol: {
    fontSize: 25,
    fontFamily: "Montserrat-Bold",
    paddingBottom: 5,
    marginLeft: 5,
    marginTop: "auto",
  },
  setAmountButtonText: {
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 10,
  },
  bidButton: {
    marginTop: "auto",
    marginBottom: 50,
  },
  bidButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    padding: 5,
  },
  barInfo: {
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  barInfoText: {
    fontSize: 13,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 10,
  },
  auctionTime: {
    fontSize: 13,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
    marginLeft: "auto",
  },
});
