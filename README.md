#Search Engine - Aliansyah Firdaus

Aplikasi ini memiliki beberapa fitur
- Ketika di page search bisa secara leluasa mengganti category baik image, maupun search
- Pada search page, kita di tampilkan beberapa result image dari keyword yang kita ketikan
- Terdapat gif animate ketika kita ketik sesuatu di homepage
- Terdapat dropdown pada kolom search yang memudahkan kita untuk menampilkan category dari keyword yang kita ketikan
- News dapat kita hapus dan tambah, dengan menekan tombol bawah kanan
- Mobile friendly | Responsive

Tech
- Dibuat dengan menggunakan redux toolkit sehingga menggunakan slice
- Menggunakan redux-persist (Hanya) bagian News saja, sehingga tidak akan memakan banyak memory
- Pada bagian image dan result, ketika data di redux sudah ada, tidak akan di fetch ulang
- CSS Framework menggunakan bootstrap namun hanya di gunakan sedikit, mayoritas menggunakan CSS Murni
