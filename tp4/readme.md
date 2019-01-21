<p align="center">
  <a href="https://3ir2019.slack.com">
     <img src="https://github.com/bilelz/tpaw/blob/master/galilee.png?raw=true" alt="Logo Master" width=100/>
  </a>  
  <br/>
  Master 3IR² | <a href="https://3ir2019.slack.com/messages/aw">3ir2019.slack.com</a>
<h3 align="center">TP AW #4 : 
Ajout de fonctionnalités HTML5 au formulaire
</h3>
</p>

### Prérequis (⚠️ important)

* Lire **tout** l'énnoncé avant de commencer le TP.

❓❓Si vous avez des questions ou des erreurs dans votre code : 
* formater (indenter) bien votre code (raccourci Visual Studio Code : Ctrl + K puis Ctrl + F)
* demander à Google 🔍
* demander à vos camarades 👩‍🎓👨‍🎓
* demander au professeur 🙋

Table des matières
=================

  1. [Objectif du TP](#1-objectif-du-tp)
  2. [Plateforme de dév](#2-plateforme-de-dév-idem-que-le-tp3)
  3. [Geolocalisation HTML5](#3-geolocalisation-html5)
  4. [Afficher le nombre de caractère saisie (jQuery)](#4-afficher-le-nombre-de-caractère-saisie-jquery)
  5. [Ajouter le contact à un tableau JSON (store.js)](#5-ajouter-le-contact-à-un-tableau-json-storejs)
  6. [Afficher la liste des contacts dans un tableau HTML](#6-afficher-la-liste-des-contacts-dans-un-tableau-html)
  
  
## 1. Objectif du TP
* HTML5: Commencer à utiliser les capacités avancées (géolocalisation)
* JS : écrire un code modulaire (
  * Article à ce sujet: https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
* JS : Manipuler des objets JSON 
  * voir documentation sur  https://www.w3schools.com/js/js_json_intro.asp



Reprenez le formulaire du [TP 3](../tp3/) ou télécharger ce code HTML [tp4_html.zip](https://github.com/bilelz/tpaw/raw/master/tp4/tp4_html.zip):
* Nom
* Prénom 
* Date de naissance
* Adresse postale
* Adresse mail

![Texte alternatif](tp4.PNG "texte pour le titre, facultatif")   

## 2. Plateforme de dév (idem que le TP3)

Votre répertoire doit ressembler à ça:


```
tp3/
├── index.html
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
└── js/
    ├── bootstrap.js
    └── bootstrap.min.js
    ├── popper.min.js
    └── jquery-3.2.1.slim.min.js   
    └── form-jquery-validation.js
    └── gps.js
    └── store.js
```

* Clé Google Map Image à utiliser
```AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg```

Exemple avec une image centrée sur Paris: <a href="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">
<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt='google map' width=200/>
</a><br/>
```https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg```


## 3. Geolocalisation HTML5
  * L'API Géolocalisation HTML5  est utilisée pour obtenir la position géographique d'un utilisateur (si il utilise un navigateur récent)
  
  1. Dans un fichier **gps.js**, copier le code ci-dessous: 
```javascript

// demande de la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

// Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
    
    $("#map").html("<img src='"+img_url+"'>");
}

// Au cas ou l'utilisateur refuse
// Ou si une erreur arrive
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("An unknown error occurred.");
            break;
    }
}
```

  2. Ajouter un bouton à coté du champ de saisie de l’adresse 

  3. en JQuery, dans votre script **form-jquery-validation.js** intercepter le click sur ce bouton et utiliser la fonction getLocation() pour demander la géolocalisation à l’utilisateur

  * documentation et fonction JS de géolocalisation disponibles ici : http://www.w3schools.com/html/html5_geolocation.asp
  
La géolocalisation vous donnera la latitude et la longitude de l’utilsateur.

Afficher une image (dans le code JS ci-dessus ça s'affiche dans une DIV avec id=map) de Google Maps centrée sur ces coordonnées GPS (documentation de l’API google maps)

URL de l’image : https://maps.googleapis.com/maps/api/staticmap?markers=latitude,longitude&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg

## 4. Afficher le nombre de caractère saisie (jQuery)
![Texte alternatif](image3.png "texte pour le titre, facultatif")
A coté de chaque champ de saisie, afficher le nombre de caractère saisie en temps réel, c’est-à-dire à chaque fois que l’utilisateur change le contenu du champ.
Events jQuery relatifs à la saisie : https://api.jquery.com/category/events/keyboard-events/

<!---
## 5. Stockage du formulaire dans le LocalStorage du navigateur

![Texte alternatif](image1.png "texte pour le titre, facultatif")   

1. Au click sur le bouton “Valider” du formulaire, enregistrer les valeurs de tous les champs de saisie dans le localStorage du navigateur
2. Afficher un message “Bravo! Le formulaire est sauvegardé.” à l’utilisateur.

HTML Local storage permet de stocker des données dans le navigateur web (comme les cookies) via une combinaison clé:valeur (key:value)
Exemple

* Pour stocker la valeur “smith” dans la clé “lastname” :  
```js
localStorage.setItem("lastname", "Smith");
```
* Pour lire la valeur de la clé  :
```js
var prenom = localStorage.getItem("lastname");
```

* Documentation : http://www.w3schools.com/html/html5_webstorage.asp
-->

## 5. ajouter le contact à un tableau JSON (store.js)
  1. créer un fichier ***store.js**
    * Ce script stockera le contact dans une liste JSON
    * Les méthodes disponibles seront:
      * Ajout d'un contact à la liste **contactStore.add(_name, _firsname, _date, _adress, _mail);**
      * Listing des contacts **contactStore.getList();**
 
 * Code à reprendre:
```js
/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    
  // variable privée
  var contactList = [];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    add: function(_name, _firsname, _date, _adress, _mail) {
      var contact = { name: _name,
                      firstname: _firsname,
                      date: _date,
                      adress: _adress,
                      mail: _mail
      };
      // ajout du contact à la liste
      contactList.push(contact);
        
      return contactList;
    },

    getList: function() {
      return contactList;
    }
  }
})();
```
    
  2. Si le formulaire est valide, appeler la méthode qui ajoute toutes les informations au tableau JSON  


## 6. Afficher la liste des contacts dans un tableau HTML
![Texte alternatif](tp4.PNG "texte pour le titre, facultatif")   

  1. Si le formulaire est valide, ajouter toutes les informations au tableau "Liste de contacts"
  
* Pour faire une boucle sur une liste JSON:

```js
for(var index in contactList){
  console.log(contactList[index].name);
}
```

* Exemple de code pour ajout un contact au tableau:
```js
  document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
  '<tr><td>'+nom+'</td><td>'+prenom+'</td><td>';
  // CODE à compléter pour insérer les autres données
```

