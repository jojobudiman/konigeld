-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 16, 2019 at 04:52 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `konigeld`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `fname_admin` text NOT NULL,
  `lname_admin` text NOT NULL,
  `email_admin` text NOT NULL,
  `pass_admin` text NOT NULL,
  `status_admin` int(11) NOT NULL,
  `hp_admin` text NOT NULL,
  `alamat_admin` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `fname_admin`, `lname_admin`, `email_admin`, `pass_admin`, `status_admin`, `hp_admin`, `alamat_admin`) VALUES
(1, 'Jovan', 'Hidayat', 'hidayatjovan@gmail.com', 'b59c6e9b344bae1a36fe427a42889265', 1, '081212841621', 'Citra Raya'),
(2, 'Jonathan', 'Budiman', 'jojobudiman@gmail.com', '101a6ec9f938885df0a44f20458d2eb4', 1, '087868888866', 'XD Street');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `email` text NOT NULL,
  `isi` text NOT NULL,
  `date_contact` text NOT NULL,
  `status_contact` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail_modifier`
--

CREATE TABLE `detail_modifier` (
  `id_modifier` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail_modifier`
--

INSERT INTO `detail_modifier` (`id_modifier`, `id_produk`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `detail_transaksi`
--

CREATE TABLE `detail_transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `jangka_periode` text NOT NULL,
  `tanggal_awal` date NOT NULL,
  `tanggal_akhir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail_transaksi`
--

INSERT INTO `detail_transaksi` (`id_transaksi`, `id_kategori`, `jangka_periode`, `tanggal_awal`, `tanggal_akhir`) VALUES
(1, 2, '12 month', '2019-04-07', '2020-04-07');

-- --------------------------------------------------------

--
-- Table structure for table `diskon`
--

CREATE TABLE `diskon` (
  `id_diskon` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `nama_diskon` text NOT NULL,
  `jumlah` double NOT NULL,
  `status_diskon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `diskon`
--

INSERT INTO `diskon` (`id_diskon`, `id_merchant`, `nama_diskon`, `jumlah`, `status_diskon`) VALUES
(1, 1, 'Hari Buruh Nasional', 0.2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id_history` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `total` text NOT NULL,
  `status_history` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `history_transaksi`
--

CREATE TABLE `history_transaksi` (
  `id_history_transaksi` int(11) NOT NULL,
  `id_transaksi` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `total` text NOT NULL,
  `status_history` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jenis_produk`
--

CREATE TABLE `jenis_produk` (
  `id_jenis_p` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `nama_jenis` text NOT NULL,
  `status_jenis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jenis_produk`
--

INSERT INTO `jenis_produk` (`id_jenis_p`, `id_merchant`, `nama_jenis`, `status_jenis`) VALUES
(1, 1, 'Foods', 1),
(2, 1, 'Drinks', 1);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` text NOT NULL,
  `batas_cabang` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `status_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `batas_cabang`, `harga`, `status_kategori`) VALUES
(1, 'Entry', 1, 25000, 1),
(2, 'Junior', 5, 75000, 1),
(3, 'Senior', 999999, 150000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `langganan`
--

CREATE TABLE `langganan` (
  `id_langganan` int(11) NOT NULL,
  `harga_langganan` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `desain_bon` text NOT NULL,
  `jenis_produk` text NOT NULL,
  `status_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `merchant`
--

CREATE TABLE `merchant` (
  `id_merchant` int(11) NOT NULL,
  `fname_merchant` text NOT NULL,
  `lname_merchant` text NOT NULL,
  `nama_bisnis` text NOT NULL,
  `tahun_mulai_bisnis` text NOT NULL,
  `tipe_bisnis` text NOT NULL,
  `monthly_revenue` text NOT NULL,
  `lokasi_bisnis` text NOT NULL,
  `hp_merchant` text NOT NULL,
  `email_merchant` text NOT NULL,
  `pass_merchant` text NOT NULL,
  `status_merchant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `merchant`
--

INSERT INTO `merchant` (`id_merchant`, `fname_merchant`, `lname_merchant`, `nama_bisnis`, `tahun_mulai_bisnis`, `tipe_bisnis`, `monthly_revenue`, `lokasi_bisnis`, `hp_merchant`, `email_merchant`, `pass_merchant`, `status_merchant`) VALUES
(1, 'Jovan', 'Hidayat', 'Martabak Enak', '2014', 'restaurant', '1500_3000', 'JKT', '081212841621', 'hidayatjovan@gmail.com', 'af288a5c008c7fc65f215853051e6f18', 1);

-- --------------------------------------------------------

--
-- Table structure for table `modifier`
--

CREATE TABLE `modifier` (
  `id_modifier` int(11) NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `nama_modifier` text NOT NULL,
  `harga_modifier` text NOT NULL,
  `status_modifier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modifier`
--

INSERT INTO `modifier` (`id_modifier`, `id_outlet`, `nama_modifier`, `harga_modifier`, `status_modifier`) VALUES
(1, 1, 'Paket Super Hemat', '10000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id_order` int(11) NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `tanggal_order` date NOT NULL,
  `waktu_order` text NOT NULL,
  `total_order` text NOT NULL,
  `status_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id_details` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `id_diskon` int(11) NOT NULL,
  `id_paket` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `outlet_merchant`
--

CREATE TABLE `outlet_merchant` (
  `id_outlet` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `alamat_outlet` text NOT NULL,
  `hp_outlet` text NOT NULL,
  `kota` text NOT NULL,
  `provinsi_outlet` text NOT NULL,
  `kodepos_outlet` text NOT NULL,
  `status_outlet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `outlet_merchant`
--

INSERT INTO `outlet_merchant` (`id_outlet`, `id_merchant`, `alamat_outlet`, `hp_outlet`, `kota`, `provinsi_outlet`, `kodepos_outlet`, `status_outlet`) VALUES
(1, 1, 'Jl. Gunung Sahari Ancol, Jakarta Utara', '081212841621', 'Jakarta Utara', 'DKI Jakarta', '15150', 1);

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `id_jenis_p` int(11) NOT NULL,
  `nama_produk` text NOT NULL,
  `harga` text NOT NULL,
  `stok` int(11) NOT NULL,
  `status_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `id_outlet`, `id_jenis_p`, `nama_produk`, `harga`, `stok`, `status_produk`) VALUES
(1, 1, 1, 'Bakso Goreng', '7000', 10, 1),
(2, 1, 2, 'Lemon Tea', '5000', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `temporary_order`
--

CREATE TABLE `temporary_order` (
  `id_temporary` int(11) NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_produk` text NOT NULL,
  `id_modifier` text NOT NULL,
  `id_diskon` text NOT NULL,
  `total` text NOT NULL,
  `date` text NOT NULL,
  `status_temp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `tgl_transaksi` date NOT NULL,
  `total_transaksi` text NOT NULL,
  `tipe_transaksi` text NOT NULL,
  `status_transaksi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `id_admin`, `id_merchant`, `tgl_transaksi`, `total_transaksi`, `tipe_transaksi`, `status_transaksi`) VALUES
(1, 0, 1, '2019-04-07', '720000', 'Transfer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `fname_user` text NOT NULL,
  `lname_user` text NOT NULL,
  `email_user` text NOT NULL,
  `pass_user` text NOT NULL,
  `jabatan` text NOT NULL,
  `hp_user` text NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `id_merchant` int(11) NOT NULL,
  `status_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `fname_user`, `lname_user`, `email_user`, `pass_user`, `jabatan`, `hp_user`, `id_outlet`, `id_merchant`, `status_user`) VALUES
(1, 'Alvira', 'Putri', 'alvirap7@gmail.com', '202cb962ac59075b964b07152d234b70', 'Cashier', '08131321312', 1, 1, 1),
(2, 'Eugenius', 'Pranoto', 'eugeniuspranoto98@gmail.com', '9741da9f7cdd416b0c4b63811770bd6e', 'Janitor', '08134234242', 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Indexes for table `diskon`
--
ALTER TABLE `diskon`
  ADD PRIMARY KEY (`id_diskon`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`);

--
-- Indexes for table `history_transaksi`
--
ALTER TABLE `history_transaksi`
  ADD PRIMARY KEY (`id_history_transaksi`);

--
-- Indexes for table `jenis_produk`
--
ALTER TABLE `jenis_produk`
  ADD PRIMARY KEY (`id_jenis_p`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `langganan`
--
ALTER TABLE `langganan`
  ADD PRIMARY KEY (`id_langganan`);

--
-- Indexes for table `merchant`
--
ALTER TABLE `merchant`
  ADD PRIMARY KEY (`id_merchant`);

--
-- Indexes for table `modifier`
--
ALTER TABLE `modifier`
  ADD PRIMARY KEY (`id_modifier`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id_details`);

--
-- Indexes for table `outlet_merchant`
--
ALTER TABLE `outlet_merchant`
  ADD PRIMARY KEY (`id_outlet`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indexes for table `temporary_order`
--
ALTER TABLE `temporary_order`
  ADD PRIMARY KEY (`id_temporary`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diskon`
--
ALTER TABLE `diskon`
  MODIFY `id_diskon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history_transaksi`
--
ALTER TABLE `history_transaksi`
  MODIFY `id_history_transaksi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jenis_produk`
--
ALTER TABLE `jenis_produk`
  MODIFY `id_jenis_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `langganan`
--
ALTER TABLE `langganan`
  MODIFY `id_langganan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `merchant`
--
ALTER TABLE `merchant`
  MODIFY `id_merchant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `modifier`
--
ALTER TABLE `modifier`
  MODIFY `id_modifier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id_details` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `outlet_merchant`
--
ALTER TABLE `outlet_merchant`
  MODIFY `id_outlet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `temporary_order`
--
ALTER TABLE `temporary_order`
  MODIFY `id_temporary` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
