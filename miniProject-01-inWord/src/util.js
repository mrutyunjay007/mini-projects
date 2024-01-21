export default function inWordConverter(num) {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "",
    "Eleven",
    "Tweleve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num == 0) return "*amount should be more than zero ";

  return (function converter(nums) {
    //single digit
    if (nums < 10) {
      return ones[nums];
    }
    // double digits
    // nums : 10 -> 19
    else if (nums < 20) {
      return nums != 10 ? teens[nums - 10] : tens[1];
    } // nums : 20 -> 99
    else if (nums >= 20 && nums <= 99) {
      return tens[Math.floor(nums / 10)] + " " + ones[nums % 10];
    }
    // Hundreds
    // nums : 100 -> 999
    else if (nums > 99 && nums <= 999) {
      return ones[Math.floor(nums / 100)] + " Hundred " + converter(nums % 100);
    }
    // Thousands
    // nums: 1000 -> 99,999
    else if (nums > 999 && nums <= 99999) {
      return (
        converter(Math.floor(nums / 1000)) +
        " Thousand " +
        converter(nums % 1000)
      );
    }
    // Lakhs
    // nums : 100000 -> 99,99,999
    else if (nums > 99999 && nums <= 9999999) {
      return (
        converter(Math.floor(nums / 100000)) +
        " Lakh " +
        converter(nums % 100000)
      );
    }
    // Carors
    // nums : 10000000 -> 99,99,99,999
    else {
      return (
        converter(Math.floor(nums / 10000000)) +
        " Crore " +
        converter(nums % 10000000)
      );
    }
  })(num);
}
