<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$phone = $data["phone"] ?? "";
$message = $data["message"] ?? "";

if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

$token = "7829601576:AAEFDfBoRTNbCX-WOSO5GQjaB5YFEpTzASo";
$chat_id = "713468325";

$text = "📩 Нова заявка:\n";
$text .= "Ім'я: $name\n";
$text .= "Email: $email\n";
$text .= "Телефон: $phone\n";
$text .= "Повідомлення: $message";

$url = "https://api.telegram.org/bot$7829601576:AAEFDfBoRTNbCX-WOSO5GQjaB5YFEpTzASo/sendMessage";

$params = [
    "chat_id" => $chat_id,
    "text" => $text
];

$options = [
    "http" => [
        "header" => "Content-Type: application/x-www-form-urlencoded",
        "method" => "POST",
        "content" => http_build_query($params),
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo json_encode(["success" => true]);