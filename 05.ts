function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    }
    throw new Error("Invalid input type");
}