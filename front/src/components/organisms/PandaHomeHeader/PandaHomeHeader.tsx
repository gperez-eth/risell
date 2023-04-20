import { PandaPillList } from "@components/molecules";
import Colors from "@utils/constants/Colors";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import useColorScheme from "hooks/useColorScheme";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type PandaHomeHeaderProps = {};

export function PandaHomeHeader({ ...props }: PandaHomeHeaderProps) {
  const theme = useColorScheme();

  const optionsMenuDefault = [
    { optionText: "Near you", isActive: false },
    { optionText: "New", isActive: false },
    { optionText: "Live Shopping", isActive: false },
    { optionText: "Auction", isActive: false },
  ];

  const changeBarOption = (index: number) => {
    let updatedOtionsMenu = [...optionsMenuDefault];
    updatedOtionsMenu[index] = { ...updatedOtionsMenu[index], isActive: true };
    setOptionsMenu(updatedOtionsMenu);
  };

  const [optionsMenu, setOptionsMenu] = useState(optionsMenuDefault);

  useEffect(() => {
    optionsMenu[0].isActive = true;
  }, []);

  return (
    <BlurView tint={theme} intensity={100} style={[styles.headerContainer]}>
      <Image
        style={[styles.logo]}
        source={{
          uri: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png",
          headers: { Authorization: "someAuthToken" },
        }}
        contentFit={"cover"}
      />
      <PandaPillList
        options={optionsMenu}
        onChangeMenuOption={(index) => changeBarOption(index)}
      />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 15,
    height: 40,
    width: 40,
  },
  headerContainer: {
    paddingTop: 70,
    paddingBottom: 20,
    marginBottom: 10,
    alignItems: "center",
    position: "absolute",
    marginTop: "auto",
  },
});
