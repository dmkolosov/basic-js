const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
}

const out = arr.slice();
const discard = Symbol("Discarded item");

for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case '--discard-next':
            if (i < out.length - 1) {
                out[i + 1] = discard;
            }
            out[i] = discard;
            break;
        case '--discard-prev':
            if (i > 0) {
                out[i - 1] = discard;
            }
            out[i] = discard;
            break;
        case '--double-next':
            if (i < out.length - 1) {
                out[i] = out[i + 1];
            } else {
                out[i] = discard;
            }
            break;
        case '--double-prev':
            if (i > 0) {
                out[i] = out[i - 1];
            } else {
                out[i] = discard;
            }
    }
}

return out.filter(el => el !== discard);
  // if (!Array.isArray(arr)) throw Error();

  // let result = [];
  // let div = false;
  // let i = 0;

  // while (i < arr.length) {
  //   //  if(
  //   //   typeof arr[i]=="object" || typeof arr[i]=="string"
  //   //  ){
  //   //   result.push(arr[i])
  //   //  }
  //   if (typeof arr[i] == "number") {
  //     if (div) {
  //       result.push(arr[i]);
  //       result.push(arr[i]);
  //       div = false;
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   } else if (arr[i] == "--discard-prev") {
  //     div = false;
  //     result.pop();
  //     result.push("--discard-prev");
  //   } else if (arr[i] == "--discard-next") {
  //     div = false;
  //     result.push("--discard-next");
  //     i += 2;
  //   } else if (arr[i] == "--double-next") {
  //     div = true;
  //   } else if (arr[i] == "--double-prev") {
  //     div = false;
  //     let dd = result.pop();
  //     result.push(dd);
  //     result.push(dd);
  //   } else {
  //     result.push(arr[i]);
  //   }
  //   i++;
  // }
  // return result.filter(
  //   (x) =>
  //     x !== "--discard-prev" &&
  //     x !== undefined &&
  //     x !== "--discard-next" &&
  //     x !== "--double-next" &&
  //     x !== "--double-prev"
  // );
};

function transform(arr) {
  if (!Array.isArray(arr)) throw Error();

  let result = [];
  let div = false;
  let i = 0;

  while (i < arr.length) {
    //  if(
    //   typeof arr[i]=="object" || typeof arr[i]=="string"
    //  ){
    //   result.push(arr[i])
    //  }
    if (typeof arr[i] == "number") {
      if (div) {
        result.push(arr[i]);
        result.push(arr[i]);
        div = false;
      } else {
        result.push(arr[i]);
      }
    } else if (arr[i] == "--discard-prev") {
      div = false;
      result.pop();
      result.push("--discard-prev");
    } else if (arr[i] == "--discard-next") {
      div = false;
      result.push("--discard-next");
      i += 2;
    } else if (arr[i] == "--double-next") {
      div = true;
    } else if (arr[i] == "--double-prev") {
      div = false;
      let dd = result.pop();
      result.push(dd);
      result.push(dd);
    } else {
      console.log(arr[i]);
      result.push(arr[i]);
    }
    i++;
  }
  return result.filter(
    (x) =>
      x !== "--discard-prev" &&
      x !== undefined &&
      x !== "--discard-next" &&
      x !== "--double-next" &&
      x !== "--double-prev"
  );
}

let b = transform([
  undefined,
  undefined,
  1,
  "--discard-next",
  1337,
  "--double-prev",
  4,
  5,
  { l: 1 },
  66,
  "xx",
  true,
  ["somebody", "told", "me"],"ABC",Infinity,22,NaN
]);
console.log(b);
