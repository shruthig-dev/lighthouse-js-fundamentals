const range = function (start, end, step) {
    var rangeArray = [];
  
    if (
      start === undefined ||
      end === undefined ||
      step === undefined ||
      start > end ||
      step === 0 ||
      step < 0
    ) {
      return rangeArray;
    } else {
      let i = start;
      while (i <= end) {
        rangeArray.push(i);
        i += step;
      }
    }
    return rangeArray;
  };
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));
  