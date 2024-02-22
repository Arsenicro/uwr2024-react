import _ from "https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm";

console.log(_.toNumber(document.getElementById("count").innerHTML));
document.getElementById("button").addEventListener("click", function () {
  let count = _.toNumber(document.getElementById("count").innerHTML);
  count++;
  document.getElementById("count").innerHTML = count;
});
