function validation(){
  // initialisation des variables auxquelles on affecte la methode getElementById
  var firstNum = document.getElementById('firstNumber').value;
  var secondNum = document.getElementById('secondNumber').value;
  // initialisation d'une variable contenant le resultat de la multiplication des 2 précédentes variables
  var result = parseInt(firstNum) * (secondNum);
// si la variable calcul n'est pas  un nombre j'affiche un message d'erreur
  if (isNaN(result)){
    alert('Veuillez entrer des nombres !');
  }else{
    alert("Le résultat est : " + result);
  }
}
