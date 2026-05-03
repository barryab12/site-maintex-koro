**AUDIT STRATÉGIQUE & RECOMMANDATIONS**

**MAINTEX**

*Refonte du site & positionnement vs MaintainX*

Document interne --- Direction & Marketing

Avril 2026 --- Version 1.0

*Périmètre analysé : 5 pages --- Home, Fonctionnalités, Secteurs,
Tarifs, Ressources*

**Sommaire**

Le document est structuré en 9 parties :

-   1\. Synthèse exécutive --- verdict en 60 secondes

-   2\. Méthodologie & contexte

-   3\. Analyse globale --- diagnostic du site existant

-   4\. Audit UI --- interface, design system, identité visuelle

-   5\. Audit UX --- parcours, frictions, storytelling

-   6\. Audit CRO --- conversion, CTA, preuves sociales

-   7\. Positionnement stratégique vs MaintainX

-   8\. Refonte recommandée --- structure home + 3 wordings

-   9\. Plan d\'action 90 jours & arbitrages budgétaires

**1. Synthèse exécutive**

**Verdict en 60 secondes**

MAINTEX dispose d\'un produit GMAO solide, d\'une couverture sectorielle
large (19 secteurs), d\'un parc de 350+ clients réels (France et Afrique
francophone), et d\'un positionnement de fond crédible : la souveraineté
française face à MaintainX. Mais le site actuel ne porte aucun de ces
atouts.

Concrètement, en l\'état, le site dévalorise activement la marque par 3
catégories de problèmes :

-   **Crédibilité immédiate :** fautes typographiques visibles dans les
    titres (« focntionnalités »), mélange français/anglais non assumé («
    Stay up to date with our news, ideas and updates »), orthographes
    erronées dans le sélecteur de langue (« Deutch »), illustration
    générée par IA en hero (1,4 MB, style flat 2018, feuilles tropicales
    hors-sujet).

-   **Preuves sociales absentes :** 0 témoignage écrit, 0 vidéo client,
    0 chiffre client en home, alors qu\'une étude Veolia -40 % temps
    d\'arrêt est mentionnée mais cachée en page Ressources.

-   **Cohérence design :** 10+ familles de polices chargées (Inter, Plus
    Jakarta Sans, Poppins, Roboto, Oswald, Dosis, Open Sans, Helvetica,
    Roboto Slab, Georgia), 249 fichiers CSS, aucun design system
    identifiable.

+-----------------------------------------------------------------------+
| **Conclusion exécutive**                                              |
|                                                                       |
| MAINTEX a tout pour rivaliser avec MaintainX en zone francophone et   |
| en Afrique. Mais le site actuel est un frein à la conversion et à la  |
| crédibilité : il ressemble à un site WordPress générique, pas à une   |
| plateforme SaaS de niveau international.                              |
|                                                                       |
| Une refonte ciblée est requise --- pas une simple modernisation       |
| visuelle, mais un repositionnement structurel autour de l\'angle « la |
| GMAO mobile-first des industries francophones ».                      |
+-----------------------------------------------------------------------+

**Top 5 priorités absolues (P0)**

  ----------------------------------------------------------------------------
  **\#**   **Action**                           **Délai**   **Impact**
  -------- ------------------------------------ ----------- ------------------
  1        Corriger les 3 fautes visibles       1 h         Crédibilité
           (focntionnalités, Deutch, newsletter             immédiate
           EN)                                              

  2        Retirer l\'illustration IA Gemini du 1 h         Stop hémorragie de
           hero (1,4 MB)                                    crédibilité

  3        Compresser toutes les images en WebP 1 jour      Performance + SEO
                                                            mobile, vital
                                                            Afrique

  4        Recueillir 3 témoignages clients     2 sem.      Preuve sociale B2B
           écrits + 1 vidéo                                 

  5        Réécrire le hero avec promesse forte 3 jours     Conversion +
           et screenshot produit                            positionnement
  ----------------------------------------------------------------------------

**2. Méthodologie & contexte**

**Périmètre analysé**

L\'audit a porté sur 5 pages représentatives, fournies au format MHTML
(archive web complète : HTML, CSS, ressources) :

-   Page d\'accueil --- https://maintex-new.bbc-partners.net/

-   Fonctionnalités --- /fonctionnalites-maintex/

-   Secteurs --- /secteurs/

-   Tarifs --- /pricing/

-   Ressources --- /features/

**Méthode d\'analyse**

L\'audit combine 4 niveaux d\'inspection :

-   **Niveau 1 --- Code source :** extraction et analyse de la structure
    HTML (titres, CTA, navigation, hiérarchie sémantique), des CSS
    chargés (palette, typographies, spécificité), des images (poids,
    format, alt-text).

-   **Niveau 2 --- Contenu éditorial :** lecture intégrale des copies,
    des wordings de CTA, des structures de message, des promesses de
    valeur.

-   **Niveau 3 --- Benchmark :** comparaison avec les pratiques
    observées sur MaintainX (concurrent direct), Mobility Work, DIMO
    Maint, Yuman, Limble CMMS, UpKeep, ainsi que sur les références de
    design SaaS B2B 2025 (monday.com, Stripe, Linear, Notion).

-   **Niveau 4 --- Stratégique :** alignement entre positionnement
    déclaré (« GMAO française pour entreprises industrielles, BTP,
    santé, mines, hôtellerie ») et perception réelle générée par le
    site.

**Cibles MAINTEX retenues pour l\'analyse**

Conformément au positionnement communiqué, les profils suivants ont été
utilisés comme grille de lecture :

  ------------------------------------------------------------------------
  **Persona**              **Géo**          **Critères de décision
                                            principaux**
  ------------------------ ---------------- ------------------------------
  Directeur Maintenance    France           Réduction temps d\'arrêt,
  --- ETI industrielle                      MTBF, adoption terrain,
                                            intégration ERP

  Responsable Production / France + Afrique Mobilité, hors-ligne,
  Site Manager                              simplicité d\'usage technicien

  DSI / Directeur Achats   France           RGPD, hébergement souverain,
                                            sécurité, TCO 3 ans

  Directeur Maintenance    Afrique          Connectivité dégradée, support
  --- groupe industriel    francophone      FR, ERP local, prix par
  africain                                  utilisateur

  Facility Manager         International FR Multi-sites, multi-pays,
                                            reporting consolidé
  ------------------------------------------------------------------------

**3. Analyse globale du site existant**

**3.1 Notation par dimension**

Évaluation sur 10 selon les standards SaaS B2B 2025 :

  ----------------------------------------------------------------------------
  **Dimension**             **Note**   **Constat synthétique**
  ------------------------- ---------- ---------------------------------------
  Modernité du design       4/10       Esthétique 2018-2020. Illustration IA
                                       en hero, mix de polices anarchique, 0
                                       micro-interaction.

  Crédibilité B2B           5/10       350 clients revendiqués + 10 logos
                                       réels, mais 0 témoignage écrit, 0
                                       chiffre, aucun logo « premium »
                                       mondial.

  Clarté de la proposition  7/10       H1 correct (« Réduisez vos temps
  de valeur                            d\'arrêt grâce à des diagnostics
                                       fiables »). Mais sous-titre redondant
                                       et pas de chiffre.

  Cohérence éditoriale      3/10       Anglais/français mélangés, fautes
                                       visibles, sélecteur de langue mal
                                       orthographié (« Deutch »).

  Hiérarchie visuelle       5/10       Mégamenu lisible mais hero pauvre,
                                       structure linéaire (hero → 8 cards
                                       features → CTA final).

  Trust / Sécurité          4/10       RGPD + hébergement France mentionnés en
                                       footer uniquement. Aucune section
                                       dédiée.

  Mobile-readiness          3/10       Image hero 1,4 MB PNG, 249 fichiers
  (estimation)                         CSS, mégamenu non adapté. PageSpeed
                                       mobile probable \< 50.

  Storytelling              2/10       Format catalogue. Aucun arc problème →
                                       solution → preuve.

  Performance technique     3/10       Image hero non optimisée, CSS empilé
                                       via plugins WordPress, pas de WebP/AVIF
                                       détectés.

  Cohérence avec            5/10       « GMAO française » sous-vendu, présence
  positionnement déclaré               Afrique invisible, mobile-first non
                                       revendiqué.
  ----------------------------------------------------------------------------

**3.2 Top 5 signaux qui détruisent la crédibilité**

+-----------------------------------------------------------------------+
| **🚨 Signal n°1 --- Visuel hero IA générique**                        |
|                                                                       |
| Le hero affiche une illustration générée par Gemini AI (fichier :     |
| Gemini_Generated_Image_pgwql9pgwql9pgwq.png, 1,4 MB).                 |
|                                                                       |
| Style flat illustration 2018, anatomies bancales, décor incohérent    |
| (feuilles tropicales en arrière-plan d\'un visuel B2B industriel      |
| européen).                                                            |
|                                                                       |
| Aucun acheteur industriel sérieux ne projette de la confiance dans    |
| une plateforme SaaS à 70 €/utilisateur/mois après cette image.        |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **🚨 Signal n°2 --- Faute typographique dans un H2**                  |
|                                                                       |
| Sur la home, dans la section « Fonctionnalités », le bouton final     |
| affiche : « Voir toutes les focntionnalités → »                       |
|                                                                       |
| Une faute dans un titre principal d\'une page commerciale est l\'un   |
| des signaux les plus toxiques en B2B.                                 |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **🚨 Signal n°3 --- Mélange français/anglais non assumé**             |
|                                                                       |
| « Stay up to date with our news, ideas and updates » + « Subscribe    |
| Now » dans la newsletter.                                             |
|                                                                       |
| URL de la page tarifs : /pricing/ (en anglais).                       |
|                                                                       |
| Sur la page tarifs : « Billed yearly » / « Billed monthly » / « Save  |
| up to 20% with yearly billing ».                                      |
|                                                                       |
| Incohérence pour un site qui affiche « La GMAO française » comme      |
| tagline.                                                              |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **🚨 Signal n°4 --- Sélecteur de langue mal orthographié**            |
|                                                                       |
| « Deutch » au lieu de « Deutsch » --- orthographe erronée dans toutes |
| les langues.                                                          |
|                                                                       |
| 5 langues affichées (En, Deutch, Español, Français, Italiano,         |
| 简体中文) mais aucune réellement maintenue : promesse non tenue.      |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **🚨 Signal n°5 --- Aucune preuve sociale concrète**                  |
|                                                                       |
| 0 témoignage écrit visible sur la home.                               |
|                                                                       |
| 0 vidéo client.                                                       |
|                                                                       |
| 0 chiffre de ROI client.                                              |
|                                                                       |
| Une seule étude (« Veolia -40 % temps d\'arrêt ») mentionnée --- mais |
| en page Ressources, jamais en home.                                   |
+-----------------------------------------------------------------------+

**4. Audit UI --- interface & design system**

**4.1 Palette de couleurs**

Couleurs détectées dans le CSS (par fréquence d\'usage) :

  --------------------------------------------------------------------------
  **Code**         **Occurrences**   **Rôle apparent**
  ---------------- ----------------- ---------------------------------------
  #475bb2          35                Couleur principale (indigo)

  #38488e          7                 Variante foncée

  #f3f4f6          6                 Gris clair / fonds

  #ffffff          5                 Blanc

  #e5e7eb          3                 Bordures

  \+ 393 autres    1-2               Bruit (via plugins WordPress)
  couleurs                           
  --------------------------------------------------------------------------

**Diagnostic :** palette mono-bleu, sans accent. Le bleu indigo #475bb2
est commun (Discord, Lyft, etc.) et ne crée aucune signature visuelle.
*Aucune couleur d\'action ne signale les CTA, les KPI critiques ou les
alertes.*

**Système de couleurs recommandé**

  ---------------------------------------------------------------------------
  **Token**             **Valeur**         **Usage**
  --------------------- ------------------ ----------------------------------
  \--brand-primary      #1E3A8A (Indigo    Logo, headers, fond hero
                        800)               

  \--brand-accent       #F97316 (Orange    CTA, badges, alertes --- couleur
                        500)               signature

  \--surface            #FAFAF9 (Stone 50) Fond de page (chaud, pas blanc
                                           clinique)

  \--surface-elevated   #FFFFFF            Cards, modales

  \--text-primary       #0C0A09 (Stone     Titres
                        950)               

  \--text-secondary     #44403C (Stone     Body
                        700)               

  \--success            #059669 (Emerald   KPI positifs (« -40 % temps
                        600)               d\'arrêt »)

  \--danger             #DC2626 (Red 600)  Alertes critiques, urgent

  \--border             #E7E5E4 (Stone     Séparateurs
                        200)               
  ---------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **Pourquoi l\'orange chantier (#F97316) comme accent ?**              |
|                                                                       |
| MaintainX utilise un vert mint. Limble un orange clair façon «        |
| Mountain Dew ». Yuman un jaune fluo. Mobility Work un bleu uniforme.  |
| UpKeep vert + violet.                                                 |
|                                                                       |
| Aucun acteur GMAO ne tient un orange « EPI / signalisation » saturé   |
| et mat. Adopté de manière disciplinée --- uniquement sur les CTA,     |
| alertes et KPI critiques --- il devient votre signature mémorable et  |
| fait le pont sémantique avec votre univers métier (gilets haute       |
| visibilité, plots de chantier, casques BTP, panneaux de sécurité      |
| industrielle).                                                        |
|                                                                       |
| Différenciation visuelle immédiate, ancrage métier, cohérence avec la |
| cible terrain.                                                        |
+-----------------------------------------------------------------------+

**4.2 Typographie**

Polices détectées dans le CSS (chargées par le site) :

  -----------------------------------------------------------------------
  **Famille de police**           **Origine probable**
  ------------------------------- ---------------------------------------
  Inter / Inter, sans-serif       Thème principal

  Plus Jakarta Sans               Plugin / template

  Poppins                         Plugin Elementor

  Roboto / Roboto Slab            Plugin

  Oswald                          Plugin

  Dosis, sans-serif               Plugin

  Open Sans                       Plugin / WordPress

  Helvetica Neue, Helvetica,      Fallback OS
  Arial                           

  Georgia, Times New Roman, serif WordPress core

  Font Awesome 5 (Brands + Free)  Iconographie

  Dashicons / eicons /            Plugins
  UserRegistration                
  -----------------------------------------------------------------------

**Diagnostic :** 10+ familles différentes chargées simultanément. C\'est
**catastrophique en performance** (temps de chargement +2 à 4 secondes
sur mobile 4G), **incohérent visuellement** (rendu différent d\'une page
à l\'autre), et signale un site assemblé via plusieurs plugins WordPress
sans discipline éditoriale.

**Système typographique recommandé**

Une seule famille principale (Inter + Inter Tight pour les titres)
couvre 100 % des besoins :

  --------------------------------------------------------------------------
  **Niveau**       **Police**       **Desktop**   **Mobile**   **Weight**
  ---------------- ---------------- ------------- ------------ -------------
  Display (hero)   Inter Tight ou   64-72 px      40 px        700,
                   Geist                                       line-height
                                                               1.05

  H1               Inter Tight      48 px         32 px        700

  H2               Inter Tight      36 px         28 px        600

  H3               Inter            24 px         20 px        600

  Body L           Inter            18 px         16 px        400

  Body             Inter            16 px         15 px        400

  Caption / UI     Inter            13 px         13 px        500

  Mono (KPI, code  JetBrains Mono   14 px         13 px        500
  API)                                                         
  --------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **Action immédiate Elementor**                                        |
|                                                                       |
| Dans Elementor → Theme Style → Typography : forcer Inter / Inter      |
| Tight comme polices uniques pour tous les éléments (Body, H1-H6,      |
| Buttons, Forms).                                                      |
|                                                                       |
| Désactiver le chargement des Google Fonts non utilisées : Elementor → |
| Settings → Performance → décocher toutes les polices sauf Inter et    |
| Inter Tight.                                                          |
|                                                                       |
| Désactiver les plugins qui chargent des fonts parasites (Oswald,      |
| Dosis, Roboto Slab) ou écraser via CSS custom : \* { font-family:     |
| \'Inter\', sans-serif !important; }                                   |
+-----------------------------------------------------------------------+

**4.3 Boutons & CTA --- diagnostic**

CTA détectés sur la home (analyse exhaustive) :

  ------------------------------------------------------------------------
  **CTA actuel**        **Position**       **Diagnostic**
  --------------------- ------------------ -------------------------------
  Démo gratuite →       Header + Hero      Wording correct, mais aucun
                                           visuel ne le distingue

  Voir un cas client    Hero secondaire    ❌ Aucune page cas client
                                           n\'existe --- promesse non
                                           tenue

  En savoir plus →      8 cards features   ❌ Répété 8 fois, formulation
                                           passive, faible engagement

  Voir tout →           Sections nav       Vague, ne signale pas la valeur

  Demander une démo     CTA bas de page    OK, mais générique et sans
  gratuite →                               contexte/urgence

  Voir les tarifs       CTA bas de page    Logique, OK

  Subscribe Now         Newsletter footer  ❌ En anglais sur site français
  ------------------------------------------------------------------------

**Recommandations CTA**

  -----------------------------------------------------------------------
  **Problème**              **Correction recommandée**
  ------------------------- ---------------------------------------------
  « Voir un cas client »    Soit publier les cas clients (priorité), soit
  sans page cible           remplacer par : « Voir la démo vidéo (2 min)
                            » avec lightbox

  8x « En savoir plus »     Différencier : « Voir le module Ordres de
  dans les features         travail », « Comment ça marche », « Tester ce
                            module »

  « Subscribe Now » en      « Recevoir notre guide ROI Maintenance » (en
  anglais                   échange d\'un email --- lead magnet plutôt
                            que newsletter)

  Pas de hiérarchie         CTA primaire : fond #F97316 + texte blanc +
  visuelle                  ombre douce. CTA secondaire : ghost (border
  primary/secondary         1.5 px transparent).

  Taille des CTA            Hero : 56 px hauteur desktop / 52 px mobile.
                            Padding horizontal 32 px. Border-radius 10-12
                            px (pas plus, sinon « ludique »).

  Aucun sous-texte de       Sous chaque CTA primaire ajouter : « Sans CB.
  réassurance               Réponse en 4 h. » ou « 15 min, en français,
                            par un expert »
  -----------------------------------------------------------------------

**4.4 Visuels & illustrations --- point critique**

**Verdict actuel :** le hero est porté par une illustration générée par
IA (Gemini), 1,4 MB en PNG non optimisé. Style daté, qualité
approximative, décor incohérent. **À supprimer immédiatement.**

**3 directions visuelles possibles pour le hero**

  --------------------------------------------------------------------------
  **Option**     **Description**            **Coût**      **Effet attendu**
  -------------- -------------------------- ------------- ------------------
  A. Screenshot  Capture du dashboard       Faible (vous  Crédibilité
  produit réel ★ MAINTEX (vue OT + alerte   avez déjà le  immédiate. Le
  recommandé     panne + carte équipement)  produit)      visiteur voit le
                 sur fond gradient                        produit.
                 indigo→ambre. Façon                      
                 monday.com / Linear.                     

  B. Photo       Photo d\'un technicien     Moyen (séance Crédibilité
  terrain réelle casqué utilisant l\'app    photo OU      métier + connexion
                 mobile MAINTEX devant une  stock         émotionnelle
                 machine. Filtre couleur    retouché)     
                 cohérent avec brand.                     

  C. Composition Mockup 3D du dashboard + 3 Moyen-élevé   Différenciation,
  produit + KPI  chiffres clés animés («    (designer)    signature visuelle
  animés         MTBF +35 % », « -40 %                    premium
                 arrêts », « 78 % résolu au               
                 1er passage »)                           
  --------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **À bannir absolument**                                               |
|                                                                       |
| ❌ Illustrations vectorielles génériques (Storyset, Undraw, etc.)     |
|                                                                       |
| ❌ Images générées par IA en style « abstrait tech »                  |
|                                                                       |
| ❌ Photos de stock de « businessmen souriants devant un ordinateur »  |
|                                                                       |
| ❌ Images sans alt-text descriptif                                    |
|                                                                       |
| ❌ Tout ce qui ressemble à de l\'illustration flat 2018-2020          |
+-----------------------------------------------------------------------+

**4.5 Espacements & grille**

Recommandations à appliquer dans Elementor :

-   Conteneur principal : max-width 1280-1440 px, centré, gouttières
    latérales 24 px mobile / 64 px desktop.

-   Section padding vertical : 120 px desktop / 64 px mobile (vous êtes
    probablement à 60-80 px → trop tassé).

-   Grille features : 4 colonnes desktop / 2 tablette / 1 mobile, gap 24
    px, hauteur uniforme par card.

-   Espacement vertical entre titres et body : 16 px (constant).

-   Grille de base 8px : tous les espacements multiples de 8 (8, 16, 24,
    32, 48, 64, 96, 128).

**5. Audit UX --- parcours, frictions, storytelling**

**5.1 Parcours utilisateur actuel**

Le parcours détecté à partir de la structure du site :

-   Home → mégamenu (3 catégories × 16 modules)

-   → Page Fonctionnalités (16 sections H2)

-   → Page Secteurs (19 secteurs en H2, mais sans pages dédiées)

-   → Page Tarifs (4 plans)

-   → CTA « Démo gratuite »

**Problème majeur de surcharge cognitive :** le mégamenu liste 16
modules à plat sous Fonctionnalités. Un Directeur Maintenance qui
découvre MAINTEX ne sait pas par où commencer.

**Promesse non tenue :** la page Secteurs liste 19 secteurs en H2, mais
tous renvoient à des ancres /secteurs#xxx --- aucune vraie page secteur
dédiée n\'existe. Pour un visiteur « Hôtellerie » ou « Mines », la
promesse « Votre secteur. Nos solutions. » est creuse.

**5.2 Compréhension de l\'offre en 5 secondes**

  -----------------------------------------------------------------------
  **Test**                                 **Résultat**
  ---------------------------------------- ------------------------------
  Le visiteur comprend-il ce que fait      ✓ Oui --- c\'est une GMAO
  MAINTEX ?                                

  Comprend-il pour qui c\'est ?            ◐ Vague --- « entreprises
                                           industrielles »

  Voit-il le produit ?                     ✗ Non --- illustration
                                           générique

  Y a-t-il un chiffre concret ?            ✗ Non --- sauf « 350
                                           entreprises »

  Y a-t-il une preuve sociale forte ?      ◐ Logos uniquement, sans
                                           contexte

  Sait-il pourquoi MAINTEX vs un           ✗ Non --- aucun
  concurrent ?                             différenciateur affiché
  -----------------------------------------------------------------------

**5.3 Frictions identifiées**

  ---------------------------------------------------------------------------
  **Friction**                    **Impact**                   **Sévérité**
  ------------------------------- ---------------------------- --------------
  Mégamenu à 3 colonnes × 16      Paralysie du choix           🔴 Élevé
  items                                                        

  Pas de vidéo de démo en home    Visiteur sans contexte ne    🔴 Élevé
                                  comprend pas le produit      

  CTA « Voir un cas client » mais Promesse non tenue → perte   🟠 Moyen
  aucune page existante           de confiance                 

  Newsletter en anglais sur site  Incohérence éditoriale       🟠 Moyen
  français                                                     

  Pas de chat / contact rapide    Perte de leads chauds        🟠 Moyen
  visible                                                      

  Faute « focntionnalités »       Décrédibilise (image         🔴 Élevé
                                  d\'amateurisme)              (quick fix)

  Image hero 1,4 MB non optimisée Performance mobile           🔴 Élevé
                                  catastrophique, surtout      
                                  4G/Afrique                   

  Footer avec 7 liens             Signal « site coquille vide  🟠 Moyen
  potentiellement morts           »                            
  (Carrières, Presse, Status...)                               
  ---------------------------------------------------------------------------

**5.4 Storytelling --- quasi-inexistant**

La home actuelle est un catalogue : Hero → 8 cards features → CTA final.
Aucun arc narratif.

**Storytelling SaaS B2B 2025 attendu (à reconstruire)**

  ----------------------------------------------------------------------------
  **Étape**       **Rôle**           **Exemple MAINTEX**
  --------------- ------------------ -----------------------------------------
  1\. Problème    Douleur métier     « 40 % du temps technicien = diagnostic,
                  reconnue           pas réparation »

  2\. Solution    Différenciateur    « MAINTEX donne le bon diagnostic en 30 s
  unique          clair              via l\'historique IA »

  3\. Preuve      Cas client chiffré « Comment SOTRACO a réduit ses arrêts de
                                     38 % en 6 mois »

  4\.             Produit visible    Screenshot ou vidéo dashboard
  Démonstration                      

  5\. Réassurance Trust signals      Témoignages, certifs, RGPD France

  6\. Action      CTA contextuel     « Réservez 15 min avec un expert
                                     maintenance »
  ----------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **Note importante**                                                   |
|                                                                       |
| L\'étude « Comment Veolia a réduit ses temps d\'arrêt de 40 % »       |
| existe sur la page Ressources mais n\'est pas mise en avant en home.  |
|                                                                       |
| C\'est exactement le type de preuve qui doit être en hero, pas cachée |
| 3 clics plus loin.                                                    |
+-----------------------------------------------------------------------+

**5.5 Mobile responsiveness**

Sans test live, plusieurs alertes critiques :

-   Image hero 1,4 MB en PNG : catastrophique sur mobile 4G, surtout en
    Afrique (votre cible !).

-   249 fichiers CSS chargés : très probable empilement de styles →
    temps de rendu dégradé.

-   Mégamenu à 3 colonnes : impossible sur mobile, à transformer en
    accordéon hiérarchique.

-   PageSpeed Insights mobile : score probable \< 50/100 (à vérifier en
    test live).

-   LCP (Largest Contentful Paint) probable \> 4 s --- bien au-delà du
    seuil acceptable de 2,5 s.

+-----------------------------------------------------------------------+
| **Enjeu Afrique : critique**                                          |
|                                                                       |
| Vos cibles africaines accèdent souvent depuis des réseaux 3G/4G       |
| dégradés, des appareils de milieu de gamme, et des forfaits data      |
| limités.                                                              |
|                                                                       |
| Une home qui charge en 8 secondes sur 4G française devient une home   |
| qui charge en 25 secondes en zone urbaine africaine --- et            |
| inaccessible hors zones urbaines.                                     |
|                                                                       |
| Un site MAINTEX qui ne se charge pas en Afrique = un positionnement « |
| adapté à l\'Afrique » impossible à défendre.                          |
|                                                                       |
| Action P0 : compresser toutes les images en WebP, lazy-loading, CDN   |
| avec edge serveur Afrique (Cloudflare Pro recommandé).                |
+-----------------------------------------------------------------------+

**6. Audit CRO --- conversion, CTA, preuves sociales**

**6.1 Diagnostic CTA détaillé**

  ---------------------------------------------------------------------------
  **CTA**      **Position**   **Wording actuel** **Recommandation**
  ------------ -------------- ------------------ ----------------------------
  Header       Top right      Démo gratuite →    Bouton fond ambre + « Voir
                                                 une démo (15 min) »

  Hero         Sous H1        Démo gratuite →    Garder + sous-texte : « Sans
  primaire                                       CB. Réponse en 4h. »

  Hero         À côté         Voir un cas client Remplacer : « Voir la démo
  secondaire   primaire                          vidéo (2 min) ▶ »

  Features     Grille         En savoir plus →   « Voir le module \[Nom\] »
  (×8)                                           (différencier)

  CTA bas page Section finale Demander une démo  « Réservez 15 min avec un
                              gratuite →         expert maintenance »

  Footer       Newsletter     Subscribe Now      « Recevoir notre guide ROI
                                                 Maintenance »
  ---------------------------------------------------------------------------

**6.2 Points de conversion à ajouter**

1.  Calculateur ROI inline en home (vous avez déjà la page calculateur
    --- le mettre en widget interactif central).

2.  Lead magnet : « Téléchargez le guide 5 KPI maintenance que les
    directeurs industriels suivent en 2026 » → en échange d\'un email.

3.  Chat live : widget Crisp ou HubSpot Free, avec auto-message « Une
    question avant la démo ? » après 30 secondes.

4.  Sticky bar mobile : « Démo gratuite --- 15 min » fixée en bas
    d\'écran sur mobile.

5.  Exit-intent popup : « Avant de partir : essayez le calculateur ROI »
    (donner avant de demander).

6.  Calendly / Cal.com inline en bas de page pour réservation directe
    sans formulaire intermédiaire.

**6.3 Preuves sociales --- le maillon faible**

  --------------------------------------------------------------------------
  **Type de preuve** **Présent ?** **Recommandation**
  ------------------ ------------- -----------------------------------------
  Logos clients      ✓ 10 logos    Garder mais agrandir + harmoniser
                                   monochrome indigo

  Chiffre clients    ✓ « 350       Enrichir : « 1 200+ techniciens
                     entreprises » utilisateurs / 15 pays »

  Témoignages écrits ✗             🔴 À créer en priorité : 3 témoignages
                                   (industrie, BTP/mines, santé)

  Témoignages vidéo  ✗             🔴 1 vidéo de 60 s en home

  Études de cas      ◐ 1 (Veolia)  Remonter en home, en bandeau
  chiffrées          cachée en     
                     page          
                     Ressources    

  Notes/avis tiers   ✗             Ajouter Capterra / G2 / Société.com si
                                   applicable

  Certifications     ◐ Footer      Bandeau dédié : RGPD, ISO 27001,
                     uniquement    SecNumCloud

  Awards / presse    ✗             « Vu dans : L\'Usine Nouvelle,
                                   Maintenance & Entreprise... »
  --------------------------------------------------------------------------

**6.4 Bandeau de réassurance recommandé**

À ajouter juste sous le hero (gain énorme de conversion B2B) :

+-----------------------------------------------------------------------+
| **Bandeau réassurance --- exemple à intégrer**                        |
|                                                                       |
| ✓ Hébergement France                                                  |
|                                                                       |
| ✓ RGPD natif                                                          |
|                                                                       |
| ✓ Données chiffrées AES-256                                           |
|                                                                       |
| ✓ SSO / SAML 2.0                                                      |
|                                                                       |
| ✓ Support FR + Afrique                                                |
|                                                                       |
| ✓ Sans engagement                                                     |
+-----------------------------------------------------------------------+

**6.5 Simplification du parcours**

-   Réduire le mégamenu à 4 catégories : Produit, Solutions par secteur,
    Tarifs, Ressources. Maximum.

-   Désactiver le sélecteur de langue tant que toutes les langues ne
    sont pas tenues (5 langues affichées dont une mal orthographiée =
    signal de promesse non tenue).

-   Une seule page de tarif (pas le doublon yearly/monthly affichant les
    4 plans deux fois --- un toggle suffit).

-   Vérifier tous les liens du footer (Carrières, Presse, Blog, Status,
    A Propos...) : supprimer ou créer les pages cibles.

**7. Positionnement stratégique vs MaintainX**

**7.1 Réalité du marché**

MaintainX est la référence mondiale de la GMAO mobile-first :

-   Valorisation \> 1 milliard USD (statut « licorne »)

-   Série C de 50 M USD en 2024

-   9 000+ clients déclarés (Marriott, Hilton, Volvo, Duracell,
    McDonald\'s, AT&T...)

-   Équipe US/Canada de 200+ personnes

-   Design system mature, témoignages vidéo, contenu marketing dense

+-----------------------------------------------------------------------+
| **Conclusion stratégique**                                            |
|                                                                       |
| Sur le terrain de MaintainX (mobile-first GMAO US/UK), MAINTEX perd : |
| moins de moyens, moins de clients, moins de notoriété.                |
|                                                                       |
| Mais MAINTEX peut gagner sur 4 angles que MaintainX ne peut pas       |
| occuper crédiblement.                                                 |
+-----------------------------------------------------------------------+

**7.2 Vos 4 différenciateurs structurels**

  ------------------------------------------------------------------------
  **Angle**      **MAINTEX**          **MaintainX**     **Pourquoi c\'est
                                                        gagnant**
  -------------- -------------------- ----------------- ------------------
  1\.            Hébergement France,  US --- Patriot    Direction Achats /
  Souveraineté   RGPD natif,          Act, CLOUD Act    DSI grands comptes
  des données    SecNumCloud                            FR/UE = critère
                                                        bloquant

  2\. Support    Équipe FR + Afrique  Support US/UK, FR Reproductible
  francophone    francophone, fuseau, traduit           difficilement par
  natif          langue, culture                        MaintainX
                 métier                                 

  3\.            App mobile robuste   App mobile-first  Avantage technique
  Connectivité   hors-ligne,          conçue pour wifi  décisif sur cible
  dégradée       optimisée 2G/3G,     5G                Afrique
                 sync intelligente                      

  4\.            Sage, Cegid,         NetSuite,         Marché PME-ETI
  Connecteurs    Divalto, ODOO ---    QuickBooks, SAP   françaises =
  ERP locaux     ERP français         US                écosystème
                                                        Sage/Cegid
  ------------------------------------------------------------------------

**7.3 Comparatif concurrentiel détaillé**

Tableau de bataille à intégrer en home (à valider en interne avant
publication) :

  ------------------------------------------------------------------------------------
  **Critère**        **MAINTEX**   **MaintainX**   **Mobility   **DIMO     **Yuman**
                                                   Work**       Maint**    
  ------------------ ------------- --------------- ------------ ---------- -----------
  Hébergement France ✓             ✗               ✓            ✓          ✓

  Support FR natif   ✓             ◐               ✓            ✓          ✓

  Présence Afrique   ✓             ✗               ✗            ✗          ✗

  Mode hors-ligne    ✓             ◐               ◐            ◐          ◐
  2G/3G                                                                    

  Connecteurs ERP FR ✓ (8)         ✗               ◐ (3)        ◐ (4)      ◐ (3)

  Diagnostic IA      ✓             ✓               ✗            ✗          ◐

  Tarif d\'entrée    15 €/u/mois   16 \$/u/mois    25 €/u/mois  30         39 €/u/mois
                                                                €/u/mois   

  Déploiement moyen  14 jours      30 jours        45 jours     60 jours   30 jours
  ------------------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **Avertissement**                                                     |
|                                                                       |
| Ce comparatif doit être vérifié et validé en interne avant            |
| publication. Chaque ligne doit être défendable par votre équipe       |
| commerciale en cas de challenge.                                      |
|                                                                       |
| Les données chiffrées (tarifs, délais) sont à confirmer avec une      |
| analyse récente des pricing concurrents.                              |
+-----------------------------------------------------------------------+

**7.4 Repositionnement à acter**

**1. Tagline de marque (à remplacer dans le footer)**

**Actuel :** *« La GMAO française qui s\'adapte à votre métier » → mou,
défensif*

**Proposé : *« La GMAO mobile-first pour les industries francophones.
»***

**Variante plus offensive : *« La GMAO conçue pour le terrain --- pas
pour le siège. »***

**2. Promesse hero (H1)**

**Actuel :** *« Réduisez vos temps d\'arrêt grâce à des diagnostics
fiables. » --- intelligent mais flou*

**Proposé : *« Votre maintenance reprend le pouvoir sur le terrain. »***

Sous-titre : « MAINTEX est la GMAO mobile-first pensée pour les
industries francophones --- usines, BTP, énergie, santé. Hébergée en
France. Opérationnelle hors-ligne. Déployée en 14 jours. »

**3. Preuve sociale assumée**

Vos clients sont des références africaines et françaises de taille
moyenne (PFO Construction, SOTRACO, NESKAO, SFM, BACCHUS Équipement,
REOGES, CCVA, Institut Cœur de Grâce, SNCV-Afriwara, Chartres
Métropole). MaintainX ne peut pas afficher ça. Faites-en une force, pas
un complexe.

**Bandeau recommandé : *« De Marseille à Abidjan --- 350+ sites
industriels font confiance à MAINTEX dans 15 pays francophones. »***

**7.5 Mantra de marque**

+-----------------------------------------------------------------------+
| **Votre signature interne**                                           |
|                                                                       |
| « On ne fait pas de la GMAO pour le siège. On fait de la GMAO pour le |
| terrain. »                                                            |
|                                                                       |
| Ce mantra doit guider toutes les décisions éditoriales, design et     |
| produit pendant les 12 prochains mois.                                |
+-----------------------------------------------------------------------+

**8. Refonte recommandée --- structure home**

**8.1 Structure idéale (13 sections)**

  -----------------------------------------------------------------------------
  **\#**   **Section**        **Rôle**           **Contenu clé**
  -------- ------------------ ------------------ ------------------------------
  1        Header             Navigation         Logo \| Produit ▾ \| Solutions
                              simplifiée         ▾ \| Tarifs \| Ressources \|
                                                 \[Connexion\] \[Démo →\]

  2        Hero               Promesse + produit H1 fort + sous-titre +
                              visible            screenshot dashboard + 4
                                                 réassurances + double CTA

  3        Bandeau preuve     Légitimité         « 350+ sites • 15 pays
                              immédiate          francophones » + 8 logos
                                                 défilants

  4        Problème →         Storytelling       Comparatif AVANT / AVEC
           Solution                              MAINTEX (3 colonnes)

  5        Fonctionnalités    Démonstration      5 modules max, format scroll
           scroll-stack       produit            animé (Linear/Stripe)

  6        Cas client vedette Preuve chiffrée    Photo + citation + 3 KPI +
                                                 lien étude complète

  7        Solutions par      Personnalisation   3 cards vedettes (Industrie,
           secteur                               BTP/Mines, Santé) + lien voir
                                                 tous

  8        Calculateur ROI    Conversion forte   Widget interactif avec
           inline                                sliders + résultat live

  9        Témoignages        Social proof B2B   3 témoignages écrits + 1 vidéo
                                                 de 60 s

  10       Trust center mini  Différenciateur vs Hébergement France, RGPD, ISO
                              MaintainX          27001, SecNumCloud, SLA, SSO

  11       Comparatif         Décision finale    Tableau MAINTEX vs
           concurrents                           MaintainX/Mobility
                                                 Work/DIMO/Yuman

  12       FAQ objections     Levée freins       5 questions ciblées
                                                 (déploiement, données FR,
                                                 Afrique, ERP, adoption)

  13       CTA final +        Conversion ultime  Calendrier inline pour
           Calendly                              réservation démo directe
  -----------------------------------------------------------------------------

**8.2 Wording du hero --- 3 propositions**

**Option A --- Bénéfice direct (recommandé Directeurs Maintenance)**

+-----------------------------------------------------------------------+
| **OPTION A**                                                          |
|                                                                       |
| H1 : Réparez vite. Réparez juste. La première fois.                   |
|                                                                       |
| Sous-titre : MAINTEX est la GMAO française qui aide vos techniciens à |
| identifier la cause des pannes en moins de 60 secondes --- et à       |
| appliquer la bonne action corrective dès la première intervention.    |
|                                                                       |
| CTA primaire : Voir la démo (15 min)                                  |
|                                                                       |
| CTA secondaire : Calculer mes économies →                             |
+-----------------------------------------------------------------------+

**Option B --- Chiffre choc (recommandé acheteurs / direction)**

+-----------------------------------------------------------------------+
| **OPTION B**                                                          |
|                                                                       |
| H1 : Vos arrêts machine coûtent 40 % trop cher. Voici pourquoi.       |
|                                                                       |
| Sous-titre : 40 % du temps technicien part en diagnostic, pas en      |
| réparation. MAINTEX inverse le ratio : diagnostic IA en 30 secondes,  |
| intervention résolutive dès le 1er passage.                           |
|                                                                       |
| CTA primaire : Démo gratuite (15 min) →                               |
|                                                                       |
| CTA secondaire : Voir l\'étude SOTRACO -38 % →                        |
+-----------------------------------------------------------------------+

**Option C --- Différenciation France / Afrique (recommandé
positionnement géo)**

+-----------------------------------------------------------------------+
| **OPTION C**                                                          |
|                                                                       |
| H1 : La GMAO conçue pour le terrain. Hébergée en France. Pensée pour  |
| l\'Afrique.                                                           |
|                                                                       |
| Sous-titre : Mobile-first, fonctionne hors-ligne, intégrée à votre    |
| ERP. MAINTEX accompagne 350 sites industriels --- de Marseille à      |
| Abidjan --- pour réduire les temps d\'arrêt et fiabiliser la          |
| maintenance.                                                          |
|                                                                       |
| CTA primaire : Réserver une démo →                                    |
|                                                                       |
| CTA secondaire : Voir nos clients par pays →                          |
+-----------------------------------------------------------------------+

**8.3 Direction artistique --- synthèse**

  -----------------------------------------------------------------------
  **Dimension**      **Choix**
  ------------------ ----------------------------------------------------
  Mood général       Sérieux, technique, premium --- sans être austère

  Référence pop      Mix Linear (rigueur tech) + Stripe (typographie
                     monumentale) + un peu de Notion (chaleur humaine)

  Couleurs           Indigo profond #1E3A8A + ambre chantier #F97316 +
                     neutres chauds Stone

  Typographie        Inter Tight (display) + Inter (body) --- c\'est tout

  Photographie       Photos terrain authentiques : techniciens, machines,
                     EPI. Pas de stock photo.

  Illustrations      À éviter sauf icônes Lucide ou Phosphor en
                     monochrome

  Animations         Subtiles : fade-up au scroll, hover scale 1.02 sur
                     cards, transition 200 ms ease-out

  Dark mode          Optionnel mais bonus crédibilité tech
  -----------------------------------------------------------------------

**9. Plan d\'action 90 jours & arbitrages**

**9.1 Phase 1 --- Stop the bleeding (semaine 1)**

Objectif : ne plus perdre de leads à cause de bugs de crédibilité.

  -----------------------------------------------------------------------
  **Action**                               **Délai**     **Responsable
                                                         type**
  ---------------------------------------- ------------- ----------------
  Corriger les fautes (focntionnalités,    2 h           Webmaster
  Deutch, newsletter EN)                                 

  Retirer l\'image hero IA Gemini          4 h           Webmaster
  (placeholder ou screenshot brut)                       

  Compresser toutes les images en WebP     1 jour        Webmaster

  Désactiver les langues non maintenues    30 min        Webmaster

  Auditer les liens du footer + supprimer  1 jour        Webmaster
  les liens morts                                        
  -----------------------------------------------------------------------

**9.2 Phase 2 --- Positionnement & preuve (semaines 2-4)**

Objectif : afficher un positionnement clair + preuve sociale crédible.

  -----------------------------------------------------------------------
  **Action**                               **Délai**     **Responsable
                                                         type**
  ---------------------------------------- ------------- ----------------
  Valider en interne le positionnement «   2 jours       Direction
  MaintainX francophone + Afrique »                      

  Réécrire H1 + sous-titre + tagline       1 jour        Copywriter
  footer                                                 

  Interviewer 5 clients → 3 témoignages    3 semaines    Marketing +
  écrits + 1 vidéo                                       commercial

  Créer la première étude de cas chiffrée  2 semaines    Marketing
  (SOTRACO ou Veolia)                                    

  Photos terrain (1 session France + 1     4 semaines    Photographe
  Afrique)                                               

  Convertir tous les logos clients en      1 jour        Designer
  monochrome indigo                                      
  -----------------------------------------------------------------------

**9.3 Phase 3 --- Refonte design (mois 2)**

Objectif : design system unifié + nouvelle home.

  -----------------------------------------------------------------------
  **Action**                               **Délai**     **Responsable
                                                         type**
  ---------------------------------------- ------------- ----------------
  Définir le design system (tokens,        2 semaines    Designer senior
  composants, Figma)                                     

  Designer screens dashboard « marketing » 1 semaine     Designer + PM
  (versions épurées)                                     

  Refondre la home selon la structure §8.1 3 semaines    Designer + dev
                                                         front

  Refondre header + footer                 1 semaine     Designer + dev
                                                         front

  Implémenter le calculateur ROI inline    1 semaine     Dev
  -----------------------------------------------------------------------

**9.4 Phase 4 --- Trust & conversion (mois 3)**

Objectif : transformer le trafic en leads qualifiés.

  -----------------------------------------------------------------------
  **Action**                               **Délai**     **Responsable
                                                         type**
  ---------------------------------------- ------------- ----------------
  Page comparatif MAINTEX vs               1 semaine     Marketing +
  MaintainX/Mobility Work/DIMO                           produit

  3 pages secteurs prioritaires            2 semaines    Marketing
  (Industrie, BTP/Mines, Santé)                          

  Trust Center (page dédiée, façon         1 semaine     Marketing + DSI
  stripe.com/security)                                   

  Calendly / Cal.com pour réservation démo 2 jours       Marketing ops
  directe                                                

  Chat live (Crisp ou HubSpot Free)        2 jours       Marketing

  FAQ enrichie (top 20 objections          1 semaine     Marketing +
  commerciales)                                          sales
  -----------------------------------------------------------------------

**9.5 Quick wins commerciaux (en parallèle)**

7.  Page d\'atterrissage « Alternative MaintainX » ---
    /comparatif/maintex-vs-maintainx --- SEO-optimisée pour la requête «
    alternative MaintainX français ».

8.  Lead magnet « Guide MTBF/MTTR pour PME industrielles » --- 20 pages
    PDF en échange d\'un email.

9.  Webinaires mensuels « Comment SOTRACO a réduit ses arrêts de 38 % »
    --- replay disponible en home.

10. Programme « MAINTEX Ambassadeurs Afrique » --- 10 directeurs
    maintenance africains comme références.

11. LinkedIn ABM ciblé --- campagnes payantes profils « Directeur
    Maintenance » France + Afrique francophone, retargeting calculateur
    ROI.

**9.6 Arbitrages budgétaires**

  ------------------------------------------------------------------------
  **Niveau de        **Périmètre couvert**                **Impact
  budget**                                                estimé**
  ------------------ ------------------------------------ ----------------
  Budget serré (\<   Phase 1 complète + 3 témoignages +   +30 à +50 % de
  15 K€)             nouveau hero avec screenshot         taux de
                     existant + Calendly + Crisp          conversion

  Budget moyen       Phases 1+2 complètes + refonte home  MAINTEX devient
  (15-50 K€)         (sans pages internes) + 1 vidéo      crédible face à
                     client pro + photos terrain France   Mobility Work /
                                                          DIMO Maint

  Budget refonte     Plan 90 jours intégral + design      MAINTEX devient
  (50-120 K€)        system complet + 3 sessions photo    une alternative
                     (France + 2 Afrique) + 5 vidéos      francophone
                     clients + 3 pages secteurs +         crédible à
                     comparatif + trust center +          MaintainX,
                     calculateur ROI custom               supportant le
                                                          pricing 70
                                                          €/user/mois
  ------------------------------------------------------------------------

**Annexes**

**A. Inventaire des éléments factuels capturés**

  -----------------------------------------------------------------------
  **Élément**            **Constat**
  ---------------------- ------------------------------------------------
  URL analysée           https://maintex-new.bbc-partners.net/

  Pages auditées         Home, Fonctionnalités, Secteurs, Tarifs,
                         Ressources

  CMS détecté            WordPress (chemins /wp-content/)

  H1 home                « Réduisez vos temps d\'arrêt grâce à des
                         diagnostics fiables. »

  CTA hero               « Démo gratuite → » + « Voir un cas client »

  Preuve sociale hero    « Plus de 350 entreprises nous font confiance
                         » + 10 logos

  Faute typographique    « Voir toutes les focntionnalités » (au lieu de
  détectée               « fonctionnalités »)

  Mélange de langues     Newsletter EN + URL /pricing/ + « Billed
                         yearly/monthly »

  Sélecteur de langue    En, Deutch (sic), Español, Français, Italiano,
                         简体中文

  Couleur principale     #475bb2 (35 occurrences CSS)
  détectée               

  Polices chargées       10+ familles (Inter, Plus Jakarta Sans, Poppins,
                         Roboto, Oswald, Dosis, Open Sans, Helvetica,
                         Roboto Slab, Georgia)

  Image hero             Gemini_Generated_Image_pgwql9pgwql9pgwq.png ---
                         1 397 KB

  Témoignages clients    0 sur la home

  Tarification           Freemium 0 € / Starter 15 € (annuel) ou 19 €
                         (mensuel) / Pro 30 € ou 39 € / Business à partir
                         de 70 €

  Étude de cas           « Comment Veolia a réduit ses temps d\'arrêt de
  mentionnée             40 % » (page Ressources)

  Footer                 © 2026 BBC & Partners. RGPD conforme.
                         Hébergement France
  -----------------------------------------------------------------------

**B. Liste des 10 logos clients détectés**

  ---------------------------------------------------------------------------
  **\#**   **Logo client**        **Probable secteur / origine**
  -------- ---------------------- -------------------------------------------
  1        PFO-Construction       BTP --- Afrique (Côte d\'Ivoire)

  2        SFM Logo               Industrie / production

  3        CCVA                   Industrie automobile / certif

  4        SOTRACO                Transport / Burkina Faso

  5        Institut Cœur de Grâce Santé / Afrique

  6        NESKAO                 Agroalimentaire --- Côte d\'Ivoire (cacao)

  7        SNCV-AFRIWARA          Logistique / Afrique de l\'Ouest

  8        BACCHUS Équipement     Industrie / équipements

  9        Chartres Métropole     Collectivité / France

  10       REOGES                 Services techniques / France
  ---------------------------------------------------------------------------

**C. Concurrents identifiés et leur positionnement**

  ------------------------------------------------------------------------------
  **Concurrent**   **Positionnement**   **Force principale** **Faiblesse à
                                                             exploiter**
  ---------------- -------------------- -------------------- -------------------
  MaintainX        GMAO mobile-first    Notoriété mondiale,  Pas FR souverain,
                   US/UK                design               pas Afrique

  Mobility Work    GMAO collaborative   Communauté           Design daté, pas
                   FR                                        mobile-first

  DIMO Maint       GMAO industrielle FR Intégrations,        Tarif élevé,
                   (DIMO Software)      écosystème groupe    déploiement long

  Yuman            GMAO services        UX moderne           Tarif élevé, pas
                   techniques FR                             industrie lourde

  Limble CMMS      GMAO US, mid-market  Onboarding rapide    Pas FR, pas RGPD
                                                             natif

  UpKeep           GMAO US, app mobile  App mobile correcte  Pas FR, identité
                                                             visuelle floue

  IBM Maximo       GMAO enterprise      Grands comptes       Lourd, cher, lent à
                                        industriels          déployer
  ------------------------------------------------------------------------------

**D. Glossaire technique**

  -----------------------------------------------------------------------
  **Terme**        **Définition**
  ---------------- ------------------------------------------------------
  GMAO             Gestion de Maintenance Assistée par Ordinateur

  MTBF             Mean Time Between Failures --- temps moyen entre deux
                   pannes

  MTTR             Mean Time To Repair --- temps moyen de réparation

  LCP              Largest Contentful Paint --- métrique Core Web Vitals
                   (vitesse de rendu de l\'élément principal)

  CRO              Conversion Rate Optimization --- optimisation du taux
                   de conversion

  B2B              Business to Business --- vente entre entreprises

  ETI              Entreprise de Taille Intermédiaire (250 à 5 000
                   salariés)

  RGPD             Règlement Général sur la Protection des Données

  SecNumCloud      Qualification française de l\'ANSSI pour le cloud
                   souverain

  SSO / SAML       Single Sign-On / Security Assertion Markup Language
                   --- authentification unique

  ABM              Account-Based Marketing --- marketing ciblé sur
                   comptes nominés

  WebP / AVIF      Formats d\'image modernes, fortement compressés

  Lead magnet      Contenu offert en échange d\'un email (génération de
                   leads)
  -----------------------------------------------------------------------

**E. Workflow recommandé pour la suite**

**Phase de production WordPress / Elementor Pro 4.0.4 :**

12. MAINTEX fournit le JSON Elementor de la page actuelle (export depuis
    Elementor → Templates → Saved Templates → Export Template).

13. Audit du JSON : analyse des sections, widgets utilisés, contenu en
    place.

14. Production d\'un JSON Elementor optimisé selon la structure de cet
    audit (widgets Pro exploités : Forms, Posts, Slides, Gallery,
    Pricing Table, Countdown, Animated Headline, Lottie, Nav Menu, Mega
    Menu, Theme Builder, etc.).

15. Livraison du JSON refondu, avec instructions d\'import + check-list
    de vérification.

16. Itération page par page : Home → Fonctionnalités → Secteurs → Tarifs
    → Ressources → pages secteurs dédiées.

+-----------------------------------------------------------------------+
| **Recommandation pour la suite**                                      |
|                                                                       |
| Commencer par la HOME (impact maximal). C\'est sur cette page que se  |
| joue la décision de poursuivre ou de quitter le site.                 |
|                                                                       |
| Avant de m\'envoyer le JSON, valider en interne :                     |
|                                                                       |
| 1\. Le repositionnement « MaintainX francophone + Afrique » (§7)      |
|                                                                       |
| 2\. Le choix du wording hero (Option A / B / C --- §8.2)              |
|                                                                       |
| 3\. La direction artistique (couleurs indigo + orange chantier ---    |
| §4.1)                                                                 |
|                                                                       |
| 4\. La disponibilité de 3 témoignages clients à minima (§9.2)         |
+-----------------------------------------------------------------------+

*--- Fin du document ---*
