// 1. Declare an empty array
const emptyArray = [];

// 2. Declare an array with more than 5 elements
const array1 = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of the array
const array1length = array1.length;

// 4. Get the first item, the middle item and the last item
const firstItemOfArray1 = array1[0];
const lastItemOfArray1 = array1[array1length];
const middleItemOfArray1 = array1[Math.round(array1length / 2)];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'A', {}, [], true, 3.14];
const mixedDataLength = mixedDataTypes.length
const shouldBeGreaterThan5 = mixedDataLength > 5
console.log(shouldBeGreaterThan5)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
const companyLength = itCompanies.length
console.log(companyLength);

// 9. Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.round(companyLength / 2)];
const lastCompany = itCompanies[companyLength];

// 10. Print out each company
itCompanies.forEach((company) => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.map((company) => company.toUpperCase()).forEach((company) => console.log(company));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const companiesSentence = itCompanies.reduce(
  (sentence, company, index) => {
    switch (true) {
      case index < companyLength - 2:
        return `${sentence}${company}, `;

      case index === companyLength - 2:
        return `${sentence}${company} and `;

      case index === companyLength - 1:
        return `${sentence}${company} are big IT companies.`;

      case index === companyLength:
        return sentence;
    }
  },
  ""
);
console.log(companiesSentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function findCompanyInList(itCompanies, companyToFind = "") {
  const companyInList = itCompanies.find((company) => company === companyToFind);
  if (!companyInList) {
    return 'Company not found';
  }

  return companyInList;
}
findCompanyInList(itCompanies, "");

// 14. Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = itCompanies.reduce(
  (filteredComps, company) => {
    const numberOfOs = (company.match(/[Oo]/g) || []).length
    if (numberOfOs > 1) {
      filteredComps.push(company)
    }

    return filteredComps
  },
  []
);


// 15. Sort the array using sort() method
const sortedCompanies = itCompanies.sort();

// 16. Reverse the array using reverse() method
const reversedCompanies = itCompanies.reverse();

// 17. Slice out the first 3 companies from the array
const first3Companies = itCompanies.slice(0, 3);

// 18. Slice out the last 3 companies from the array
const last3Companies = itCompanies.slice(0, -3);