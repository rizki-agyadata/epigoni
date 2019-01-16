# Membuat Aplikasi (Versi 1.2)

## Membuat Aplikasi Baru

Untuk membuat sebuah aplikasi pada Epigoni :

- Dari tab *Builder*, Klik tombol *New Application*

Setelah tampil form dialog *Create New Application*, isi dengan informasi yang diperlukan. Proses ini akan membentuk sebuah *file project* Epigoni (*default*-nya berekstensi **.epf**). Proses ini juga akan membuat dan/atau menyiapkan *database* untuk definisi aplikasi.

![Create New App](/images/versi-1.2/formCreateNewApp-V1.2.svg)

Data yang harus diisikan :

### Application

- _**Application ID**_, diisi dengan kode aplikasi.
- _**Description**_, diisi dengan deskripsi aplikasi, akan tampil sebagai caption dari window utama aplikasi.
- _**Title**_, diisi dengan judul aplikasi, akan tampil pada form login aplikasi.
- _**Sub Title**_, diisi dengan sub judul aplikasi, akan tampil pada form login aplikasi sebagai sub judul.

### User Management

- _**User Management Type**_, diisi dengan salah satu pilihan yang tersedia:
    - _**Simple**_, setiap *user* dapat didefinisikan hak akses-nya terhadap menu aplikasi Create New Database (Firebird Only) di Cek Klik disini untuk memberikan nama serta menyimpan file “Database Metadata” .
    - _**Single Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap user dapat di-assign ke satu atau lebih role, tetapi pada saat login akan ditanya role mana yang akan digunakan.
    - _**Fixed Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap userhanya dapat di-assign ke sebuah role saja.
    - _**Mixed Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap user bisa di-assign ke satu atau lebih role. Hak akses user terhadap menu aplikasi adalah gabungandari hak akses semua role yang di-assign kepada user tersebut.

- _**Administrator Password**_, diisi dengan password untuk user ADMINISTRATOR. Ketikkan password tersebut dua kali sebagai konfirmasi. Password bersifat case-sensitive.

### Metadata

- _**Database Type**_, diisi dengan jenis RDBMS yang digunakan untuk menyimpan definisi aplikasi.
- _**Create New Database (Yes/No)**_, beri tanda cek untuk membuat database definisi aplikasi. Hal ini hanya berlaku untuk Firebird. Untuk RDBMS lain, database harus sudah dibuat terlebih dahulu menggunakan aplikasi bantu yang disediakan oleh masing-masing RDBMS. Sebaiknya berupa database kosong.
- _**Database Metadata**_, nama database atau alias-nya yang akan digunakan sebagai dababase definisi aplikasi. Pada Firebird, jika database dibentuk oleh Epigoni, tuliskan nama file database yang akan dibentuk lengkap dengan lokasinya. Gunakan tombol Browse sebelah kanan edit box untuk memudahkan pengisian nama file database.
- _**User Name**_, diisi dengan nama user untuk login ke database definisi aplikasi yang akan terbentuk/sudah tersedia.
- _**Password**_, diisi dengan password untuk ke database definisi aplikasi yang akan terbentuk/sudah tersedia.

Jika _database_ definisi aplikasi sudah tersedia, Anda bisa mencoba mengetes koneksi dengan menggunakan tombol **Test Connection** yang tersedia.

![Dialog Save As](/images/versi-1.2/dialogSaveAs-V1.2.svg)

### Project

- _**Project File Name**_, diisi dengan nama _file project_ yang akan dibuat. Jika Anda menggunakan tombol **Browse** pada _edit box_ **Database Metadata**, maka secara otomatis nama _file project_-nya akan terisi dengan nama dan lokasi yang sama dengan nama _file database_ definisi aplikasi, hanya dengan ekstensi yang berbeda yaitu **.epf**.

![Project EPF](/images/versi-1.2/projectEpf-V1.2.svg)

Setelah semua informasi yang diperlukan telah diisi, klik tombol OK. Epigoni akan membuat file project dari aplikasi serta membentuk dan/atau menyiapkan database definisi aplikasi. Setelah selesai Epigoni akan membuka project tersebut dan menampilkan Application Info.

![Project EPF](/images/versi-1.2/projectIcon-V1.2.svg)

Proses pembuatan aplikasi baru telah selesai. Anda bisa memulai pendefinisian aplikasi.
