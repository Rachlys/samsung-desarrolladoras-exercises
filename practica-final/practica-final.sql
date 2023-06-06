-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 06-06-2023 a las 22:18:45
-- Versión del servidor: 5.7.39
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practica-final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `primer_apellido`, `segundo_apellido`, `login`, `email`, `password`) VALUES
(1, 'Romina', 'Yupanqui', 'Reynoso', 'ryupanqui', 'rsda@hotmail.com', '$2y$10$hrVAhAw1udRvvIiPgeYkWOBN4wecD.cdzIgu4L6tVv788n6agXLyK'),
(3, 'Raul', 'Alvarez', 'Tejero', 'ralvarez', 'ralvarez@hotmail.com', '$2y$10$HHFiG5SrZeoDd6lDrcN4BexStjP.kswdTfJYqYxktgCifrfq/fwIC'),
(4, 'Marulla', 'Alvarez', 'Tejero', 'malvarez', 'malvarez@hotmail.com', '$2y$10$1geVl9vV90h.sNaXZTgPAu0XQ.GyqBNWEashy.zrTFHpo6nqLEpLG'),
(5, 'Sara', 'Alvarez', 'Tejero', 'salvarez', 'salvarez@hotmail.com', '$2y$10$4tg8kC3pquu7ody0fKzp5e0tBYXPtLL7xAr3Tnl/qAlJTwvM91lFi'),
(6, 'Horoscopo', 'Alvarez', 'Tejero', 'halvarez', 'halvarez@hotmail.com', '$2y$10$6VT3WUp8coFs1uS1Z0Kh7Oy77bJXJEdG5jqHmHQSmQuck8TjdqeDq'),
(7, 'Alfredo', 'Alvarez', 'Tejero', 'aalvarez', 'aalvarez@hotmail.com', '$2y$10$vcImvhVxiIckwEYXFEPx7eFp.sq4Bmn8JwlG.iLjcn4zoIBP2EQTG'),
(8, 'Dolores', 'Alvarez', 'Tejero', 'dalvarez', 'dalvarez@hotmail.com', '$2y$10$w4/NYeGsjYW0GYh2NYVg5eeSJstA3FyHYOyluwHWJjpIPUUSFABuK'),
(9, 'Antonia', 'Alvarez', 'Tejero', 'aalvarez', 'analvarez@hotmail.com', '$2y$10$EkZxwF1/iRIwwFQ3fOfQweqkMN1BiWlQE6.zm9WscEiwl2ZXUIuyG'),
(10, 'Felix', 'Alvarez', 'Tejero', 'falvarez', 'falvarez@hotmail.com', '$2y$10$4xvQrQlM.SpNCOLWDsWGS.zpCmKxVAftC26UxYDg0y9uHyheKD/yO'),
(11, 'Felisin', 'Alvarez', 'Tejero', 'falvarez', 'fealvarez@hotmail.com', '$2y$10$kn6LBk2H3xiyQ689V2NMCuiPMiwNW/roVbmTv/co8eQS2pv369k2m'),
(12, 'Vaika', 'Alvarez', 'Tejero', 'valvarez', 'valvarez@hotmail.com', '$2y$10$a3T5lqfg/HfE4vPl0XN7uuMa1bJZNo17rXN0KL7UY.94PqvFPnR4C'),
(13, 'Gregoria', 'Alvarez', 'Tejero', 'galvarez', 'galvarez@hotmail.com', '$2y$10$QYsFtWMjjX3gIP1E/a1vC.QCxbV4yJzuyw8q85VdDlE3lArA8tK9m'),
(14, 'romina', 'yupanqui', 'reynoso', 'ryupanqu', 'romiyp@hotmail.com', '$2y$10$RmYLyg.9wXWdQSC88y9knO1XQn4QfY.2rFZvK/FiSVHxR1zjdS2Kq'),
(15, 'leonora', 'leonorita', 'reynoso', 'rewre', 'sdfs@hotmail.com', '$2y$10$w44j0/ZdUFyGzUTBawwsuuIjiAFhpT/IsbqWt3qXzNb.smaKCAirK'),
(16, 'romina', 'yupanqui', 'rensodoa', 'dasa', 'asda@hotmail.com', '$2y$10$7zvqztAycnlp0UzoQ2JeQOgNUDTmlvQvfGu/sURExjOSUm0xM316u'),
(17, 'sdad', 'asdas', 'dsad', 'sadasd', 'romiyup@hotmai.com', '$2y$10$8u3rLGxkoNx8w/z30VJFcOoufc2IzhZIIRAlzoDGTj5OBpQvi9X2K'),
(18, 'asdas', 'adasdas', 'adas', 'adasdsa', 'ada@hotmail.com', '$2y$10$LPMd0JuM4HtF2wquCgDLGO3JjiQk21wzOrMjO3nqU/UyL5nOQ/Mf.'),
(19, 'asdas', 'adasdas', 'adas', 'adasdsa', 'romiyup@hotmail.com', '$2y$10$/FJ6KyEGn5rr9lzLTt1L1OexUHGevHYkWEQsMTMltqUKDvMwQDbPy'),
(20, 'dfsf', 'sdfsd', 'sdfs', 'sdfds', 'sdfsd@hotmail.com', '$2y$10$4NxX2kW5vuKkYGdeToBmyuZ.xIxoYr2cxkoBXsKAM.16OZgvrEK/2'),
(21, 'Ricardo', 'Patiño', 'Reynoso', 'sadsad', 'rpatino@hotmail.com', '$2y$10$gKtZ9O1giUwI2zfwVwyDSue3zxw11.8Y0Oen/q41WHYKZCMo9c2NG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
