-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-01-2021 a las 21:08:38
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
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mipublicacion_t`
--

-- CREATE TABLE `comentar_t` (
--   `id` int(4) NOT NULL,
--   `publicacion` varchar(100) NOT NULL,
--   `detalle` varchar(200) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mipublicacion_t`
--

-- INSERT INTO `mipublicacion_t` (`id`, `publicacion`, `detalle`) VALUES
-- (1, 'arroz soleado', 'busco comprar arroz soleado mejor precio pago hasta 35 pesos'),
-- (2, 'pan dulce arcor', 'pan dulce arcor por pack de 10'),
-- (3, 'flan', 'flan arcor por pack de 10'),
-- (4, 'te', 'flan arcor por pack de 10'),
-- (5, 'agua', 'azucar norte por pak de 10 kg'),
-- (6, 'cafe', 'azucar norte por pak de 10 kg'),
-- (7, 'sal', 'azucar norte por pak de 10 kg'),
-- (8, 'sal', 'azucar norte por pak de 10 kg'),
-- (9, 'sal', 'azucar norte por pak de 10 kg'),
-- (10, 'sal', 'azucar norte por pak de 10 kg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mipublicacion_t`
--
-- ALTER TABLE `mipublicacion_t`
--   ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mipublicacion_t`
--
-- ALTER TABLE `mipublicacion_t`
--   MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
-- COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE `comentar_t` (
  `id` int(4) NOT NULL,
  `comentario` varchar(100) NOT NULL,
  `id_persona` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `comentar_t` (`id`, `comentario`, `id_persona`) VALUES
(1, 'me gustaria saber mas detalles de tu producto', 'Juan Perez'),

-- Indices de la tabla `mipublicacion_t`
--
ALTER TABLE `comentar_t`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mipublicacion_t`
--
ALTER TABLE `comentar_t`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

CREATE TABLE `ingresarProducto_t` (
  `id` int(4) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `precio_producto` varchar(10) NOT NULL,
  `condicion_producto` varchar(200) NOT NULL,
  `zona_producto` varchar(50) NOT NULL,
  `imagen_producto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `ingresarProducto_t` (`id`, `nombre_producto`, `precio_producto`, `condicion_producto`, `zona_producto`, `imagen_producto`) VALUES
(1, 'perro', 'sin precio','usado','Mendoza','' ),


-- Indices de la tabla `mipublicacion_t`
--
ALTER TABLE `ingresarProducto_t`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mipublicacion_t`
--
ALTER TABLE `ingresarProducto_t`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;


CREATE TABLE `ingresarServicio_t` (
  `id` int(4) NOT NULL,
  `nombre_servicio` varchar(100) NOT NULL,
  `rubro_servicio` varchar(30) NOT NULL,
  `precio_servicio` varchar(10) NOT NULL,
  `zona_servicio` varchar(50) NOT NULL,
  `imagen_servicio` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `ingresarServicio_t` (`id`, `nombre_servicio`, `rubro_servicio`, `precio_servicio`, `zona_servicio`, `imagen_servicio`) VALUES
(1, 'jardinero', 'jardineria','hasta 1000','Mendoza','' ),

-- Indices de la tabla `mipublicacion_t`
--
ALTER TABLE `ingresarServicio_t`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mipublicacion_t`
--
ALTER TABLE `ingresarServicio_t`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;