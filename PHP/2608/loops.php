<?php

$arr = array(12, 13, 14, 15);

for($i = 0 ; $i < count($arr) ; $i++) {
    echo $arr[$i] . "\n";
}

$x = 5;
while($x > 0) {
    echo $x . "\n";
    $x--;
}

do {
    echo $x ."\n";
} while ($x > 5);

$color = "yellow";
switch ($color) {
    case 'blue':
        echo "Yes";
        break;
    
    default:
        echo "No\n";
        break;
}

$ages = array(
    "Yehdua" => 28,
    "Dana"   => 24
);

foreach($ages as $age) {
    echo $age . "\n";
}

// arrayName as key => value
foreach($ages as $name => $age) {
    echo $name . ": " . $age . "\n";
}

?>