//param is not returned or passed
function foo(param = "no") {
  return "yes";
}

//if param has an argument the default isn't used
function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());
bar("yes");
//"no"

//output is no

