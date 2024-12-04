function verificar(){
    let data= new Date()
    let ano = data.getFullYear()
    let formularioAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(formularioAno.value.length == 0 || Number(formularioAno.value)> ano){
       window.alert(`[Erro] Verifique os dados e tente novamente`)
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formularioAno.value)
        let genero = ``

         if(fsex[0].checked){
             genero = `Homem`
         } else if (fsex[1].checked){
            genero = `Mulher`
         }
         res.style.textAlign = `center`
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}