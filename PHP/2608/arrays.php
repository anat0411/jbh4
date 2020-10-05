<?php

/**
 * String 
 * Integer // 1, 2, 3
 * Float (double) // 1.1 
 * Boolean
 * Array
 * Object
 * NULL
 */

// Indexed array
// Associative array
$arr = array(1, 2, 3, 4, 5, "string", NULL, false);
echo $arr[6];

$arr2 = array(
  "Yehuda" => 28,
  "Gilat"  => 27,
  "Dan"    => 35,
  "Dan"    => 22
);

echo $arr2["Gilat"];

$arr3 = array(array(1,2,3));
echo $arr3[0][0];

var_dump($arr2);

$names = array("Raya", "Nir", "Anat", "Shirly");
// echo "Size: " . count($names) . "\n";
var_dump(in_array("Raya", $names));

// add 
array_push($names, "Gill");
// var_dump($names);

$ages = array("Yehuda" => 28);
$ages["David"] = 33;
$ages["Dana"] = array("David" => 32);
// echo $ages["Dana"]["David"];
// var_dump($ages);

?>