# RAS Football

Projecte de l'assignatura **M09 – Disseny d'interfícies web** de 2n de DAW.

**Autor:** Rasen Mediñà i Masdeu

## Descripció

Web personal sobre futbol, amb informació de jugadors i entrenadors històrics i actuals, rànquings i espais de debat. La idea és ampliar-la més endavant amb articles i opinions.

## Disseny i wireframes

Els wireframes i el prototip s'han fet amb **Figma**. S'han dissenyat dues vistes: **Home** i **Login/Register**.

- [Wireframe Home](docs/wireframes/home.png)
- [Wireframe Login/Register](docs/wireframes/login.png)
- [Projecte a Figma](https://www.figma.com/design/4kpCma7pdHpVRL4srsCxFT/Rasen_projecteFutbol)

La paleta combina blau marí, gris clar i blanc, inspirada en la Costa Brava. El logotip és de RAS Football. Els botons principals destaquen en blau viu.

## Desenvolupament

La web està feta amb **HTML5 i Tailwind CSS v4**, utilitzant **Visual Studio Code**. Per provar-la localment es pot utilitzar XAMPP o Live Server.

- **Home (`index.html`):** capçalera, cercador, menú, contingut destacat, jugadors, entrenadors, fòrum i footer.
- **Login/Register (`login.html`):** formularis d'inici de sessió i registre en una mateixa vista, amb camps obligatoris i enllaç per tornar a la Home.
- El menú inclou l'apartat de rànquings, pendent de desenvolupar.
- El disseny és adaptable: en pantalles petites, el fòrum apareix sota el contingut principal i els formularis es mostren un sota l'altre.
- El botó d'accés de la Home és gris clar per mantenir la coherència amb el logotip i el cercador.
- Els formularis són visuals i tenen validacions bàsiques d'HTML; encara no estan connectats al backend.

## Executar el projecte

Instal·lar les dependències amb `npm install` i generar els estils amb `npm run build`, o mantenir-los actualitzats amb `npm run dev`. Obrir `index.html` al navegador.

## Enllaços

- [Repositori GitHub](https://github.com/RasenMedina/Disseny_interficies_web)
- [Tailwind CSS](https://tailwindcss.com/)
