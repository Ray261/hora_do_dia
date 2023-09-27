function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
//var hora = 19
msg.innerHTML = `Agora é ${hora} horas`
if (hora >= 0 && hora < 12){
   //BOM DIA!!!
   img.src = 'pexels-miguel-á-padriñán-19670.jpg'
   document.body.style.background = ' rgb(146, 183, 201)'
}else if (hora >= 12 && hora < 18){
    //BOA TARDE!!!
    img.src = 'pexels-sebastian-arie-voortman-189349.jpg'
    document.body.style.background = ' rgb(240, 177, 83)'
}else {
    //BOA NOITE!!!
    img.src = 'pexels-eberhard-grossgasteiger-2310642.jpg'
    document.body.style.background = ' rgb(51, 49, 85)'
}

}