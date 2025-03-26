export const createStackBattery = () => {
  const stack = [0, 0, 0, 0, 1, 1, 1, 1]

  // Fisher-Yates shuffle
  for (let i = stack.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[stack[i], stack[randomIndex]] = [stack[randomIndex], stack[i]]
  }

  return stack
}
