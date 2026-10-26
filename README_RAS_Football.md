# RAS Football

Projecte de l'assignatura **M09 – Disseny d'interfícies web** de 2n de DAW.

**Autor:** Rasen Mediñà i Masdeu

## Descripció

Web personal sobre futbol, amb informació de jugadors i entrenadors històrics i actuals, rànquings i espais de debat. La idea és ampliar-la més endavant amb articles i opinions.

## Disseny i wireframes

Els wireframes i el prototip s'han fet amb **Figma**. S'han dissenyat dues vistes: **Home** i **Login/Register**.

- [Wireframe Home](docs/wireframes/home.png)
- [Wireframe Login/Register](docs/wireframes/login-register.png)
- [Projecte a Figma](https://www.figma.com/design/4kpCma7pdHpVRL4srsCxFT/Rasen_projecteFutbol)

La paleta combina blau marí, gris clar i blanc, inspirada en la Costa Brava. El logotip és de RAS Football.

## Desenvolupament

La web es construeix amb **HTML5 i Tailwind CSS v4**, utilitzant **Visual Studio Code**. Per provar-la localment es pot utilitzar XAMPP o Live Server.

- **Home:** capçalera, cercador, menú, contingut destacat, jugadors, entrenadors, fòrum i footer.
- **Login/Register:** pendent de codificar a partir del wireframe.
- El menú inclou l'apartat de rànquings, però de moment no hi ha una secció pròpia a la Home.
- En pantalles petites, el fòrum apareix sota el contingut principal.
- S'ha canviat el botó d'inici de sessió de blau a gris clar per mantenir la coherència amb el logotip i el cercador.

## Executar el projecte

Després d'instal·lar les dependències amb `npm install`, generar els estils amb `npm run build` o mantenir-los actualitzats amb `npm run dev`. Obrir `index.html` al navegador.

## Enllaços

- [Repositori GitHub](https://github.com/RasenMedina/Disseny_interficies_web)
- [Tailwind CSS](https://tailwindcss.com/)
