# RAS Football ⚽

**Projecte de M09 – Disseny d'interfícies web (2n de DAW)**  
**Autor:** Rasen Mediñà i Masdeu

## 1. Què és RAS Football?

RAS Football és una web personal dedicada al futbol, especialment a la seva història. La idea és reunir informació sobre jugadors i entrenadors que han marcat diferents èpoques, i crear més endavant un espai on els aficionats puguin consultar rànquings i participar en debats.

Aquest repositori recull el treball de disseny, maquetació i millora de l'accessibilitat de les primeres vistes. **De moment és un projecte de frontend:** algunes opcions són demostratives i encara no hi ha un backend connectat.

## 2. Disseny inicial

Abans de programar vaig preparar els wireframes i el prototip amb **Figma**. Les dues vistes inicials són:

- **Home:** pàgina principal amb contingut destacat, jugadors, entrenadors i fòrum.
- **Login / Register:** inici de sessió i registre en una sola pàgina, amb dos formularis separats.

[Consultar el projecte a Figma](https://www.figma.com/design/4kpCma7pdHpVRL4srsCxFT/Rasen_projecteFutbol)

La identitat visual utilitza blau marí (`#123D68`), blanc i grisos clars, amb una inspiració personal en els colors del mar i la Costa Brava. Els botons principals dels formularis són blaus. També he incorporat el logotip de RAS Football al header i com a *favicon*.

## 3. Tecnologies i eines

- **HTML5:** estructura semàntica, textos, enllaços i formularis.
- **Tailwind CSS v4:** estils, distribució amb Flexbox i Grid i disseny adaptable.
- **Visual Studio Code:** edició del projecte.
- **Figma:** wireframes i prototip.
- **Git i GitHub:** control de versions i lliurament.
- **WAVE (WebAIM):** revisió de l'accessibilitat, complementada amb proves manuals.

No s'ha utilitzat cap framework de JavaScript ni hi ha encara una base de dades connectada.

## 4. Vistes implementades

### `index.html` — Home

La pàgina principal inclou:

- **Header:** logotip que torna a l'inici, camp de cerca i accés al login.
- **Menú de navegació:** Inici, Jugadors, Entrenadors, Rànquings, Fòrum, Sobre nosaltres i Contacte.
- **Contingut destacat:** presentació del projecte i avís dels futurs rànquings històrics.
- **Jugadors destacats:** fitxes de Pelé, Diego Maradona i Lionel Messi, amb fotografies, trajectòries, palmarès i descripcions del seu joc.
- **Entrenadors destacats:** fitxes de Rinus Michels, Johan Cruyff i Pep Guardiola, amb informació sobre els equips entrenats, èxits i estil futbolístic.
- **Fòrum:** cinc propostes de debat sobre jugadors, entrenadors, equips ideals, títols i evolució del futbol. Encara no es poden publicar missatges.
- **Footer:** tres columnes amb informació i autoria del projecte, mapa del lloc i enllaços a fonts relacionades amb el futbol.

Les fotografies es guarden dins d'`assets/images/` per poder-les gestionar des del projecte. Cal mantenir els crèdits i les condicions de la llicència de cada imatge, encara que el fitxer estigui descarregat localment.

**Sobre les estadístiques:** alguns totals històrics són difícils de comparar perquè depenen de les competicions i les fonts consultades. Per aquest motiu, les dades no verificades o pendents d'unificar s'indiquen en lloc d'inventar xifres.

### `login.html` — Inici de sessió i registre

Aquesta vista conserva el disseny de dos formularis en una mateixa pàgina:

- **Iniciar sessió:** correu electrònic, contrasenya i opció «Recorda'm».
- **Registre:** nom d'usuari, correu electrònic, contrasenya, confirmació de contrasenya i acceptació dels termes.
- **Navegació:** enllaç per tornar a la Home i el mateix footer que la pàgina principal.

Els camps utilitzen tipus d'entrada adequats i validacions bàsiques d'HTML, però **encara no es poden iniciar sessions ni crear comptes reals**. La recuperació de contrasenya també està pendent.

## 5. Canvis respecte als wireframes

El prototip inicial servia de guia, però durant la implementació he fet alguns ajustos:

| Element | Canvi realitzat | Motiu |
| --- | --- | --- |
| Menú | Afegida l'opció **Contacte** | Preveure una futura vista amb formulari de contacte. |
| Fòrum | Ampliat de **3 a 5 debats** | Donar més contingut i equilibrar la columna lateral. |
| Fitxes | Substituïts els exemples genèrics per futbolistes i entrenadors reals, amb imatges i informació | Fer la web més útil i menys semblant a una maqueta. |
| Contingut destacat | Afegida una introducció i el bloc «Pròximament: rànquings històrics» | Explicar millor el projecte i les funcionalitats futures. |
| Footer | Reorganitzat en **tres columnes** | Facilitar la navegació i mostrar autoria i fonts. |
| Header | Ajustats els colors dels elements i incorporat el favicon | Mantenir una identitat visual coherent. |
| Distribució | Adaptació de columnes i formularis segons la mida de pantalla | Millorar la visualització en mòbils i ordinadors. |

## 6. Millores d'accessibilitat

A l'activitat d'accessibilitat he revisat el codi i he aplicat millores pensades per a la navegació amb teclat i l'ús de lectors de pantalla:

- **Idioma declarat** amb `<html lang="ca">`.
- **Estructura semàntica** amb `header`, `nav`, `main`, `section`, `article`, `aside` i `footer`, segons el contingut de cada vista.
- **Jerarquia de títols** (`h1`, `h2`, `h3`) per organitzar la informació.
- **Enllaç «Salta al contingut principal»** per evitar haver de recórrer tota la capçalera amb el tabulador.
- **Focus visible** als elements interactius, per saber on es troba la navegació amb teclat.
- **Textos alternatius** a les imatges informatives i noms accessibles per als elements que ho necessiten.
- **Formularis amb etiquetes `<label>`** associades als camps mitjançant `for` i `id`, tipus d'entrada adequats, `autocomplete` i camps obligatoris amb `required`.
- **Enllaços descriptius** i identificació de les pàgines externes que s'obren en una pestanya nova.
- **Disseny responsive**, perquè el contingut es reorganitzi en pantalles petites sense dependre d'una distribució fixa.

He utilitzat **WAVE** com a eina de suport per detectar possibles problemes, però també és necessari fer comprovacions manuals: recórrer la pàgina amb `Tab` i `Shift+Tab`, comprovar que es veu el focus, revisar el contrast i verificar que els formularis es poden entendre sense dependre només del color. **Passar una eina automàtica no garanteix per si sol que una web sigui completament accessible.**

Recursos consultats:

- [WAVE – Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [W3Schools – Accessibility](https://www.w3schools.com/accessibility/)
- [WCAG – Recomanacions del W3C](https://www.w3.org/WAI/standards-guidelines/wcag/)

## 7. Estructura del projecte

```text
RAS_Football/
├── assets/
│   └── images/
│       ├── logo.svg
│       ├── jugadors/
│       └── entrenadors/
├── css/
│   └── output.css          # CSS generat per Tailwind
├── docs/                    # Documentació i wireframes
├── src/
│   └── input.css           # Punt d'entrada de Tailwind
├── index.html              # Pàgina principal
├── login.html              # Login i registre
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

La carpeta `node_modules/` es genera quan s'instal·len les dependències i no cal pujar-la a GitHub.

## 8. Com executar el projecte

1. Descarrega el repositori o clona'l amb Git.
2. Obre la carpeta del projecte amb Visual Studio Code.
3. Si necessites regenerar els estils, executa les ordres següents a la terminal:

```bash
npm install
npm run build
```

Per compilar automàticament els canvis mentre treballes:

```bash
npm run dev
```

4. Obre `index.html` amb **Live Server** o des d'un servidor local com **XAMPP**. Des de la Home pots accedir a `login.html`.

**Important:** l'adreça `127.0.0.1` només funciona a l'ordinador on s'està executant el servidor. Per revisar el projecte, un company ha de descarregar el repositori i obrir-lo localment.

## 9. Què queda pendent?

Aquest projecte encara està en desenvolupament. Les parts principals pendents són:

- Crear les vistes i funcionalitats de **Rànquings** i **Contacte**.
- Implementar el **fòrum** perquè es puguin publicar i respondre debats.
- Fer funcional el **cercador** de jugadors i entrenadors.
- Connectar els formularis de **login i registre** amb el backend, la base de dades i les validacions del servidor.
- Desenvolupar la recuperació de contrasenya i els termes i condicions.
- Completar i verificar més dades estadístiques i continuar fent proves d'accessibilitat.

Per tant, alguns elements del menú poden ser informatius o estar marcats com a pendents. No s'han de considerar funcionalitats acabades.

## 10. Enllaços del projecte

- **GitHub:** [Disseny_interficies_web](https://github.com/RasenMedina/Disseny_interficies_web)
- **Figma:** [Prototip RAS Football](https://www.figma.com/design/4kpCma7pdHpVRL4srsCxFT/Rasen_projecteFutbol)
- **Tailwind CSS:** [Documentació oficial](https://tailwindcss.com/)

---

## Millores d'accessibilitat

A partir dels informes d'avaluació realitzats pels companys mitjançant l'extensió Accessibility Insights for Web i la seva eina Assessment, s'han revisat diferents aspectes de l'accessibilitat del projecte RAS Football, seguint els criteris WCAG 2.1 i WCAG 2.2.

### Millores implementades — primer bloc

| Millora | Descripció | Criteri WCAG relacionat |
|---|---|---|
| Nom accessible del logotip | El text alternatiu proporciona el nom de l'enllaç sense un `aria-label` redundant. | 4.1.2 |
| Text alternatiu del logotip | Identifica el projecte i la destinació de l'enllaç. | 1.1.1, 2.4.4 |
| Recuperació de contrasenya | Substitució de l'enllaç no funcional per un avís textual. | 2.4.4 (relacionat) |
| Regions semàntiques | Els formularis tenen un nom accessible associat al seu encapçalament. | 1.3.1 |
| Jerarquia d'encapçalaments | Un `h1` principal per vista i nivells `h2` i `h3` segons l'estructura del contingut. | 1.3.1, 2.4.6 |
| Semàntica HTML | Ús de `strong` per transmetre la importància del nom del projecte. | 1.3.1 |
| Mida dels elements interactius | Augment de les caselles de verificació a 24 × 24 píxels CSS amb la configuració actual de Tailwind. | 2.5.8 (WCAG 2.2) |

L'objectiu d'aquestes modificacions és aconseguir una interfície més accessible, inclusiva i fàcil d'utilitzar, mantenint la identitat visual i el disseny original del projecte.

### Exemples de les modificacions al codi

#### 1 i 2. Nom accessible i text alternatiu del logotip (`index.html` i `login.html`)

```html
<!-- Logotip corporatiu amb enllaç a la pàgina d'inici. D'aquesta manera, el text alternatiu de la imatge proporciona també el nom accessible de l'enllaç, sense necessitat d'afegir un aria-label redundant. -->
<a href="index.html"
   class="bg-slate-100 rounded-xl px-4 py-2">
    <img src="./assets/images/logo.svg"
         alt="RAS Football - Pàgina d'inici"
         class="w-32 h-auto">
</a>
```

#### 3. Recuperació de contrasenya (`login.html`)

```html
<!-- Informem que la recuperació de contrasenya encara no està disponible.
     Evitem crear un enllaç que no funciona. -->
<p class="text-sm text-center text-slate-700">
    Recuperació de contrasenya pròximament disponible.
</p>
```

#### 4. Regions semàntiques (`login.html`)

Els contenidors dels formularis són `div` i cada `form` s'associa al seu títol mitjançant `aria-labelledby`.

```html
<!-- Associem el formulari al seu títol. -->
<form action="#" method="post" class="space-y-5" aria-labelledby="titol-login">
    <!-- Camps del formulari -->
</form>
```

El formulari de registre utilitza `aria-labelledby="titol-registre"`.

#### 5. Jerarquia d'encapçalaments (amb la correcció final de la Home)

```html
<!-- Títol principal accessible sense modificar el disseny visual. -->
<h1 class="sr-only">RAS Football</h1>
```

A la Home, el contingut destacat és un `h2` i els rànquings històrics són un `h3`. A `login.html`, el títol principal és «Iniciar sessió o registrar-se» i els dos formularis tenen encapçalaments `h2`.

#### 6. Mida de les caselles de verificació (`login.html`)

```html
<!-- Casella de 24 x 24 píxels per facilitar la interacció.
     shrink-0 evita que es redueixi quan falta espai. -->
<input type="checkbox" id="recordar" name="recordar"
       class="w-6 h-6 shrink-0">
```

La mateixa mida s'aplica a la casella d'acceptació dels termes.

#### 7. Èmfasi semàntic (`index.html` i `login.html`)

```html
<!-- Destaquem semànticament el nom del projecte. -->
<p><strong>RAS Football</strong></p>
```

Les etiquetes `strong` i `em` serveixen per expressar importància i èmfasi, respectivament; en aquest bloc s'ha incorporat `strong` al footer de les dues vistes.

### Millores pendents — segon bloc

| Millora | Descripció prevista | Criteri WCAG relacionat |
|---|---|---|
| Validació dels formularis | Comprovació de la coincidència de les contrasenyes del formulari de registre mitjançant JavaScript. | 3.3.1, 3.3.3 |
| Missatges d'error accessibles | Incorporació de missatges d'error textuals i atributs ARIA per facilitar la interpretació dels errors mitjançant tecnologies d'assistència. | 3.3.1, 4.1.3 |
| Mode d'alt contrast | Incorporació d'un mode d'alt contrast i revisió del contrast de textos, vores i cercador. | 1.4.3, 1.4.11 |

### Comprovacions pendents

Cal regenerar el CSS de Tailwind, revisar la distribució dels formularis, comprovar la navegació amb teclat i tornar a executar les eines d'avaluació. Els criteris indicats són referències relacionades amb les modificacions, no una certificació de conformitat WCAG. Els formularis encara no estan connectats al backend.

*Projecte acadèmic de 2n de DAW. RAS Football, 2026.*
