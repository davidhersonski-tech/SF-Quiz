window.SF_QUIZ_QUESTIONS = [
  {
    id: 1,
    module: "Employee Central",
    points: 3,
    max: 3,
    prompt: "Was können Elemente einer Transaktion sein?",
    solution: "Eine Employee-Central-Transaktion kann Geschäftsregeln ausführen, einen Workflow starten und über Ereignis sowie Ereignisgrund fachlich klassifiziert werden. Eine Planstelle kann von einer Transaktion betroffen sein, ist aber selbst kein allgemeines Transaktionselement.",
    options: [
      { text: "Geschäftsregeln", correct: true, explanation: "Geschäftsregeln prüfen Bedingungen, setzen Werte, leiten Ereignisgründe ab oder bestimmen, welcher Workflow ausgelöst wird." },
      { text: "Workflow", correct: true, explanation: "Ein Workflow bildet die Genehmigungskette einer Änderung ab. Die Änderung wird je nach Konfiguration erst nach der Genehmigung wirksam." },
      { text: "Ereignisse und Ereignisgründe", correct: true, explanation: "Das Ereignis beschreibt die grobe Personalmaßnahme, etwa Einstellung oder Stellenänderung. Der Ereignisgrund beschreibt den konkreten fachlichen Anlass." },
      { text: "Planstellen", correct: false, explanation: "Eine Planstelle ist ein Positionsobjekt für Personalbedarf, Hierarchie und Besetzung. Sie kann Gegenstand einer Änderung sein, gehört aber nicht zu den allgemeinen Steuerelementen einer Transaktion." }
    ]
  },
  {
    id: 2,
    module: "Plattformadministration",
    points: 1,
    max: 1,
    prompt: "Welche Aussage über das Upgrade Center ist falsch?",
    solution: "Das Upgrade Center zeigt optionale Erweiterungen, Voraussetzungen und Berechtigungen. Ohne die erforderliche Berechtigung darf ein Benutzer ein Upgrade nicht ausführen.",
    options: [
      { text: "Man kann ein Upgrade für später vormerken.", correct: false, explanation: "Interessante Erweiterungen können für eine spätere Aktivierung markiert werden. Dadurch wird das Upgrade noch nicht sofort ausgeführt." },
      { text: "Man kann ein aktuelles Upgrade rückgängig machen.", correct: false, explanation: "Das gilt nur für Upgrades, die ausdrücklich eine Undo-Funktion unterstützen. Im Kurs wird dafür typischerweise ein begrenzter Zeitraum von bis zu 30 Tagen genannt." },
      { text: "Man sieht dort Voraussetzungen und erforderliche Berechtigungen.", correct: false, explanation: "Die Detailansicht informiert über Voraussetzungen, Auswirkungen und die für die Aktivierung benötigten Rechte." },
      { text: "Man kann dort Upgrades ausführen, für die man keine Berechtigung besitzt.", correct: true, explanation: "Das ist die falsche Aussage. Auch das Upgrade Center unterliegt RBP; fehlende Berechtigungen können nicht umgangen werden." }
    ]
  },
  {
    id: 3,
    module: "Personensuche",
    points: 1,
    max: 1,
    prompt: "Ein Benutzer sucht in der Personensuche nach „Joerg“. Welches Ergebnis liefert die Fuzzy-Suche zusätzlich?",
    solution: "Die Fuzzy-Suche berücksichtigt ähnliche Schreibweisen, kleinere Tippfehler und Zeichenvarianten. Deshalb kann „Joerg“ auch „Jörg“ finden.",
    options: [
      { text: "Nur exakt „Joerg“", correct: false, explanation: "Eine reine Exaktsuche würde Varianten ausschließen. Gerade das soll die Fuzzy-Suche vermeiden." },
      { text: "Keine, weil die Suche leer bleibt", correct: false, explanation: "Die Schreibweise ohne Umlaut ist ein typischer Anwendungsfall für tolerantere Suchlogik." },
      { text: "Alle Mitarbeiter mit „J“", correct: false, explanation: "Fuzzy bedeutet ähnlich, nicht beliebig breit. Ein einzelner Anfangsbuchstabe reicht nicht als sinnvolle Übereinstimmung." },
      { text: "„Jörg“", correct: true, explanation: "„oe“ und „ö“ sind naheliegende Schreibvarianten. Der Mitarbeiter kann deshalb zusätzlich als Treffer erscheinen." }
    ]
  },
  {
    id: 4,
    module: "Joule & KI",
    points: 1,
    max: 1,
    prompt: "Ein Vorgesetzter sagt zu Joule: „Aktualisiere die Kostenstelle für Marcus Hoff.“ Welchem Anwendungsfall entspricht das?",
    solution: "Joule soll eine konkrete Änderung durchführen. Das ist ein transaktionaler Anwendungsfall und nicht lediglich die Anzeige von Informationen oder eine Navigation.",
    options: [
      { text: "Berichtsanalyse", correct: false, explanation: "Bei einer Berichtsanalyse würde Joule vorhandene Daten auswerten oder zusammenfassen, aber keinen Mitarbeiterdatensatz verändern." },
      { text: "Transaktion", correct: true, explanation: "Die Kostenstelle soll geändert werden. Joule kann hierfür eine konfigurierte Employee-Central-Schnellaktion beziehungsweise Transaktion ausführen." },
      { text: "Information", correct: false, explanation: "Ein informativer Anwendungsfall beantwortet Fragen, etwa nach einer Richtlinie oder einem vorhandenen Wert, ohne Daten zu verändern." },
      { text: "Navigation", correct: false, explanation: "Bei Navigation würde Joule lediglich auf die passende SuccessFactors-Seite weiterleiten." }
    ]
  },
  {
    id: 5,
    module: "Rollenbasierte Berechtigungen",
    points: 1,
    max: 1,
    prompt: "Jeder darf alle HR-Daten im System ändern; ein Berechtigungskonzept gibt es nicht.",
    solution: "Die Aussage ist falsch. SuccessFactors verwendet rollenbasierte Berechtigungen, um Funktionsrechte, Feldzugriffe und Zielpopulationen zu begrenzen.",
    options: [
      { text: "Richtig", correct: false, explanation: "Ein uneingeschränkter Zugriff aller Benutzer wäre mit Datenschutz, Aufgabentrennung und dem SuccessFactors-Berechtigungsmodell unvereinbar." },
      { text: "Falsch", correct: true, explanation: "RBP legt fest, wer welche Funktionen für welche Zielpersonen verwenden darf. Sichtbarkeit und Bearbeitbarkeit können getrennt gesteuert werden." }
    ]
  },
  {
    id: 6,
    module: "Rollenbasierte Berechtigungen",
    points: 1,
    max: 1,
    prompt: "Welche Aussage über eine Berechtigungsrolle trifft zu?",
    solution: "Die Berechtigungsrolle enthält die eigentlichen Funktions- und Datenrechte. Berechtigungsgruppen bestimmen dagegen, wer Rolleninhaber ist; Zielpopulationen begrenzen, für wen die Rechte gelten.",
    options: [
      { text: "Sie bestimmt die Gruppe von Benutzern, auf die jemand zugreifen kann.", correct: false, explanation: "Das beschreibt die Zielpopulation einer Rollenzuweisung, nicht den Inhalt der Berechtigungsrolle selbst." },
      { text: "Sie definiert die Managementebene des Mitarbeiters.", correct: false, explanation: "Managementebenen ergeben sich aus Organisations- oder Stelleninformationen und nicht aus einer Berechtigungsrolle." },
      { text: "Sie ersetzt die Berechtigungsgruppe vollständig.", correct: false, explanation: "Rolle und Gruppe ergänzen sich. Die Rolle enthält Rechte; die Gruppe enthält beziehungsweise ermittelt die Rolleninhaber." },
      { text: "Sie bestimmt, was ein Benutzer im System aufrufen und ausführen darf.", correct: true, explanation: "In der Rolle werden beispielsweise Administratorrechte, Mitarbeiterdatenrechte sowie Lese- und Bearbeitungsrechte aktiviert." }
    ]
  },
  {
    id: 7,
    module: "Recruiting",
    points: 4,
    max: 4,
    prompt: "Welche Schritte gehören typischerweise zum Recruiting-Prozess?",
    solution: "Der typische Ablauf umfasst Stellenanforderung, Veröffentlichung, Prüfung der Bewerbungen sowie Auswahl und Einstellung. Die Formulierung „Mitarbeitergespräche“ meint üblicherweise Personal- oder Entwicklungsgespräche und nicht Bewerbungsgespräche.",
    options: [
      { text: "Durchführen von Mitarbeitergesprächen", correct: false, explanation: "Bewerbungsgespräche wären Teil des Recruitings. Der Begriff Mitarbeitergespräch bezeichnet jedoch normalerweise ein Gespräch mit bereits beschäftigten Personen, etwa zu Leistung oder Entwicklung." },
      { text: "Prüfen und Bewerten von Bewerbungen", correct: true, explanation: "Recruiter und Hiring Manager sichten Bewerbungen, vergleichen Qualifikationen und bewegen Kandidaten durch die Statuspipeline." },
      { text: "Erstellen einer Stellenanforderung", correct: true, explanation: "Die Stellenanforderung enthält Bedarf, Anforderungen, Verantwortliche, Genehmigungsweg und die Grundlage für das Posting." },
      { text: "Personalakten archivieren", correct: false, explanation: "Die Archivierung von Personalakten gehört zur Personaladministration beziehungsweise Dokumentenaufbewahrung, nicht zum typischen Recruiting-Ablauf." },
      { text: "Auswahl und Einstellung eines Kandidaten", correct: true, explanation: "Nach Bewertung, Interviews und Angebot wird ein geeigneter Kandidat ausgewählt und in den Einstellungsprozess übergeben." },
      { text: "Veröffentlichen der Stelle", correct: true, explanation: "Eine genehmigte Stellenanforderung wird über interne oder externe Kanäle ausgeschrieben, damit Bewerbungen eingehen können." }
    ]
  },
  {
    id: 8,
    module: "Recruiting",
    points: 1,
    max: 1,
    prompt: "Welche Frage lässt sich mit Recruiting Advanced Analytics beantworten?",
    solution: "Recruiting Advanced Analytics unterstützt die Analyse von Quellen, Kampagnen, Kosten und der Qualität beziehungsweise Wirksamkeit von Bewerberquellen.",
    options: [
      { text: "Welche Quellen brachten bei der letzten Ausschreibung die qualifiziertesten Kandidaten?", correct: true, explanation: "Sourcing Analytics verknüpft Recruiting-Ergebnisse mit Quellen und Kampagnen und hilft dadurch, wirksame Kanäle zu identifizieren." },
      { text: "Welche Pflichtkurse hat ein neuer Mitarbeiter abgeschlossen?", correct: false, explanation: "Das ist eine Fragestellung aus SAP SuccessFactors Learning." },
      { text: "Wann läuft das Passwort eines Administrators ab?", correct: false, explanation: "Kennwort- und Kontoinformationen gehören zur Plattform- beziehungsweise Identitätsadministration." },
      { text: "Wie hoch ist der Urlaubsanspruch eines Bewerbers?", correct: false, explanation: "Urlaubsansprüche sind Employee-Central-Time-Off-Daten eines Mitarbeiters und keine Recruiting-Analytics-Kennzahl." }
    ]
  },
  {
    id: 9,
    module: "Designmanager",
    points: 1,
    max: 1,
    prompt: "Welche Designs im Designmanager können gelöscht werden?",
    solution: "Nur selbst erstellte, benutzerdefinierte Designs können gelöscht werden. SAP-Standarddesigns bleiben als Systemvorlagen erhalten.",
    options: [
      { text: "Nur das voreingestellte Standarddesign", correct: false, explanation: "Das Standarddesign kann gewechselt oder angepasst eingesetzt werden, ist aber nicht das einzige löschbare Design." },
      { text: "Nur benutzerdefinierte Designs", correct: true, explanation: "Der Design- beziehungsweise Theme Manager erlaubt das Löschen eigener Themes. Vorher sollte ein anderes Theme als Standard festgelegt werden." },
      { text: "Alle Designs", correct: false, explanation: "SAP-Standardthemes können nicht beliebig entfernt werden, weil sie Bestandteil der ausgelieferten Benutzeroberfläche sind." }
    ]
  },
  {
    id: 10,
    module: "Proxy",
    points: 1,
    max: 1,
    prompt: "Ein Mitarbeiter ist abwesend, obwohl ein Formular fällig wird. Mit welcher Funktion kann ein Kollege das Formular in seinem Namen ausfüllen?",
    solution: "Die Vertreter- oder Proxy-Funktion erlaubt einem berechtigten Benutzer, für definierte Bereiche im Namen einer anderen Person zu handeln.",
    options: [
      { text: "Admin-Meldungen", correct: false, explanation: "Admin-Meldungen informieren Administratoren über relevante Systemhinweise, ersetzen aber keinen Benutzer." },
      { text: "Upgrade Center", correct: false, explanation: "Das Upgrade Center dient zur Aktivierung optionaler Erweiterungen und hat nichts mit Stellvertretung zu tun." },
      { text: "Prüftool", correct: false, explanation: "Das Prüftool findet Konfigurationsprobleme. Es übernimmt keine Aufgaben für abwesende Mitarbeiter." },
      { text: "Vertreterfunktion (Proxy)", correct: true, explanation: "Ein zugewiesener Proxy kann sich als die andere Person vertreten lassen und die freigegebenen Aufgaben in deren Namen erledigen." }
    ]
  },
  {
    id: 11,
    module: "Employee Central",
    points: 1,
    max: 1,
    prompt: "Employee Central bietet flexible Funktionen, mit denen Unternehmen ihre Organisations-, Stellen- und Gehaltsstrukturen konfigurieren können.",
    solution: "Die Aussage ist richtig. Foundation Objects, Position Management, Associations, Datenmodelle und Regeln erlauben eine anpassbare Abbildung der Unternehmensstruktur.",
    options: [
      { text: "Richtig", correct: true, explanation: "Unternehmen können unter anderem Legal Entities, Business Units, Divisionen, Abteilungen, Standorte, Kostenstellen, Stellenklassifizierungen und Gehaltsstrukturen konfigurieren." },
      { text: "Falsch", correct: false, explanation: "Eine ausschließlich starre Standardstruktur würde den unterschiedlichen Organisationsmodellen der Kunden nicht gerecht." }
    ]
  },
  {
    id: 12,
    module: "Systemüberwachung",
    points: 1,
    max: 1,
    prompt: "Sie möchten den Status eingeplanter Jobs überwachen und sich bei Fehlern per E-Mail benachrichtigen lassen. Welches Tool nutzen Sie?",
    solution: "Der Ausführungsmanager beziehungsweise Execution Manager zeigt Status, Laufzeit und Fehler eingeplanter Jobs und Integrationen und unterstützt Benachrichtigungen.",
    options: [
      { text: "Upgrade Center", correct: false, explanation: "Dort werden optionale Produktupgrades verwaltet, nicht die Ausführung geplanter Jobs überwacht." },
      { text: "Vertreter verwalten", correct: false, explanation: "Dieses Werkzeug steuert Proxy-Zuweisungen zwischen Benutzern." },
      { text: "Ausführungsmanager", correct: true, explanation: "Im Execution Manager lassen sich geplante Jobs und verschiedene Integrationen überwachen sowie Benachrichtigungen für definierte Status einrichten." }
    ]
  },
  {
    id: 13,
    module: "Instanz & Provisioning",
    points: 1,
    max: 1,
    prompt: "Ein Mitarbeiter meldet sich jeden Morgen an und arbeitet mit seinen Aufgaben. Mit welchem Teil des Systems arbeitet er, und wo werden die rollenbasierten Berechtigungen gepflegt?",
    solution: "Der tägliche Arbeitsbereich ist die SuccessFactors-Instanz. Dort werden im Admin-Center auch Berechtigungsgruppen und Berechtigungsrollen gepflegt.",
    options: [
      { text: "Mit dem Provisioning", correct: false, explanation: "Provisioning ist ein geschützter Implementierungs- und Backendbereich für ausgebildete, autorisierte Benutzer und nicht die tägliche Mitarbeiteroberfläche." },
      { text: "Mit dem Career Site Builder", correct: false, explanation: "Career Site Builder dient zur Gestaltung externer Recruiting-Karriereseiten." },
      { text: "Mit dem Ausführungsmanager", correct: false, explanation: "Der Execution Manager ist ein spezielles Überwachungswerkzeug innerhalb der Administration." },
      { text: "Mit der Instanz", correct: true, explanation: "Die Instanz ist das Frontend für Mitarbeiter und Administratoren. RBP wird dort über das Admin-Center eingerichtet." }
    ]
  },
  {
    id: 14,
    module: "Benutzeroberfläche",
    points: 1,
    max: 1,
    prompt: "Im Organigramm Ihres Unternehmens sollen keine Fotos mehr angezeigt werden. Wo stellen Sie das ein?",
    solution: "Die Darstellung von Personen und Feldern im Organigramm wird in der Organigrammkonfiguration gesteuert. Dort kann die Fotoanzeige deaktiviert werden.",
    options: [
      { text: "Im Designmanager", correct: false, explanation: "Der Designmanager beziehungsweise Theme Manager gestaltet das allgemeine Erscheinungsbild der Instanz, etwa Farben, Logos, Hintergründe und gruppenspezifische Themes. Er steuert nicht den fachlichen Inhalt einer Organigrammkarte." },
      { text: "In Mobile Funktionen aktivieren", correct: false, explanation: "In den Einstellungen für mobile Funktionen wird festgelegt, welche SuccessFactors-Funktionen in der mobilen App verfügbar sind. Die Fotoanzeige des regulären Organigramms wird dort nicht konfiguriert." },
      { text: "In der Organigrammkonfiguration", correct: true, explanation: "Hier werden Darstellung und Verhalten des Organigramms gepflegt. Dazu können Fotos, Namen, Stellenbezeichnungen, Abteilungen, zusätzliche Felder, Karteninhalte und weitere Anzeigeoptionen gehören." },
      { text: "In den E-Mail-Benachrichtigungsvorlagen", correct: false, explanation: "E-Mail-Vorlagen steuern Betreff, Nachrichtentext, Platzhalter und teilweise Empfänger von Systembenachrichtigungen. Sie verändern keine Organigrammansicht." }
    ]
  },
  {
    id: 15,
    module: "Personenprofil",
    points: 3,
    max: 3,
    prompt: "Aus welchen SuccessFactors-Lösungen zeigt das Personenprofil konsolidierte Informationen an?",
    solution: "Das Personenprofil bündelt Informationen aus mehreren SuccessFactors-Lösungen. Zu den im Kurs genannten Beispielen gehören Employee Central, Learning, Performance & Goals und Compensation.",
    options: [
      { text: "Employee Central", correct: true, explanation: "Employee Central liefert zentrale persönliche, beschäftigungsbezogene, organisatorische und vergütungsbezogene HR-Daten." },
      { text: "SAP S/4HANA Finance", correct: false, explanation: "S/4HANA Finance ist keine SuccessFactors-Lösung, deren Informationen standardmäßig als Personenprofilbereich genannt werden." },
      { text: "Learning", correct: true, explanation: "Learning kann beispielsweise Lernaktivitäten, Qualifikationen oder Trainingsinformationen im Mitarbeiterkontext bereitstellen." },
      { text: "Compensation", correct: true, explanation: "Compensation stellt vergütungsbezogene Talentinformationen bereit, soweit sie konfiguriert und berechtigt sind." }
    ]
  },
  {
    id: 16,
    module: "Recruiting",
    points: 4,
    max: 4,
    prompt: "Welche sind die vier Säulen des Recruitings in SuccessFactors?",
    solution: "Der Kurs nennt Stellenanforderungs- und Bewerbermanagement, eine Self-Service-Karriereseite, Candidate Relationship Management und Sourcing beziehungsweise Recruiting Analytics.",
    options: [
      { text: "Karriereseite", correct: true, explanation: "Mit Career Site Builder entstehen markengerechte, responsive Karriereseiten für Stellensuche und Kandidatenansprache." },
      { text: "Analyse der Personalbeschaffung", correct: true, explanation: "Recruiting Advanced Analytics bewertet Quellen, Kampagnen, Kosten und Recruiting-Ergebnisse." },
      { text: "Aufbau- und Ablauforganisation", correct: false, explanation: "Organisationsstrukturen gehören vor allem zu Employee Central und Position Management, nicht zu den vier Recruiting-Hauptkomponenten." },
      { text: "Personalkostenplanung", correct: false, explanation: "Personalkostenplanung ist ein Planungs- beziehungsweise Vergütungsthema und keine der vier Recruiting-Säulen." },
      { text: "Stellenanforderungs- und Bewerbermanagement", correct: true, explanation: "Recruiting Management unterstützt Anforderungen, Postings, Bewerbungen, Statuspipeline, Auswahl und Angebote." },
      { text: "Bewerberbeziehungsmanagement", correct: true, explanation: "Candidate Relationship Management nutzt Talentpools, Formulare und Kampagnen, um auch passive Kandidaten langfristig anzusprechen." }
    ]
  },
  {
    id: 17,
    module: "Employee Central",
    points: 1,
    max: 1,
    prompt: "Eine Führungskraft ändert über Manager Self-Service Stelleninformationen, die zum aktuellen Datum gültig sind. Was geschieht mit den Daten für andere SuccessFactors-Module?",
    solution: "Aktuelle Employee-Central-Daten werden nach dem Speichern beziehungsweise nach Abschluss eines erforderlichen Workflows in Echtzeit für integrierte SuccessFactors-Prozesse synchronisiert.",
    options: [
      { text: "Sie werden erst beim nächsten Jahreswechsel übertragen.", correct: false, explanation: "Die Aktualisierung ist nicht an ein Kalenderjahr gebunden." },
      { text: "Sie werden nach dem Sichern beziehungsweise Genehmigen in Echtzeit synchronisiert.", correct: true, explanation: "Ohne Workflow kann die Änderung nach dem Speichern wirken. Bei einem Workflow erfolgt die fachliche Übernahme nach der Genehmigung." },
      { text: "Sie müssen manuell per CSV importiert werden.", correct: false, explanation: "CSV-Importe dienen der Datenanlage oder Massenpflege, sind aber nicht der Standardweg für eine bereits im System ausgeführte MSS-Transaktion." },
      { text: "Sie werden nie an andere Module übergeben.", correct: false, explanation: "Die integrierte Suite nutzt zentrale Mitarbeiterdaten gerade deshalb modulübergreifend." }
    ]
  },
  {
    id: 18,
    module: "Upgrade Center",
    points: 2,
    max: 2,
    prompt: "Welche Funktionen bietet das Upgrade Center?",
    solution: "Im Upgrade Center werden optionale Erweiterungen aktiviert. Unterstützte, reversible Upgrades können über Undo zurückgenommen werden. Gemeint sind nicht die obligatorischen SAP-Release-Updates.",
    options: [
      { text: "Adressänderung", correct: false, explanation: "Adressänderungen sind Employee- oder Manager-Self-Service- beziehungsweise HR-Transaktionen." },
      { text: "Rückgängig machen von Aktualisierungen", correct: true, explanation: "Präziser: Rückgängig machen von Upgrades, die ausdrücklich Undo unterstützen. Nicht jede Erweiterung und kein allgemeines SAP-Release lässt sich zurückrollen." },
      { text: "Erstellen einer Stellenanforderung", correct: false, explanation: "Stellenanforderungen werden in Recruiting oder aus einer integrierten Position heraus erstellt." },
      { text: "Aktivierung von Erweiterungen", correct: true, explanation: "Customer-configured Enhancements können im Upgrade Center geprüft und aktiviert oder für später markiert werden." }
    ]
  },
  {
    id: 19,
    module: "Employee Central",
    points: 2,
    max: 2,
    prompt: "Daten können in zwei Haupttypen kategorisiert werden. In welche?",
    solution: "Employee Central unterscheidet im Grundmodell zwischen Organisationsdaten und Mitarbeiterdaten.",
    options: [
      { text: "Technikdaten", correct: false, explanation: "Technische Metadaten und Konfiguration existieren zwar, bilden aber nicht die beiden im Kurs gefragten HR-Hauptkategorien." },
      { text: "Organisationsdaten", correct: true, explanation: "Dazu gehören beispielsweise Firma, Business Unit, Division, Abteilung, Standort, Kostenstelle und Stellenklassifizierung." },
      { text: "Mitarbeiterdaten", correct: true, explanation: "Hierzu zählen persönliche Daten, Beschäftigung, Job Information, Vergütung und weitere personenspezifische Informationen." },
      { text: "Lebensdaten", correct: false, explanation: "Dieser Begriff ist keine entsprechende Datenkategorie in Employee Central." }
    ]
  },
  {
    id: 20,
    module: "Admin-Center",
    points: 1,
    max: 1,
    prompt: "Sie suchen im Admin-Center unter „Tools“ und in der Aktionssuche nach „Startseite“. Was stellen Sie fest?",
    solution: "Die Tools-Suche ist auf Admin-Center-Werkzeuge begrenzt. Die Aktionssuche berücksichtigt darüber hinaus weitere Aktionen und kann deshalb mehr Ergebnisse liefern.",
    options: [
      { text: "Die Aktionssuche liefert mehr Ergebnisse, da die Kachel nur Admin-Center-Werkzeuge durchsucht.", correct: true, explanation: "Genau dieser Vergleich wird in THR80 praktisch durchgeführt: Tool Search ist enger auf die Administration fokussiert." },
      { text: "Die Kachel „Tools“ liefert mehr Ergebnisse als die Aktionssuche.", correct: false, explanation: "Die Tools-Kachel besitzt den engeren Suchbereich und liefert deshalb normalerweise nicht mehr allgemeine Aktionen." },
      { text: "Nur die Kachel „Tools“ unterstützt englische Suchbegriffe.", correct: false, explanation: "Gerade die Aktionssuche kann auch bei nicht englischer Oberfläche englische Suchbegriffe unterstützen." },
      { text: "Beide liefern immer identische Ergebnisse.", correct: false, explanation: "Sie überschneiden sich, haben aber einen unterschiedlichen Suchumfang." }
    ]
  },
  {
    id: 21,
    module: "Recruiting",
    points: 1,
    max: 1,
    prompt: "Welche Funktion zählt zu den Hauptkomponenten von SAP SuccessFactors Recruiting?",
    solution: "Candidate Relationship Management ist eine Recruiting-Hauptkomponente und unterstützt Talentpools sowie die längerfristige Kandidatenansprache.",
    options: [
      { text: "Kalibrierung", correct: false, explanation: "Kalibrierung gehört zu Performance- und Talentprozessen, nicht zu den Recruiting-Hauptkomponenten." },
      { text: "Kandidatenbeziehungsmanagement", correct: true, explanation: "CRM hilft beim Aufbau von Talentpools, bei Kampagnen und bei der Pflege von Beziehungen zu aktiven und passiven Kandidaten." },
      { text: "Zeiterfassung", correct: false, explanation: "Zeiterfassung gehört zu Employee Central Time beziehungsweise Time Tracking." }
    ]
  },
  {
    id: 22,
    module: "Onboarding",
    points: 1,
    max: 1,
    prompt: "Der Onboarding-Prozess kann nur für externe Neueinstellungen gestartet werden; durch eine Versetzung kann der Prozess nicht ausgelöst werden.",
    solution: "Die Aussage ist falsch. Onboarding unterstützt auch interne Einstellungen. In Employee Central kann ein entsprechend konfiguriertes Transfer-Ereignis den internen Onboarding-Prozess auslösen.",
    options: [
      { text: "Richtig", correct: false, explanation: "Das würde interne Einstellungen, Wechsel in eine neue Rolle und bestimmte Versetzungsszenarien ausschließen, die im Kurs ausdrücklich behandelt werden." },
      { text: "Falsch", correct: true, explanation: "Interne Onboarding-Prozesse können aus Employee Central oder Recruiting angestoßen werden. Die konkrete Auslösung hängt von Ereignissen und Geschäftsregeln ab." }
    ]
  },
  {
    id: 23,
    module: "Aktionssuche",
    points: 1,
    max: 1,
    prompt: "Ein Benutzer arbeitet mit deutscher Oberfläche. Kann er in der Aktionssuche trotzdem mit englischen Begriffen nach Werkzeugen suchen?",
    solution: "Ja. Laut THR80 unterstützt die Aktionssuche englische Suchbegriffe auch dann, wenn die SuccessFactors-Oberfläche in einer anderen Sprache verwendet wird.",
    options: [
      { text: "Nur wenn er Provisioning-Zugriff besitzt.", correct: false, explanation: "Provisioning-Zugriff ist für die Aktionssuche nicht erforderlich. Ob ein Ergebnis geöffnet werden darf, bestimmen die normalen Berechtigungen." },
      { text: "Nein, nur deutsche Begriffe sind erlaubt.", correct: false, explanation: "Zusätzlich zu lokalisierten Begriffen können englische Suchbegriffe verwendet werden." },
      { text: "Ja, die Aktionssuche unterstützt englische Suchbegriffe.", correct: true, explanation: "Das erleichtert die Navigation, weil viele SAP-Werkzeugnamen und Kursbezeichnungen auf Englisch bekannt sind." }
    ]
  },
  {
    id: 24,
    module: "Onboarding",
    points: 2,
    max: 2,
    prompt: "Der Onboarding-Prozess kann aus folgenden Quellen eingeleitet werden:",
    solution: "Für interne Einstellungen nennt der Kurs Employee Central und Recruiting als mögliche Quellen. Recruiting kann auch mit einem externen ATS zusammenspielen.",
    options: [
      { text: "Nachfolgeplanung", correct: false, explanation: "Succession Planning identifiziert Nachfolger und Talent, startet aber nicht unmittelbar den hier gefragten Onboarding-Prozess." },
      { text: "Employee Central", correct: true, explanation: "Ein entsprechend konfiguriertes Job- oder Transfer-Ereignis in Employee Central kann Internal Hire Onboarding auslösen." },
      { text: "Karriere-Arbeitsblatt", correct: false, explanation: "Das Career Worksheet unterstützt Entwicklungs- und Karriereplanung, nicht die Einleitung eines Onboarding-Prozesses." },
      { text: "Recruiting", correct: true, explanation: "Nach Auswahl und Angebot kann Recruiting den Kandidaten beziehungsweise internen Bewerber an Onboarding übergeben." }
    ]
  },
  {
    id: 25,
    module: "Employee Central",
    points: 1,
    max: 1,
    prompt: "Sie ändern in Employee Central ein zeitabhängiges Objekt zum Stichtag heute. Was ist das Ergebnis?",
    solution: "Bei einer regulären zeitabhängigen Änderung wird ein neuer Datensatz mit Wirksamkeitsdatum in die Historie eingefügt. Davon zu unterscheiden ist „Make Correction“, das einen vorhandenen Satz berichtigt.",
    options: [
      { text: "Die alten Werte werden ohne Historie überschrieben.", correct: false, explanation: "Das wäre eher die Wirkung einer Korrektur bei nicht zeitabhängigen Daten. Effective Dating dient gerade dem Erhalt der zeitlichen Historie." },
      { text: "Im Mitarbeiterdatensatz wird eine neue historische Zeile erzeugt.", correct: true, explanation: "Der neue Satz beginnt am gewählten Wirksamkeitsdatum; der vorherige Satz endet systemseitig am Vortag." },
      { text: "Die Änderung ist nur für Administratoren sichtbar.", correct: false, explanation: "Die Sichtbarkeit hängt von Stichtag und RBP ab, nicht davon, dass es eine zeitabhängige Änderung ist." },
      { text: "Die Änderung wird erst nach dem nächsten Upgrade wirksam.", correct: false, explanation: "Wirksamkeit wird durch Datum und gegebenenfalls Workflow gesteuert, nicht durch das Upgrade Center." }
    ]
  },
  {
    id: 26,
    module: "Joule & KI",
    points: 1,
    max: 1,
    prompt: "Welche Funktion gehört nicht zum KI-gestützten Schreiben?",
    solution: "KI-gestütztes Schreiben hilft bei Formulierung, Ton, Länge, Struktur und Textanalyse. Es genehmigt keine Workflows automatisch.",
    options: [
      { text: "Workflows automatisch genehmigen", correct: true, explanation: "Workflow-Genehmigungen sind eine Prozess- und Berechtigungsentscheidung. Das Schreibwerkzeug darf sie nicht selbstständig ausführen." },
      { text: "Ton ändern", correct: false, explanation: "Texte können beispielsweise professioneller, persönlicher oder konstruktiver umformuliert werden." },
      { text: "Textanalyse", correct: false, explanation: "Der Text Analyzer kann Inhalte auf problematische, voreingenommene oder schädliche Formulierungen prüfen und Alternativen vorschlagen." }
    ]
  },
  {
    id: 27,
    module: "Personenprofil",
    points: 2,
    max: 2,
    prompt: "Welche Informationen werden typischerweise im Personenprofil angezeigt?",
    solution: "Das Personenprofil bündelt persönliche Daten sowie beschäftigungs- und stellenbezogene Informationen, abhängig von Konfiguration und Berechtigung.",
    options: [
      { text: "System-Upgrade-Logs", correct: false, explanation: "Upgrade- und Ausführungsprotokolle gehören in administrative Werkzeuge und nicht in das Mitarbeiterprofil." },
      { text: "Beschäftigungsinformationen wie Stelle und Gehalt", correct: true, explanation: "Job Information, Stellenbezug und Vergütungsinformationen können als Profilkarten angezeigt werden, sofern der Benutzer berechtigt ist." },
      { text: "Favoritenliste", correct: false, explanation: "Admin-Favoriten beziehungsweise persönliche Navigationselemente sind keine typischen Mitarbeiterprofildaten." },
      { text: "Persönliche Daten wie Adresse und Kontakt", correct: true, explanation: "Persönliche, biografische und Kontaktdaten gehören zu den zentralen Bereichen des Profils." }
    ]
  },
  {
    id: 28,
    module: "Aktionssuche",
    points: 1,
    max: 1,
    prompt: "Die Aktionssuche kann an die Terminologie des Unternehmens angepasst werden.",
    solution: "Die Aussage ist richtig. Administratoren können eigene Suchbegriffe und Anzeigenamen beziehungsweise Paraphrasen ergänzen, damit interne Begriffe zu den richtigen Aktionen führen.",
    options: [
      { text: "Falsch", correct: false, explanation: "Eine ausschließlich unveränderbare SAP-Terminologie würde unternehmensinterne Bezeichnungen nicht berücksichtigen." },
      { text: "Richtig", correct: true, explanation: "Über Manage Action Search können benutzerdefinierte Suchbegriffe, Synonyme, Anzeigetexte und eigene Navigationsaktionen gepflegt werden." }
    ]
  },
  {
    id: 29,
    module: "Admin-Center",
    points: 1,
    max: 1,
    prompt: "Sie nutzen ein Administrationswerkzeug sehr häufig und möchten es von der Admin-Startseite aus schnell erreichen. Wie gehen Sie vor?",
    solution: "Häufig verwendete Admin-Werkzeuge können über das Sternsymbol als Favoriten markiert und anschließend schneller aufgerufen werden.",
    options: [
      { text: "Sie kopieren den Werkzeugnamen in das Banner der Startseite.", correct: false, explanation: "Das Banner ist kein Favoriten- oder Navigationsbereich für Admin-Werkzeuge." },
      { text: "Sie legen im Upgrade Center eine Verknüpfung an.", correct: false, explanation: "Das Upgrade Center verwaltet Produkterweiterungen und keine persönlichen Schnellzugriffe." },
      { text: "Sie aktivieren das Werkzeug im Provisioning.", correct: false, explanation: "Ein Werkzeug muss nicht im Backend neu aktiviert werden, nur weil es häufiger aufgerufen werden soll." },
      { text: "Sie markieren das Werkzeug mit dem Stern als Favorit.", correct: true, explanation: "Admin Favorites sammelt markierte Werkzeuge auf der Admin-Startseite. Die Berechtigung des Benutzers bleibt trotzdem erforderlich." }
    ]
  },
  {
    id: 30,
    module: "Datenmodelle",
    points: 1,
    max: 1,
    prompt: "Sie möchten das Nachfolgedatenmodell ändern, ohne die XML-Datei manuell aus Provisioning zu laden und wieder hochzuladen. Welches Werkzeug nutzen Sie?",
    solution: "Manage Business Configuration, kurz BCUI, stellt eine Administrationsoberfläche für viele Elemente des Succession Data Model bereit.",
    options: [
      { text: "Ausführungsmanager", correct: false, explanation: "Der Execution Manager überwacht Jobs und Integrationen, bearbeitet aber keine Datenmodellfelder." },
      { text: "Admin-Meldungen", correct: false, explanation: "Admin-Meldungen informieren über Systemthemen und sind kein Modellierungswerkzeug." },
      { text: "Organigrammkonfiguration", correct: false, explanation: "Dieses Werkzeug steuert die Darstellung des Organigramms, nicht die Struktur des Personenprofildatenmodells." },
      { text: "Geschäfts-Konfiguration verwalten", correct: true, explanation: "BCUI ermöglicht die Pflege zahlreicher HRIS-Elemente und Felder über die Instanzoberfläche, ohne den üblichen XML-Download-und-Upload-Prozess." }
    ]
  },
  {
    id: 31,
    module: "Provisioning",
    points: 1,
    max: 1,
    prompt: "Einem ehemaligen Berater oder Implementierer soll der Zugriff auf Provisioning entzogen werden. Welches Tool verwenden Sie in der Instanz?",
    solution: "Manage Provisioning Access zeigt die für diese Instanz genehmigten Provisioning-Benutzer und ermöglicht das Gewähren oder Entfernen des Zugriffs.",
    options: [
      { text: "Berechtigungsrollen verwalten", correct: false, explanation: "RBP steuert Funktionen innerhalb der Instanz. Provisioning-Zugriff besitzt zusätzlich einen eigenen, instanzbezogenen Verwaltungsprozess." },
      { text: "Vertreter verwalten", correct: false, explanation: "Proxy-Zuweisungen erlauben Handlungen im Namen anderer Instanzbenutzer und haben nichts mit Provisioning-Konten zu tun." },
      { text: "Organigrammkonfiguration", correct: false, explanation: "Die Organigrammkonfiguration beeinflusst nur die Organisationsdarstellung." },
      { text: "Provisioning-Zugriff verwalten", correct: true, explanation: "Hier kann ein autorisierter Administrator die Genehmigung für einen Provisioning-Benutzer entfernen. Der Zugang ist pro Instanz zu verwalten." }
    ]
  },
  {
    id: 32,
    module: "Geschäftsregeln",
    points: 2,
    max: 2,
    prompt: "Wofür setzt Employee Central Geschäftsregeln ein?",
    solution: "Geschäftsregeln automatisieren HR-Logik. Zu den typischen Einsatzfällen gehören die Ableitung eines Ereignisgrundes und die Ermittlung eines passenden Workflows.",
    options: [
      { text: "Ableitung von Ereignisgründen", correct: true, explanation: "Aus geänderten Feldern und Bedingungen kann die Regel den passenden fachlichen Grund einer Personalmaßnahme bestimmen." },
      { text: "Hochladen des Unternehmenslogos", correct: false, explanation: "Logos werden über Theme Manager beziehungsweise Unternehmens- und Logo-Einstellungen gepflegt." },
      { text: "Aktivierung von Sprachpaketen", correct: false, explanation: "Sprachen und Sprachpakete werden über Plattform- und Spracheinstellungen konfiguriert, nicht über EC-Geschäftsregeln." },
      { text: "Ableitung von Workflows", correct: true, explanation: "Eine Regel kann abhängig von Mitarbeiter, Organisation oder Änderung den auszulösenden Genehmigungsworkflow zurückgeben." }
    ]
  },
  {
    id: 33,
    module: "Onboarding",
    points: 3,
    max: 3,
    prompt: "Welche Funktionen stehen neuen Mitarbeitenden im Onboarding zur Verfügung?",
    solution: "Onboardees können vor dem Eintritt Aufgaben erledigen, Richtlinien und Informationen aufrufen sowie digitale Formulare ausfüllen.",
    options: [
      { text: "Initiieren von Vergütungsänderungen", correct: false, explanation: "Vergütungsänderungen sind eine HR- oder Managertransaktion und keine typische Selbstbedienungsaufgabe eines neuen Mitarbeiters im Onboarding." },
      { text: "Aufgabenliste mit zu erledigenden Schritten", correct: true, explanation: "Die Onboarding-Startseite zeigt persönliche Aufgaben und Fristen, die vor oder nach dem Eintritt erledigt werden sollen." },
      { text: "Zugriff auf Unternehmensrichtlinien", correct: true, explanation: "Neue Mitarbeitende können Richtlinien, Informationen und bereitgestellte Dokumente kennenlernen beziehungsweise bestätigen." },
      { text: "Bearbeiten von Mitarbeiterprofilen anderer Personen", correct: false, explanation: "Onboardees erhalten keinen allgemeinen Zugriff auf fremde Personalprofile." },
      { text: "Ausfüllen digitaler Formulare", correct: true, explanation: "Formulare und Datenerfassung reduzieren manuelle Papierprozesse und liefern benötigte Eintrittsinformationen." }
    ]
  },
  {
    id: 34,
    module: "Onboarding",
    points: 2,
    max: 2,
    prompt: "Was ist der Vorteil der Integration von Onboarding und Employee Central?",
    solution: "Die Integration vermeidet Medienbrüche zwischen Recruiting, Onboarding und Employee Central und stellt neuen Mitarbeitenden rollenbasierte Aufgaben bereit.",
    options: [
      { text: "Durchführung von Leistungsbewertungen", correct: false, explanation: "Leistungsbewertungen gehören zu Performance & Goals. Sie sind kein unmittelbarer Vorteil der Onboarding-Integration." },
      { text: "Es ermöglicht einen nahtlosen Datenfluss vom Recruiting bis zum Onboarding.", correct: true, explanation: "Bereits im Recruiting erfasste Kandidatendaten können an Onboarding übergeben und dort weiterverwendet werden." },
      { text: "Es ermöglicht Aufgaben für Neueinstellungen.", correct: true, explanation: "Onboardees, Manager und weitere Beteiligte erhalten Aufgaben, Formulare und Vorbereitungsschritte über die integrierte Plattform." }
    ]
  },
  {
    id: 35,
    module: "Self-Service",
    points: 1,
    max: 1,
    prompt: "Das System bietet keine Employee- und Manager-Self-Service-Funktion.",
    solution: "Die Aussage ist falsch. ESS und MSS sind zentrale Employee-Central-Funktionen und werden durch RBP, Geschäftsregeln und Workflows gesteuert.",
    options: [
      { text: "Falsch", correct: true, explanation: "Mitarbeitende können eigene Daten und Anträge pflegen; Führungskräfte können berechtigte Maßnahmen für ihre Teams durchführen." },
      { text: "Richtig", correct: false, explanation: "Ohne ESS und MSS müssten viele Standardvorgänge ausschließlich durch HR-Administratoren ausgeführt werden." }
    ]
  },
  {
    id: 36,
    module: "Recruiting",
    points: 2,
    max: 2,
    prompt: "Wofür können rollenspezifische Vorauswahlfragen in einer Bewerbung eingesetzt werden?",
    solution: "Vorauswahlfragen können Bewerbungen bewerten und bei festgelegten Ausschlussantworten automatisch disqualifizieren.",
    options: [
      { text: "Zum Starten des Offboardings", correct: false, explanation: "Offboarding betrifft austretende Beschäftigte und steht nicht mit Bewerbungsfragen in Verbindung." },
      { text: "Zum automatischen Disqualifizieren bei falscher Antwort", correct: true, explanation: "Knockout-Fragen können Bewerber automatisch in einen Disqualifikationsstatus verschieben, wenn eine zwingende Voraussetzung fehlt." },
      { text: "Zum Erzeugen des Angebotsschreibens", correct: false, explanation: "Angebotsschreiben werden aus Angebotsdaten und Vorlagen erzeugt, nicht aus Vorauswahlfragen." },
      { text: "Zur Gesamtbewertung beziehungsweise Einstufung einer Bewerbung", correct: true, explanation: "Antworten können bewertet und gewichtet werden und dadurch die Einordnung oder Priorisierung der Bewerbung unterstützen." }
    ]
  },
  {
    id: 37,
    module: "Employee Self-Service",
    points: 2,
    max: 2,
    prompt: "Was sind typische Anwendungsfelder für den ESS?",
    solution: "Employee Self-Service erlaubt Beschäftigten, freigegebene eigene Daten selbst zu pflegen. Typische Beispiele sind Adresse und Notfallkontakt.",
    options: [
      { text: "Änderung der Adresse", correct: true, explanation: "Mitarbeitende können ihre eigene Anschrift ändern. Je nach Konfiguration erfolgt die Änderung direkt oder über einen Workflow." },
      { text: "Hinzufügen eines Notfallkontaktes", correct: true, explanation: "Notfallkontakte sind persönliche Informationen, die der Mitarbeiter für sich selbst pflegen kann, sofern RBP dies erlaubt." },
      { text: "Änderung seines Gehalts", correct: false, explanation: "Gehaltsänderungen sind sensible HR- beziehungsweise Managerprozesse und normalerweise kein Employee Self-Service." }
    ]
  },
  {
    id: 38,
    module: "Instanz & Provisioning",
    points: 3,
    max: 3,
    prompt: "Was beschreibt die Instanz korrekt?",
    solution: "Die Instanz ist das SuccessFactors-Frontend für tägliche Arbeit und Administration. Im Admin-Center werden unter anderem rollenbasierte Berechtigungen eingerichtet.",
    options: [
      { text: "Der Zugriff ist beschränkt auf zertifizierte Partner.", correct: false, explanation: "Diese starke Zugangsbeschränkung betrifft Provisioning. Auf die Instanz greifen Mitarbeiter, Führungskräfte, HR und Administratoren entsprechend ihrer Rollen zu." },
      { text: "Die Instanz ist der Teil des Systems, mit dem Mitarbeiter jeden Tag interagieren.", correct: true, explanation: "Hier befinden sich Startseite, Profil, Module, Aufgaben, Suchfunktionen und Self-Services." },
      { text: "Von Mitarbeitern verwendetes Frontend", correct: true, explanation: "Die Instanz stellt die sichtbare Benutzeroberfläche der SuccessFactors-Lösungen bereit." },
      { text: "Hier werden auch rollenbasierte Berechtigungen eingerichtet, die bestimmen, wer was sehen und tun kann.", correct: true, explanation: "Berechtigungsgruppen, Rollen und Zielpopulationen werden über Werkzeuge im Admin-Center der Instanz verwaltet." }
    ]
  },
  {
    id: 39,
    module: "Rollenbasierte Berechtigungen",
    points: 1,
    max: 1,
    prompt: "Berechtigungsgruppen können nur statisch angelegt werden.",
    solution: "Die Aussage ist falsch. Gruppen können aus benannten Benutzern statisch oder anhand von Mitarbeiterattributen dynamisch aufgebaut werden.",
    options: [
      { text: "Falsch", correct: true, explanation: "Dynamische Gruppen aktualisieren ihre Mitgliedschaft auf Grundlage definierter Kriterien, beispielsweise Abteilung, Standort oder Stellenklassifizierung." },
      { text: "Richtig", correct: false, explanation: "Statische Gruppen sind nur eine mögliche Form. Sie ändern sich ausschließlich durch manuelle Pflege der enthaltenen Benutzer." }
    ]
  }
];
