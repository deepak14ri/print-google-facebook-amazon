let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];
var totCases = [testCase1, testCase2];

for (let i = 0; i < totCases.length; i++) {
  totCases[i].sort((a, b) => {
    // Sort by total marks
    if (a.biology + a.chemistry !== b.biology + b.chemistry) {
      return b.biology + b.chemistry - (a.biology + a.chemistry);
    }

    // Sort by bio marks
    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }

    // Sort by dob
    return new Date(a.dob) - new Date(b.dob);
  });
}

for (let i = 0; i < totCases.length; i++) {
  var ansArr = new Array(totCases[i].length);
  for (let j = 0; j < totCases[i].length; j++) {
    ansArr[j] = totCases[i][j].name;
  }
  console.log(`Sorted Array objects of ${i+1} testcase: [${ansArr}]`);
}
