-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2021 a las 00:31:33
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `baseproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario_t`
--

CREATE TABLE `comentario_t` (
  `id` int(11) NOT NULL,
  `comentario` varchar(300) NOT NULL,
  `id_publicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_t`
--

CREATE TABLE `publicacion_t` (
  `id` int(11) NOT NULL,
  `publicacion` varchar(100) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `zona` varchar(100) DEFAULT NULL,
  `imagenurl` varchar(200) DEFAULT NULL,
  `rubro` varchar(200) NOT NULL,
  `condicion` varchar(20) NOT NULL,
  `idusuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_t`
--

CREATE TABLE `usuario_t` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario_t`
--
ALTER TABLE `comentario_t`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicacion_t`
--
ALTER TABLE `publicacion_t`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario_t`
--
ALTER TABLE `usuario_t`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario_t`
--
ALTER TABLE `comentario_t`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion_t`
--
ALTER TABLE `publicacion_t`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario_t`
--
ALTER TABLE `usuario_t`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO `comentario_t` (`id`, `comentario`, `id_publicacion`)
VALUES
(1, 'buenas tardes quiero saber donde conseguir el producto', 'marta'),
(2, 'buen día quiero saber donde conseguir el producto', 'pepe');

INSERT INTO `publicacion_t`(`id`,`publicacion`, `detalle`, `precio`, `zona`, `imagenurl`, `rubro`, `condicion`, `idusuario`)
VALUES 
(1, 'busco papas', 'necesito comprar papas grandes blancas', '20,50', 'Las Heras', '', '', 'nuevas', '')