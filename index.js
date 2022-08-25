function convertir(){
      let valore = document.getElementById("valor").value;
      let resultado = 0;
      let dolar = 290;
      let euro = 295;

      if (document.getElementById("uno").checked){
            resultado = valore * dolar;
            alert("el cambio de pesos a dolar es: $" + resultado);
      }
      else if (document.getElementById("dos").checked){
            resultado = valore * euro;
            alert("el cambio de pesos a euros es: $" + resultado);
      }
      else{
      alert("tienes que completar todos los requeriminetos")}
}