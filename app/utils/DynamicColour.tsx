// Function to hash a string into a hex color, ensuring no dark or black-like colors
function hashStringToColor(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;

    // Ensure the value is not too dark (adjusting the brightness)
    if (value < 100) {
      value += 100; // Shift darker colors into brighter ranges
    } else if (value > 200) {
      value -= 55; // Prevent excessively bright colors
    }

    color += ("00" + value.toString(16)).slice(-2);
  }
  return color;
}

// Function to get the color for a specific network
export function getNetworkColor(networkId: string): string {
  return hashStringToColor(networkId);
}
