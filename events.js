// ingin mengambil input ketika click paragraf 3 maka warna background berubah
const p3 = document.querySelector('.p3')

function ubahWarna(){
    p3.style.backgroundColor = 'blue'
}
// Event Handler
// INline HTML Attribute : ini dia jadi atribut tapi tidak disarankan

const p2 = document.querySelector('.p2')
p2.onclick = ubahWarna

// addEventListener

const p4 = document.querySelector('section#b p')
p4.addEventListener('click',function(){
    alert('ok')
    const ul = document.querySelector('section#b ul')
    const libaru = document.createElement('li')
    const tekslibaru = document.createTextNode("INI LI BARU BRO")
    libaru.appendChild(tekslibaru)
    ul.appendChild(libaru)
})

// PERBEDAAN EVENT handler dengan add event listener adalah kalau pakai event handler perubahan pada event akan menimpa perubahan sebelumnya. kalau pada add event listerner dia akan menambahkan perubahan

p3.onclick=function(){
    p3.style.backgroundColor = "red"
}
p3.onclick=function(){
    p3.style.color = 'red'
}

//  Kalau 2 script diatas dijalan kan maka yg ditampilkan adalah yang terakhir

p3.addEventListener('click',function(){
    p3.style.backgroundColor = "red"
})
p3.addEventListener('click',function(){
    p3.style.color = 'green'
})