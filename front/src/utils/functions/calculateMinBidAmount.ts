export function calculateMinimumBidPrice(actualBidPrice) {
  if (actualBidPrice <= 10) {
    return actualBidPrice + 0.5 * actualBidPrice;
  } else if (actualBidPrice <= 50) {
    return actualBidPrice + 0.1 * actualBidPrice;
  } else if (actualBidPrice <= 100) {
    return actualBidPrice + 0.025 * actualBidPrice;
  } else if (actualBidPrice <= 500) {
    return actualBidPrice + 0.05 * actualBidPrice;
  } else if (actualBidPrice <= 1000) {
    return actualBidPrice + 0.1 * actualBidPrice;
  } else if (actualBidPrice <= 5000) {
    return actualBidPrice + 0.025 * actualBidPrice;
  } else {
    return actualBidPrice + 0.01 * actualBidPrice;
  }
}
