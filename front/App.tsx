import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@utils/queryClient";
import Toast from "react-native-toast-message";
import { toastConfig } from "@utils/config/toastConfig";
import * as Sentry from "sentry-expo";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  Sentry.init({
    dsn: "https://1f3f003bbb81438587b498e4ba29e27f@o4505036052430848.ingest.sentry.io/4505036058918912",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    enableInExpoDevelopment: true,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </QueryClientProvider>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    );
  }
}
