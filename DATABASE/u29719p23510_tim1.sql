-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 29 mrt 2018 om 15:39
-- Serverversie: 10.1.26-MariaDB
-- PHP-versie: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u29719p23510_tim1`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `comments`
--

CREATE TABLE `comments` (
  `id` int(255) NOT NULL,
  `name` mediumtext NOT NULL,
  `post` longtext NOT NULL,
  `date` mediumtext NOT NULL,
  `email` mediumtext NOT NULL,
  `ip` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `comments`
--

INSERT INTO `comments` (`id`, `name`, `post`, `date`, `email`, `ip`) VALUES
(6, 'j', 'j', '23 March 2018 08:52', 'j@j', '::1'),
(7, 'h', 'h', '23 March 2018 09:09', 'h@h', '::1'),
(8, 'ffffffffff', 'f', '23 March 2018 09:10', 'f@f', '::1');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `highscores`
--

CREATE TABLE `highscores` (
  `id` int(255) NOT NULL,
  `name` mediumtext NOT NULL,
  `score` int(255) NOT NULL,
  `timeAlive` longtext NOT NULL,
  `timeInSec` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `highscores`
--

INSERT INTO `highscores` (`id`, `name`, `score`, `timeAlive`, `timeInSec`) VALUES
(2, 'Test123', 29, '0:31.32', 31),
(3, '0 score', 0, '0:34.10', 34),
(6, 'indy', 50, '01:13.44', 73),
(8, 'tigo550', 50, '01:06.26', 66),
(9, 'tigo550', 78, '01:32.42', 92),
(11, 'speedy indy', 67, '01:40.86', 101),
(13, 'Indy1250', 108, '02:21.13', 141),
(17, 'indy1250', 116, '02:00.80', 121),
(19, 'Timothy', 169, '02:20.80', 141),
(30, 'Kortste tijd', 0, '0:00.55', 1),
(46, 'natzi', 8, '0:25.53', 26),
(47, 'Timothy', 255, '02:58.56', 179),
(50, 'Timothy', 402, '03:55.61', 236),
(51, 'kom%20dan%20dubbel11111', 3, '0:06.08', 6),
(52, 'MemeKing420', 0, '0:06.79', 7),
(53, 'indy 1250', 100, '01:39.40', 99),
(56, 'KDEN BROKEN ASS GAME', 4, '0:13.15', 13),
(57, 'SMOKE WEED EVERYDAY', 0, '0:04.20', 4),
(58, 'SNELSTE SCORE BITCH TIM', 0, '0:00.48', 0),
(59, 'Thobias', 54, '01:14.80', 75),
(60, 'LOOOOOLLLLLLLLL GET FUKT', 0, '0:00.45', 0),
(61, 'B. Uitenkans', 30, '0:52.23', 52),
(62, 'i whant to die', 44, '01:06.45', 66),
(63, 'i whant to die', 0, '0:00.77', 1),
(64, 'XDDDDD', 0, '0:00.44', 0),
(66, 'i whant too die \"justin\"', 0, '0:00.44', 0),
(67, 'XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 0, '0:00.39', 0),
(68, 'i died justin', 0, '0:00.34', 0),
(70, 'MemeKing420', 0, '0:00.10', 0),
(71, 'Anonymous', 0, 'We are many', 0),
(72, 'renstiano ronaldo', 9, '0:17.17', 17),
(73, 'kuthond', 8, '0:17.66', 18),
(74, 'Test1232232018', 3, '0:07.71', 8);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `highscores`
--
ALTER TABLE `highscores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT voor een tabel `highscores`
--
ALTER TABLE `highscores`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
