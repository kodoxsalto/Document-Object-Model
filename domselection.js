// DOM SELECTION

// getElementById()
// Harus ada Node root nya dulu misal document.getElementByID()
const judul = document.getElementById('judul'); 
// harus disimpan dalam variabel dulu
// Kalau diketik di console nanti keluar element nya dia terdiri dari apa aja misal judul terdiri dari h1 nanti ditampilkan 
judul.style.color = 'red'
judul.style.backgroundColor = "#dddd"
// Kalau atribut css nya lebih dari 1 kata pakenya camel case
judul.innerHTML = "Maulana Reza"
// Bisa ganti teks di dalam html juga pake innerhtml

// getElementsByTagName()
//Harus ada node root nya dulu misal document.getElementsByID()
const paragraf = document.getElementsByTagName('p')
// Mengembalikan HTML COLLECTION (Mirip dengan array)
// HTMLCollectrion(4) -> ada 4 tag yang terseleksi , ada indeks dimulai dari 0
// Kalau mau styling harus di akses indeksnya dulu karena getelemntsbytagname ini bentuknya array
paragraf[0].style.backgroundColor="red" 
// kita bisa juga melooping tiap tiap element
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor="green"
    
}
// Cara lain akses indeks
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize='72px'

// getElementsByClassName()
// Mengembalikan HTML Collection 
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = " tesss"

// queySelector()
// query = menanyakan mengenai selector. sama kaya selector CSS
// mengembalikan 1 elemen
const p4 = document.querySelector('#b p')
// dari id B carikan tag P
p4.style.color = "blue"
p4.style.fontSize = '30px'
//jika mendapatkan banyak paragraf akan diambil paragraf pertama
const pp = document.querySelector('p')
pp.innerHTML = "cobaaaa"

// querySelectorAll()
const p = document.querySelectorAll('p')
// Kalau mau memanipulasi perlu di parsing indeksnya ex [0].[1] dst

// #CATATAN
// Kita juga bisa mengurangi scoope pencarian dengan mengganti node root nya

const secb = document.getElementById('b')
const p41 = secb.querySelectorAll('p')[0]
p41.style.backgroundColor = 'red'
