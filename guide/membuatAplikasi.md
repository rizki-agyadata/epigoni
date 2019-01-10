# Membuat Aplikasi Menggunakan Epigoni

## Membuat Aplikasi Baru

![Tombol Create New App](/images/tombolCreateNewApp.svg)

Setelah tampil form dialog **Create New Application**, isi dengan informasi yang diperlukan. Proses ini akan membentuk sebuah *file project* Epigoni (*default*-nya berekstensi **.epf**). Proses ini juga akan membuat dan/atau menyiapkan *database* untuk definisi aplikasi.

![Form Create New App](/images/formCreateNewApp.svg)

Data yang harus diisikan :

### Application

- *Application ID*, diisi dengan kode aplikasi.
- *Description*, diisi dengan deskripsi aplikasi, akan tampil sebagai *caption* dari *window* utama aplikasi.
- *Title*, diisi dengan judul aplikasi, akan tampil pada *form login* aplikasi.
- *Sub Title*, diisi dengan sub judul aplikasi, akan tampil pada *form login* aplikasi sebagai sub judul.

### User Management

* *User Management Type*,  diisi dengan salah satu pilihan yang tersedia:
    - *Simple*, setiap *user* dapat didefinisikan hak akses-nya terhadap menu aplikasi
    - *Single Role*, setiap *role* dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap *user* dapat di-assign ke satu atau lebih *role*, tetapi pada saat login akan ditanya role mana yang akan digunakan.
    - *Fixed Role*, setiap *role* dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap *user* hanya dapat di-assign ke sebuah *role* saja.
    - *Mixed Role*, setiap *role* dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap *user* bisa di-assign ke satu atau lebih *role*. Hak akses user terhadap menu aplikasi adalah gabungan dari hak akses semua *role* yang di-*assign* kepada *user* tersebut.
* *Administrator Password*, diisi dengan *password* untuk *user ADMINISTRATOR*. Ketikkan *password* tersebut dua kali sebagai konfirmasi. *Password* bersifat *case-sensitive*.
* *Developer Password*, diisi dengna *password* untuk *user DEVELOPER*. Ketikkan *password* tersebut dua kali sebagai konfirmasi. *Password* bersifat *case-sensitive*.

### Primary Database

* *Database Type*, diisi dengan jenis RDBMS yang digunakan untuk menyimpan definisi aplikasi.
* ~~*Create New Database* (Yes/No), beri tanda cek untuk membuat *database* definisi aplikasi. Hal ini hanya berlaku untuk Firebird. Untuk RDBMS lain, *database* harus sudah dibuat terlebih dahulu menggunakan aplikasi bantu yang disediakan oleh masing-masing RDBMS. Sebaiknya berupa database kosong.~~
* <span style="color:salmon"> *Host Name* </span>

* *Database (Database Metadata)*, nama *database* atau *alias*-nya yang akan digunakan sebagai *database* definisi aplikasi. Pada Firebird, jika database dibentuk oleh Epigoni, tuliskan nama *file database* yang akan dibentuk lengkap dengan lokasinya. Gunakan tombol *Browse* sebelah kanan *edit box* untuk memudahkan pengisian nama *file database*.

![Pop-Up Save As](/images/popUpSaveAs.svg)

* *User Name*, diisi dengan nama *user* untuk *login* ke *database* definisi aplikasi yang akan terbentuk/sudah tersedia.
* *Password*, diisi dengan *password* untuk ke database definisi aplikasi yang akan terbentuk/sudah tersedia.
* Tombol *Advanced* 

![Advanced Parameters](/images/advancedParameters.svg)

Jika *database* definisi aplikasi sudah tersedia, Anda bisa mencoba mengetes koneksi dengan menggunakan
tombol Test Connection yang tersedia.

### Project

* Project File Name, diisi dengan nama file project yang akan dibuat. Jika Anda menggunakan tombol Browse pada edit box Database Metadata, maka secara otomatis nama file project-nya akan terisi dengan nama dan lokasi yang sama dengan nama file database definisi aplikasi, hanya dengan ekstensi yang berbeda yaitu .epf.

Setelah semua informasi yang diperlukan telah diisi, klik tombol OK. Epigoni akan membuat file project dari aplikasi serta membentuk dan/atau menyiapkan database definisi aplikasi. Setelah selesai Epigoni akan membuka project tersebut dan menampilkan Application Info.

Proses pembuatan aplikasi baru telah selesai. Anda bisa memulai pendefinisian aplikasi.

## Menyiapkan Database

Sebelum membuat model data, Anda harus membuat koneksi ke database yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi database, yaitu koneksi ke database definisi aplikasi, bernama DEFAULT. Koneksi DEFAULT tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi database yang ada, pada tab Metadata, klik tombol Connection.

Untuk menambahkan koneksi ke database klik tombol Add. Beri nama koneksi pada edit box Connection Name dan pilih Connection Type dengan jenis RDBMS dari database yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi Database dengan nama database atau alias dari database yang akan diakses, isi User_Name dan Password dengan nama user dan password untuk login ke database tersebut.



### Membuat Koneksi Database

### ~~Membuat Database (khusus untuk Firebird)~~

### Membuat Obyek-Obyek Database

## Membuat Model Database

### Membuat Data Set

### Membuat Data Package

## Membuat Presentasi

### Membuat Form

### Membuat Report

## Merancang Menu Aplikasi

### Membuat Action

### Membuat Menu