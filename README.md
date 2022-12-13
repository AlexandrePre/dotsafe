# dotsafe


Test technique pour le stage chez dotsafe 

L'objet de l'exercice est de démontrer votre capacité à exploiter une API existante. En l'espèce, il s'agit de consommer les données exposées par l'API publique du pont Chaban.
URL de l'API :  https://opendata.bordeaux-metropole.fr/explore/dataset/previsions_pont_chaban/api/
NB : au besoin il vous est possible via cette page d'exporter un JSON pour servir de dataset "statique"

Ci-après, un descriptif de l'attendu :
Afficher une liste exhaustive des fermetures du pont Chaban Delmas
 - La liste doit être triée par ordre chronologique à compter de la date du jour
         - Chaque item "fermeture" de la liste doit afficher les informations suivantes :
* date et heure de fermeture à la circulation
* date et heure de réouverture à la circulation
        * raison de la fermeture (nom du bateau quand disponible)
Afficher un compteur quelque part sur la page indiquant : "Dernière fermeture le XJ Xh Xmin Xsec"

 Si vous souhaitez aller plus loin :
Mettre en place
- un "filtre par date" : il doit permettre de consulter les fermetures d'un jour précis
- un "filtre par raison" : il doit permettre de ne faire apparaitre que les fermetures concernant un bateau donné ou une maintenance

Contraintes techniques :

En fonction de votre parcours d'étude (plutôt JS ou plutôt PHP) nous vous proposons de réaliser ce test sous l'une ou l'autre des formes suivantes :
- single page application basée sur un framework javascript (React, Vue, Angular...) + Style basé sur Boostrap ou Tailwind
- Application PHP (idéalement sur base Symfony + twig) + Style basé sur Boostrap ou Tailwind
