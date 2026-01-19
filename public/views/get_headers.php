<?php
// Устанавливаем заголовки ответа
header('Content-Type: application/json');

// Получаем заголовки запроса
$headers = getallheaders();

// Отправляем их в виде JSON
echo json_encode($headers, JSON_PRETTY_PRINT);
