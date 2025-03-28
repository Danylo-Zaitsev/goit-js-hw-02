function getShippingCost(country) {
    switch (country) {
      case "China":
        result = "Shipping to China will cost 100 credits";
        break;
      case "Chile":
        result = "Shipping to Chile will cost 250 credits";
        break;
      case "Australia":
        result = "Shipping to Australia will cost 170 credits";
        break;
      case "Jamaica":
        result = "Shipping to Jamaica will cost 120 credits";
        break;
      default:
        result = "Sorry, there is no delivery to your country";
    }
    return result;
  }

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
