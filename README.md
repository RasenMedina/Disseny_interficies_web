# RAS Football

**RAS Football** és un projecte web personal dedicat al futbol professional, tant històric com actual. L'objectiu és oferir informació contrastada sobre jugadors i entrenadors, elaborar rànquings i fomentar el debat entre aficionats.

El projecte s'està desenvolupant com a part del projecte intermodular de **DAW**, combinant les assignatures de disseny d'interfícies web i desenvolupament backend.

## Objectius

- Presentar jugadors i entrenadors destacats de diferents èpoques.
- Organitzar informació i rànquings amb criteris clars i fonts verificables.
- Incorporar un espai de fòrum per al debat respectuós.
- Ampliar la web en el futur amb notícies, anàlisis i articles d'opinió personal.

## Disseny i identitat visual

El disseny parteix d'uns wireframes creats amb **Figma**. La identitat visual s'inspira en el Mediterrani i la Costa Brava, amb una paleta de blau marí, gris acer i blanc.

## Tecnologies

- **HTML5** per a l'estructura de les pàgines.
- **Tailwind CSS 4** per als estils.
- **Node.js i npm** per gestionar les dependències i compilar Tailwind.
- **XAMPP / Apache** com a entorn de desenvolupament local.
- **Git i GitHub** per al control de versions.

La integració amb PHP i la base de dades correspondrà a fases posteriors del projecte.

## Estructura inicial

```text
RAS_Football/
├── css/
│   └── output.css
├── src/
│   └── input.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Instal·lació i execució

Cal tenir instal·lats **Node.js** i **npm**.

1. Obre la carpeta del projecte a Visual Studio Code.
2. Instal·la les dependències:

   ```bash
   npm install
   ```

3. Genera els estils CSS:

   ```bash
   npm run build
   ```

4. Per treballar amb actualització automàtica dels estils:

   ```bash
   npm run dev
   ```

5. Obre `index.html` al navegador. Si utilitzes XAMPP i tens el projecte dins de `htdocs`, pots accedir-hi mitjançant `http://localhost/PractiquesPHP/Interficies/RAS_Football/` amb Apache engegat.

> Les ordres `npm run dev` i `npm run build` requereixen que els scripts corresponents estiguin definits a `package.json`.

## Estat del projecte

**En desenvolupament.** Actualment hi ha una primera pàgina de prova amb Tailwind CSS. Les vistes previstes per a aquesta fase són:

- **Home:** portada amb contingut destacat, jugadors, entrenadors, rànquings i activitat del fòrum.
- **Login / Register:** inici de sessió i registre en una mateixa vista, d'acord amb el wireframe.

Els formularis i les funcionalitats de backend encara no estan implementats.

## Autor

Projecte personal **RAS Football**.
