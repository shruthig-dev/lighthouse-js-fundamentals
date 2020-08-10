const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...
    let maxValue = 0;
    let submitterName = "";
  
    for (let i = 0; i < vegetables.length; i++) {
      if (maxValue < vegetables[i][metric]) {
        maxValue = vegetables[i][metric];
        submitterName = vegetables[i].submitter;
      }
    }
    return submitterName;
  };
  
  const vegetables = [
    {
      submitter: "Old Man Franklin",
      redness: 10,
      plumpness: 5
    },
    {
      submitter: "Sally Tomato-Grower",
      redness: 2,
      plumpness: 8
    },
    {
      submitter: "Hamid Hamidson",
      redness: 4,
      plumpness: 3
    }
  ];
  
  const metric = "redness";
  
  console.log(judgeVegetable(vegetables, metric));
  