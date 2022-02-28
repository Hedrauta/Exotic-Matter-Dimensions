// infOP III-1, produced by alemaninc
function infAdd(x, y) {                 // Adds two infNumbers - for example, infAdd(1,0) returns 1.0414 (log(10+1)) 
  if (Math.abs(x - y) > 16) {              // If the quotient of x and y is more than 1e+16, the addition is negligible
    return Math.max(x, y);
  } else {
    z = Math.min(x, y)
    return z + Math.log10(10 ** (x - z) + 10 ** (y - z));
  };
};
function infSubtract(x, y) {            // Subtracts two infNumbers - if y is greater than x an error message is output. For example, infSubtract(1,0) returns 0.9542 (log(10-1))
  if (x - y > 16) {                        // If y is less than 1/1e+16 of x, the subtraction is negligible
    return x;
  } else if (x == y) {                   // If x and y are equal, 1/1e+100 is output instead of -Infinite.
    return -100;
  } else if (y > x) {                    // If a negative value would be output, 0 is output instead as the library can't support negative numbers. However, the game has controls in place to make sure negative values never occur
    return -100;
  } else {
    return x + Math.log10(1 - 10 ** (y - x));
  };
};
var notation = "Mixed scientific";
function infFormat(x, y) {
  if (x < 3) {
    return (10 ** x).toFixed(y
      ? Math.max(0, Math.min(5, 2 - Math.floor(x)))
      : 0);
  } else {
    switch (notation) {
      case "Alemaninc Ordinal":
        output = "α"
          + (Math.floor(((x < 10)
            ? 10 * x
            : 100 * (1 + Math.log(x / 10) * 0.2) ** 5)
            - 30).toLocaleString('en-US'));
        for (i = 0; i < output.length; i++) {
          output = output
            .replace("0", "₀")
            .replace("1", "₁")
            .replace("2", "₂")
            .replace("3", "₃")
            .replace("4", "₄")
            .replace("5", "₅")
            .replace("6", "₆")
            .replace("7", "₇")
            .replace("8", "₈")
            .replace("9", "₉");
        };
        return output;
        break; // End case Alemaninc Ordinal
      case "Double Logarithm":
        return "ee" + Math.log10(x).toFixed(3);
        break; // End case Double Logarithm
      case "Engineering":
        function preE_length(z) { // calculate length of Character in front of floating point
          return (10 ** (z % 3) - ((10 ** (z % 3) % 1)) % 1).toString().length
        }
        var t = Math.log10(x) // only in use for (x>1e9)
        return (x < 1e9)
          ? (10 ** (x % 3)).toFixed((preE_length(x) == 3) ? 1 : (preE_length(x) == 2) ? 2 : 3) // dynamic float
          + "e" + (x - (x % 3)).toLocaleString("en-US")
          : "e" + (10 ** (t % 3)).toFixed((preE_length(t) == 3) ? 1 : (preE_length(t) == 2) ? 2 : 3) // dynamic float
          + "e" + (t - (t % 3)).toLocaleString("en-US");
        break; // End case Engineering Notation
      case "Infinity":
        return (Math.log(x) / Math.log(1.79e308)).toFixed(6) + "∞";
        break; // End case Infinity

      case "Logarithm":
        return ((x < 1e9)
          ? "e" + (Math.floor(((x < 100000) ? 100 : 1) * x) / (x < 100000 ? 100 : 1)).toLocaleString('en-US')
          : "e" + Math.floor(100 * 10 ** (x % 1)) / 100 + "e" + Math.floor(Math.log10(x)));
        break; // End case Logarithm
      case "Mixed scientific":
        const endings = ["", "K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No"];
        return (x < 33)
          ? (10 ** (x % 3)).toFixed(2) + " " + endings[Math.floor(x / 3)]                       // 3.5 = 3.16 K
          : (x < 1e9)
            ? (10 ** (x % 1)).toFixed(2) + "e" + Math.floor(x).toLocaleString("en-US")                // 38462.25 = 1.77e38,462
            : (x < 1e33)
              ? "e" + (10 ** (Math.log10(x) % 3)).toFixed(2) + " " + endings[Math.floor(Math.log10(x) / 3)]  // 1.23e21 = e1.23 Sx
              : "e" + (x / 10 ** Math.floor(Math.log10(x))).toFixed(2) + "e" + Math.floor(Math.log10(x));                   // 2.34e56 = e2.34e56
        break; // End case Mixed scientific
      case "Scientific":
        return (x < 1e9)
          ? (10 ** (x % 1)).toFixed(2) + "e" + Math.floor(x).toLocaleString("en-US")
          : "e" + (x / 10 ** Math.floor(Math.log10(x))).toFixed(2) + "e" + Math.floor(Math.log10(x));
      default:
        return "Notation Error"
    }
  }
}
function normFormat(x) {               // Formats a regular number the same way infNumbers would be formatted
  if (x >= 10000) {
    return infFormat(Math.log10(x));
  } else if (x >= 100) {
    return Math.floor(x);
  } else {
    return Math.floor(x * 100) / 100;
  };
};
function twoDigits(x) {                // Formats a one-digit number as two digits. For example, twoDigits(7) returns 07. Used in timeFormat
  return (x < 10)
    ? "0" + Math.floor(x)
    : Math.floor(x);
};
function timeFormat(x) {               // Formats an amount of seconds as a time. For example, timeFormat(73) returns 1:13 and timeFormat(90123) returns 1 day 1:02:03
  return (x < 1)
    ? Math.floor(x * 1000) + " milliseconds" : (x < 10) ? Math.floor(x * 1000) / 1000 + " seconds" : (x < 60) ? Math.floor(x) + " seconds" : (x < 3600) ? Math.floor(x / 60) + ":" + twoDigits(Math.floor(x % 60)) : (x < 86400) ? Math.floor(x / 3600) + ":" + twoDigits(Math.floor(x / 60) % 60) + ":" + twoDigits(Math.floor(x % 60)) : Math.floor(x / 86400) + " days " + Math.floor(x / 3600) % 24 + ":" + twoDigits(Math.floor(x / 60) % 60) + ":" + twoDigits(Math.floor(x % 60))
}

// The following code is for Advanced infOP only.
function normLinearSoftcap(value, start, power) {
  return (value < start)
    ? value
    : start * (1 + (power + 1) * (value / start - 1)) ** (1 / (power + 1));
};
function infLinearSoftcap(value, start, power) {
  return (value < start)
    ? value
    : start + infAdd(0, Math.log10(power + 1) + infSubtract(value - start, 0)) / (power + 1);
};
function LogarithmicSoftcap(value, start, power) {
  return (value < start)
    ? value
    : start * (1 + Math.log(value / start) * power) ** (1 / power);
}
function SuperlogSoftcap(value, start, power) {
  if (value < start) {
    return value;
  };
  c = (value / start) ** power;
  multiplier = (c < Math.exp(1))
    ? 1 + Math.log(c)
    : (c < Math.exp(Math.exp(1)))
      ? 2 + Math.log(Math.log(c))
      : (c < Math.exp(Math.exp(Math.exp(1))))
        ? 3 + Math.log(Math.log(Math.log(c)))
        : 4 + Math.log(Math.log(Math.log(Math.log(c))));
  return (multiplier == "Infinity"
    ? start
    : start * multiplier ** (1 / power));
};
function ConvergentSoftcap(value, start, end) {
  return (Math.sign(value - start) == Math.sign(start - end))
    ? value
    : end - (end - start) / (1 + (value - start) / (end - start));
};
function normLinearScaling(value, start, power) {
  return (value < start)
    ? value
    : start / (power + 1) * (power + (value / start) ** (power + 1));
};
function infLinearScaling(value, start, power) {
  return (value < start)
    ? value
    : start - Math.log10(power + 1) + infAdd(Math.log10(power), (value - start) * (power + 1));
};
function normSemiexpScaling(value, start, power) {
  return (value < start)
    ? value
    : 10 ** (Math.log10(start) * (Math.log(value) / Math.log(start)) ** (power + 1) - Math.log10(power + 1)) + start * (1 - 1 / (power + 1));
};
function infSemiexpScaling(value, start, power) {
  return (value < start)
    ? value
    : infAdd(start * (value / start) ** (power + 1) - Math.log10(power + 1), start * (1 - 1 / (power + 1)));
};
function ExponentialScaling(value, start) {
  return (value < start)
    ? value
    : start * Math.exp(value / start - 1);
};
function SuperexpScaling(value, start, power) {
  c = (value / start) ** power;
  multiplier = (c < 2)
    ? Math.exp(c - 1)
    : (c < 3)
      ? Math.exp(Math.exp(c - 2))
      : (c < 4)
        ? Math.exp(Math.exp(Math.exp(c - 3)))
        : Math.exp(Math.exp(Math.exp(Math.exp(c - 4))))
  return (multiplier == "Infinity"
    ? 1.79e308
    : start * multiplier ** (1 / power))
}
function divergentScaling(value, start, end) {
  return (value >= end)
    ? 1e300
    : ((value < start)
      ? value
      : start + (end - start) * ((end - start) / (end - value) - 1));
};
function infFloor(x) {
  return (x < 0)
    ? -100
    : (x > 16)
      ? x
      : Math.log10(Math.floor(10 ** x));
};
// End of infOP
