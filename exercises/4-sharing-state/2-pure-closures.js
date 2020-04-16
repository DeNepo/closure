// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result

const closeNonMutatingFunctions = (str) => {
  return [
    function () {
      return str + " pigs";
    },
    function (param) {
      return str + param;
    }
  ]
}

let closedFunctions1 = closeNonMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0];
const concatParam1 = closedFunctions1[1];
closedFunctions1 = _;

console.assert(concatPigs1() === _, 'assert 1');
console.assert(concatPigs1() === _, 'assert 2');
console.assert(concatParam1(" rock!") === _, 'assert 3');
console.assert(concatParam1(" rock!") === _, 'assert 4');


let closedFunctions2 = closeNonMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0];
const concatParam2 = closedFunctions2[1];
closedFunctions2 = _;

console.assert(concatPigs2() === _, 'assert 5');
console.assert(concatPigs2() === _, 'assert 6');
console.assert(concatParam2(" cheese!") === _, 'assert 7');
console.assert(concatParam2(" cheese!") === _, 'assert 8');
