document.getElementById("button").addEventListener("click", function() {
  let count = +document.getElementById("count").innerHTML;
  count++;
  document.getElementById("count").innerHTML = count;
});