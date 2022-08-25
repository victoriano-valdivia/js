function convertir(){
      var valore = parseInt(document.getElementById("valor").Value);
      var resultado = 0;
      var dolar = 290;
      var euro = 295;
      if (document.getElementById("uno").checked){
            resultado = valore / dolar;
            alert("el cambio de pesos a dolar es:" + resultado);
      }
else if (document.getElementById("dos").checked){
      resultado = valore / euro;
      alert("el cambio de pesos a euros es:" + resultado);
}
else{
      alert("tienes que completar todos los requeriminetos")}
}
