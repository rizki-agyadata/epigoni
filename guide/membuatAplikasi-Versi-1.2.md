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

## Menyiapkan Database

### Membuat Koneksi Database

Sebelum membuat model data, Anda harus membuat koneksi ke database yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi database, yaitu koneksi ke database definisi aplikasi, bernama **DEFAULT**. Koneksi _DEFAULT_ tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi _database_ yang ada, pada tab **Metadata**, klik tombol **Connection**.

![DB Connections](/images/versi-1.2/dbConnections-V1.2.svg)

Untuk menambahkan koneksi ke _database_ klik tombol **Add**. Beri nama koneksi pada _edit box_ **Connection Name**
dan pilih **Connection Type** dengan jenis **RDBMS** dari _database_ yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi _Database_ dengan nama _database_ atau alias dari _database_ yang akan diakses, isi **User_Name** dan **Password** dengan nama _user_ dan _password_ untuk _login_ ke _database_ tersebut.

Lakukan **test** koneksi dengan menekan tombol **Test Connection**, sebelum menekan tombol **OK**.

Tombol **Edit** digunakan untuk mengedit koneksi jika Anda ingin melakukan perubahan.

Tombol **Delete** digunakan untuk menghapus koneksi.

### Membuat Database (khusus untuk Firebird)

Epigoni menyediakan fasilitas untuk membuat _database_ **Firebird** dan sekaligus mendaftarkannya ke dalam daftar koneksi lewat tombol **Create Database**.

![Create Firebird DB](/images/versi-1.2/createFirebirdDB-V1.2.svg)

Isikan nama koneksi pada _edit box_ **Connection Name** dan nama _file database_ Firebird yang akan dibuat pada _edit box Database_. Pilih Page Size yang diinginkan. Isi **nama user** dan **password**. Klik tombol OK.

### Membuat Obyek-Obyek Database

Pembuatan obyek-obyek _database_ seperti membuat _table_, _trigger_, _stored procedure_ dll, dapat dilakukan dengan menggunakan _software_ alat bantu yang disediakan oleh masing-masing **RDBMS**. Epigoni sendiri akan dilengkapi dengan alat bantu untuk membuat obyek-obyek _database_ khusus untuk Firebird.

## Membuat Model Data

### Membuat Data Set

Untuk melihat daftar definisi **Data Set**, pada tab **Metadata**, klik tombol **Dataset**.

![Datasets](/images/versi-1.2/datasets-V1.2.svg)

Untuk membuat definisi _data set_ baru, klik tombol **Add** untuk menampilkan _data set editor_.

![Datasets](/images/versi-1.2/datasetEditor-V1.2.svg)

Data yang diisikan:

- **Dataset Name**, diisi dengan nama _dataset_.
- **Dataset Title**, diisi dengan judul _dataset_.
- **Connection**, diisi dengan koneksi _database_ yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
- **Command Type**, diisi degan memilih salah satu jenis **Command Type**:
    - **Query**, _Command Text_ diisi dengan perintah **SQL Select**.
    - **Table**, _Command Text_ diisi dengan nama _tabel_.
    - **Stored Procedure**, _Command Text_ diisi dengan perintah _SQL Select_ yang mengandung _selectable stored procedure_.
- **Update Mode**, diisi dengan memilih salah satu _mode update_:
    - **Key Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal dari satu atau lebih _key field_ yang sebelumnya telah didefinisikan.
    - **Change Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal dari _field-field_ yang diubah nilainya oleh _user_ (pengguna) aplikasi.
    - **All Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal seluruh _field_ dari _data set_.
    - **Read Only**, _data set_ tidak akan di-_update_.
- **Update Table**, diisi dengan nama _tabel_ yang akan di-_update_ ketika data set di-_update_.
- **Packed Records**, diisi dengan jumlah satuan _record_ yang akan di-_fetch_ dari _database_ ketika data dibutuhkan. Jika jumlahnya -1 maka semua _record_ akan di-_fetch_ seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-_fetch_ dengan satuan sebesar jumlah tersebut.
- **Max Blob Size**, diisi dengan ukuran maksimal _field_ dengan tipe **BLOB** _(Binary Large Object)_ dalam satuan **KB**. Jika nilainya -1, maka tidak ada batasan ukuran.
- **Fetch Blobs On Demand**, jika di cek, maka _field BLOB_ yang ada pada _data set_ tidak akan langsung di-_fetch_. _Field_ tersebut hanya akan di-_fetch_ jika diperlukan, misalnya ketika akan ditampilkan ke layar.
- **Fetch Details On Demand**, jika di cek, maka jika _data set_ direlasikan dengan _data set_ lain dengan tipe relasi **Master-Detail**, data yang berasal dari _data set detail_ hanya akan di-_fetch_ ketika diperlukan.

Ada definisi lain yang harus di-_set_ yang berada pada tab-tab bagian bawah editor.

- **Command Text**, diisi sesuai dengan _Command Type_, seperti pada penjelasan di atas. Isi dari **Command Text** adalah inti dari definisi _data set_, mendeskripsikan data yang ingin dihasilkan. _Command Type_ umumnya adalah berupa _query_, jadi **Command Text** lebih sering identik dengan perintah **SQL Select**. Di sebelah kanan _editor Command Text_ terdapat alat bantu untuk membentuk SQL. Anda bisa mencoba men-_drag_ salah satu tabel yang terdapat pada daftar tabel ke editor Command Text.
- **Field**, berisi daftar field yang dibentuk oleh Command Text. Daftar field harus dibentuk, baik secara manual satu demi satu atau secara otomatis lewat tombol Generate All Fields yang telah disediakan. Anda bisa mengeset attribut dari setiap field yang didefinisikan.

![Generate Fields](/images/versi-1.2/generateFields-V1.2.svg)

- **Parameter**, berisi daftar dari parameter yang dibutuhkan **Command Text**, akan dijelaskan kemudian.
- **Index & Group**, berisi definisi pengurutan dan pengelompokkan data, akan dijelaskan kemudian.
- **Aggregate**, berisi definisi fungsi-fungsi aggregate yang ingin dikalkulasi dari data, akan dijelaskan kemudian.
- **Constraint**, berisi daftar batasan-batasan nilai yang dapat dimasukkan ke dalam sebuh _field_, akan dijelaskan kemudian.
- **Event**, untuk menuliskan kode _script_ yang akan dieksekusi ketika event tertentu dari data set terjadi, akan dijelaskan kemudian.
- **Description**, diisi dengan deskripsi dari _data set_ yang bersangkutan untuk kepentingan dokumentasi.

Setelah _data set_ didefinisikan Anda dapat melihat _preview_ dari _data set_ tersebut dengan meng-klik tombol **Preview** atau klik tombol **Run** jika hanya ingin mengeksekusi _Command Text_-nya saja.

Tampilan _Preview_

![Dataset Preview](/images/versi-1.2/datasetPreview-V1.2.svg)

Tampilan _Run_

![Dataset Run](/images/versi-1.2/datasetRun-V1.2.svg)

### Membuat Data Package

Untuk melihat daftar definisi _Data Package_, pada tab **Metadata**, klik tombol **Data Package**.

![Datapackage](/images/versi-1.2/datapackage-V1.2.svg)

Untuk membuat definisi Data Package baru, klik tombol **Add** untuk menampilkan Data Package _editor_.

![Datapackage Editor](/images/versi-1.2/datapackageEditor-V1.2.svg)

Disamping dengan cara di atas, untuk membuat Data Package dari Dataset yang telah dibuat, epigoni menyediakan juga cara yang lebih sederhana sebagai berikut:

1. Masuk ke daftar definisi Dataset
2. Sorot definisi Dataset yang akan dibuat definisi Data Package
3. Klik kanan pada definisi Dataset yang akan dibuat definisi Data Package

![Dataset To Datapackage](/images/versi-1.2/datasetToDatapackage3-V1.2.svg)

4. Pilih salah satu menu yang muncul, misal: **Create Data Package**

![Pilih Datapackage](/images/versi-1.2/pilihCreateDatapackage-V1.2.svg)

5. Isikan nama untuk definisi Data Package yang sedang dibuat, tekan tombol OK

![Isi Nama Datapackage](/images/versi-1.2/baseNameDatapackage-V1.2.svg)

6. Proses membuat definisi Data Package sudah berhasil, tekan tombol OK

![Informasi Done](/images/informasiDone.svg)

7. Untuk hasilnya bisa dilihat di daftar definisi Data Package, pada tab Metadata, klik tombol Data Package.

![Hasil Datapackage](/images/versi-1.2/hasilDatapackage-V1.2.svg)

## Membuat Presentasi

### Membuat Form

Untuk melihat daftar definisi _Form_, pada tab _Metadata_, klik menu **Form**.

![Daftar Form](/images/versi-1.2/daftarForm-V1.2.svg)

Untuk membuat definisi _form_ baru, klik tombol **Add** untuk menampilkan **Form Editor**.

![Add New Form](/images/versi-1.2/addNewForm-V1.2.svg)

### Membuat Report

Untuk melihat daftar definisi _Report_, pada tab _Metadata_, klik menu **Report**.

![Daftar Report](/images/versi-1.2/daftarReport-V1.2.svg)

Untuk membuat definisi _form_ baru, klik tombol **Add** untuk menampilkan **Form Editor**.

![Add New Report](/images/versi-1.2/addNewReport-V1.2.svg)

## Merancang Menu Aplikasi

### Membuat Action

Pembuatan action ini nantinya akan dihubungkan ke menu pada aplikasi untuk bisa dijalankan.

Untuk membuat Action ada 2 Cara, yaitu :

Cara pertama :

Jika _Dataset_ yang akan dibuat action sudah dibuat maka pada daftar _Dataset_, pilih _Dataset_ yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Data Package, Form and Action**.

![Create Action 1](/images/versi-1.2/createAction1-V1.2.svg)

Cara kedua :

Jika _Data Package_ yang akan dibuat _action_ sudah dibuat maka pada daftar _Data Package_, pilih **Data Package** yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Form and Action**.

![Create Action 2](/images/versi-1.2/createAction2-V1.2.svg)

_Action_ yang telah berhasil dibuat bisa dilihat pada daftar _Action_

![Hasil Action](/images/versi-1.2/hasilAction-V1.2.svg)

Pada daftar _Action_ ini dilengkapi dengan tombol **Execute** yang berfungsi untuk melihat hasil dari masing-masing _Action_ yang ada didaftar Action

### Membuat Menu

Untuk mendefinisikan menu pada aplikasi, Epigoni menyediakan beberapa jenis menu. Pada dasarnya menu aplikasi yang dibentuk ada dua tipe menu aplikasi yaitu menu berbasis ribbon dan menu tanpa ribbon. Epigoni menyediakan 4 buah jenis menu:

**Ribbon Menu**. Bila _ribbon menu_ ada isinya berarti aplikasi akan tampil dengan menu berbasis _Ribbon_. _Ribbon_
terdiri atas minimal 3 level, yaitu _Tab_, _Group_ dan _Menu_. Dua level pertama tidak dapat diisi dengan _action_,
melainkan membentuk _Tab_ dan _Group_. Level ke tiga dan selanjutnya (tidak terbatas) dapat diisi dengan _action_.

![Ribbon Menu](/images/versi-1.2/ribbonMenu-V1.2.svg)

**Application Menu**. Pada menu berbasis _ribbon_, _application menu_ akan muncul sebagai _application menu_-nya
_ribbon_. Pada menu tanpa _ribbon_, maka application menu akan menjadi _Menu Bar_ utama dari aplikasi. _Level tree Application menu_ tidak dibatasi.

![Application Menu](/images/versi-1.2/applicationMenu-V1.2.svg)

**Tool Bar**. Pada menu berbasis _ribbon_, menu akan tampil dalam _Quick Access Toolbar_. Pada menu tanpa _ribbon_,
_tool bar menu_ akan tampil sebagai _Tool Bar_ di bawah _Menu Bar_. _Level tree Tool Bar_ tidak dibatasi.

![Tool Bar Menu](/images/versi-1.2/toolBarMenu-V1.2.svg)

**Side Menu**, adalah menu yang akan muncul disamping. _Level tree Side Menu_ dibatasi minimal dan maksimal 2.

![Side Menu](/images/versi-1.2/sideMenu-V1.2.svg)

**Add**

Untuk menambahkan item menu yang sejajar (sibling).

Data yang diisikan adalah _Caption_, _Hint_, _Action_, serta _Image_. Untuk memilih image gunakan klik-kanan.

![Image Menu](/images/versi-1.2/imageMenu-V1.2.svg)

Bila **Caption** diisi dengan **"-"** , maka item menu akan menjadi separator.

![Strip Menu](/images/versi-1.2/stripMenu-V1.2.svg)

![Separator Menu](/images/versi-1.2/separatorMenu-V1.2.svg)

**Add Child**

Untuk menambahkan item menu yang menjadi sub menu dari item menu yang dipilih.

![Add Child Menu](/images/versi-1.2/addChildMenu-V1.2.svg)

**Edit**

Untuk mengubah item menu.

**Delete**

Untuk menghapus item menu.

**Up**

Untuk menggeser item menu ke atas dalam level yang sama.

![Up Menu](/images/versi-1.2/upMenu-V1.2.svg)

**Down**

Untuk menggeser item menu ke bawah dalam level yang sama.

![Down Menu](/images/versi-1.2/downMenu-V1.2.svg)