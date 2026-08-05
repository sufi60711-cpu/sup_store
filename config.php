<?php
require 'config.php';

$params = [
    "transaction_details" => [
        "order_id" => "INV-" . time(),
        "gross_amount" => 20000
    ],
    "item_details" => [
        [
            "id" => "86dm",
            "price" => 20000,
            "quantity" => 1,
            "name" => "86 Diamond ML"
        ]
    ]
];

$snapToken = \Midtrans\Snap::getSnapToken($params);

echo json_encode([
    "token" => $snapToken
]);