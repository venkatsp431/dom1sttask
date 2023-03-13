function foo() {
  var res = document.getElementById("firstName").value;
  var res1 = document.getElementById("middleName").value;
  var res2 = document.getElementById("lastName").value;
  var res3 = document.getElementById("email").value;
  var res4 = document.getElementById("pass").value;
  console.log(res);
  console.log(res1);
  console.log(res2);
  console.log(res3);
  console.log(res4);
}
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
});
