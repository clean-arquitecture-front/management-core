npm i -g yalc
en el proyecto libreria ejecutar yalc add nombre del proyecto
    "management-core": "file:.yalc/management-core",
    "management-core": "git+https://github.com/lamatcalderon/management-core.git",

primero publicamos el proyecto yalc publish
segundo vamos al proyecto principal y agregamos yalc add management-core
yalc link management-core
yalc push
yalc remove package-b

primero construir la libreria antes de publicarlo en yalc
ejecutar yalc publish --watch en la libreria
ejecutar yalc add management-core
npm i
ejecutar yalc link management-core

luego en la libreria ejecutar yalc push y automaticamente se refrescara en el proyecto principal
https://dev.to/zachsnoek/using-local-npm-packages-as-dependencies-with-yalc-2g56