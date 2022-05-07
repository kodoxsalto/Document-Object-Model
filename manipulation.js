// ELEMENT
// // // Inner HTML
// // // Dalam teks html selain teks kita juga bisa memasukkan tag html lagi
// const judul = document.getElementById('judul')
// judul.innerHTML="<i> Maulana Reza </i>"
// const sectiona = document.querySelector('section#a')
// sectiona.innerHTML = "Hello World"
// // // Dalam section akan diganti semuanya 

// // // Style
// const judul = document.querySelector("#judul")
// judul.style.color="blue"

// // setAtribut
// // element.getAtribute
// // element.
// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('name','reza')
// // Ada atribut baru namanya name dengan nilai reza. bisa diliat di inspect
// const a = document.querySelector("section#a a")
// a.setAttribute("id","link")
// // Untuk mengetahui atribut sekarang yg ada di html
// // DUA DIBAWAH INI DITULIS DI CONSOLE YAA
// a.getAttribute("href")
// a.removeAttribute('href')

// // class list
// const p2 = document.querySelector('.p2')
// // Buat ngeganti atribut kelas
// // p2.setAttribute('class',"label")
// // Kalau mau menamnbah kelas bisa pakai classlist bisa pakai classlist.add().remove().toggle().item().contains().replace()
// // DI KETIK DI CONSOLE YAA
// p2.classList.add('label')
// p2.classList.remove('label')
// // toggle kalau misal dia gaada class nya bisa ditambahin kalo ada nanti dihapus kaya tombol on off
// p2.classList.toggle('label') 
// // item untuk mengetahui nama kelas dari elemen ke berapa semacam indeks
// p2.classList.item(1)
// // contain buat apakah ada
// p2.classList.contains("label")
// // Mengganti class
// p2.classList.replace("label","labelbaru")

// NODE
// Document.createElement()
// Document.createTextNode()
// Buat Element Baru
const pbaru = document.createElement('p')
const tekspbaru = document.createTextNode("Paragraf Baru")
// simpan tulisan dalam paragraf 
pbaru.appendChild(tekspbaru)
// simpan p baru di akhir section A
const secA = document.getElementById('a')
secA.appendChild(pbaru)
// Append Child itu menyimpan di elemene terakhir
// Kalau ga mau di akhir bisa pakai dibawah 
const libaru = document.createElement('li')
const liteks = document.createTextNode("LI BARU BRO")

libaru.appendChild(liteks)
// menangkap parent nya
const ul = document.querySelector('section#b ul')
const li2 = document.querySelector('section#b ul li:nth-child(2)')

ul.insertBefore(libaru,li2)
// *di ul kita insert li baru sebelum li 2

// Remove 
const link = document.getElementsByTagName('a')[0]
secA.removeChild(link)

// Replace

const secB = document.getElementById('b')
const p4 = secB.querySelector('p')
const h2baru = document.createElement("h2")
const teksh2 = document.createTextNode("JUDUL BARU !")
h2baru.appendChild(teksh2)

secB.replaceChild(h2baru,p4)