<?php

function greeting($name) {
  echo "Hello " . $name . "!\n";
}

greeting("Yehuda");
greeting("Gill");
greeting("Revital");

function add($x, $y) {
  return $x + $y;
}

// $z = add(1, 3);
// echo $z;

$y = 1234;
function x() {
  global $y;
  return $y;
}
var_dump(x());

function w() {
  $t = 12;
}
w();
var_dump($t);

?>