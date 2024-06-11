export const json = {
    "pages": [{
      "elements": [{
        "type": "matrix",
        "name": "qualities",
        "title": "Scoring",
        "columns": [{
          "value": 5,
          "text": "Aucun"
        }, {
          "value": 4,
          "text": "Modeste"
        }, {
          "value": 3,
          "text": "Défini"
        }, {
          "value": 2,
          "text": "Maitrisé"
        }, {
          "value": 1,
          "text": "Optimisé"
        }],
        "rows": [{
          "text": "Environnement d'Hébergement"
        }, {
          "text": "Réseaux et télécommunications"
        }, {
          "text": "Stockage et sauvegarde"
        },{
          "text": "Serveurs et Virtualisation "
        }, {
          "text": " Monitoring "
        }]
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "price-comparison",
        "title": "Compared to our competitors, do you feel our product is:",
        "choices": [
          "Less expensive",
          "Priced about the same",
          "More expensive",
          "Not sure"
        ]
      }, {
        "type": "radiogroup",
        "name": "current-price",
        "title": "Do you feel our current price is merited by our product?",
        "choices": [
          "correct|Yes, the price is about right",
          "low|No, the price is too low for your product",
          "high|No, the price is too high for your product"
        ]
      }, {
        "type": "multipletext",
        "name": "price-limits",
        "title": "What is the highest and lowest price you would pay for a product like ours?",
        "items": [{
          "name": "highest",
          "title": "Highest"
        }, {
          "name": "lowest",
          "title": "Lowest"
        }]
      }]
    }, {
      "elements": [{
        "type": "text",
        "name": "email",
        "title": "Please leave your email address if you would like us to contact you."
      }]
    }],
    "showQuestionNumbers": false
  };