-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2021 a las 04:24:40
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

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

--
-- Volcado de datos para la tabla `comentario_t`
--

INSERT INTO `comentario_t` (`id`, `comentario`, `id_publicacion`) VALUES
(1, 'buenas tardes quiero saber donde conseguir el producto', 0),
(2, 'buen día quiero saber donde conseguir el producto', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_t`
--

CREATE TABLE `publicacion_t` (
  `id` int(11) NOT NULL,
  `publicacion` varchar(100) NOT NULL,
  `detalle` varchar(400) NOT NULL,
  `precio` varchar(30) DEFAULT NULL,
  `zona` varchar(50) DEFAULT NULL,
  `imagenurl` varchar(200) DEFAULT NULL,
  `rubro` varchar(30) NOT NULL,
  `condicion` varchar(20) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `tipo` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `publicacion_t`
--

INSERT INTO `publicacion_t` (`id`, `publicacion`, `detalle`, `precio`, `zona`, `imagenurl`, `rubro`, `condicion`, `idusuario`, `tipo`) VALUES
(25, 'ahora probando servicio', 'trabaje sobre el archivo de producto, ahora copie los cambios a servicios y veo que esté todo en orden', '0', 'servicio', 'https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2Fimagen25?alt=media&token=9c172991-c595-4817-82a5-589496d554e1', 'cursos y clases', '', 0, ''),
(26, 'probando valor producto', 'estoy probando si la base registra si esto es un producto o un servicio, también estoy probando que el precio pueda aparecer como texto, y ya que estamos pruebo hacer un detalle bastante largo para ve', 'a acordar con el vendedor', 'otra prueba', 'https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2Fimagen26?alt=media&token=9c172991-c595-4817-82a5-589496d554e1', '', 'usado', 0, 'producto'),
(27, 'probando nuevamente', 'parece que cuando subieron alguna imagen a las publicaciones teniamos mal sincronizadas las bases de datos, entonces sus ultimos ID eran diferentes a los mios, y como eso influye en el nombre de fireb', '14', 'otra prueba', 'https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2Fimagen27?alt=media&token=9c172991-c595-4817-82a5-589496d554e1', 'cuidado personal', '', 0, 'servicio'),
(28, 'prueba si sube imagen', 'esta es otra prueba para ver si se suben las imagenes a firebase', 'a acordar con el vendedor', 'cansado de las pruebas', 'https://firebasestorage.googleapis.com/v0/b/localstorage-e6721.appspot.com/o/imagenes%2Fimagen28?alt=media&token=9c172991-c595-4817-82a5-589496d554e1', '', 'indistinto', 0, 'producto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_t`
--

CREATE TABLE `usuario_t` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `urlavatar` varchar(200) NOT NULL,
  `acercaDe` varchar(200) NOT NULL
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `publicacion_t`
--
ALTER TABLE `publicacion_t`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `usuario_t`
--
ALTER TABLE `usuario_t`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
