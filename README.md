# Components Structure voor `bit-todos`
In
Dit document beschrijft de componentenstructuur voor de `bit-todos` applicatie.

## Components

### App.tsx
- Hoofdbestand van de applicatie dat alle componenten samenvoegt en de algemene structuur bepaalt.

### StatusCategory.tsx
- Verantwoordelijk voor het weergeven van een categorie van taken zoals `In Progress`, `Todo`, en `Done`.
- Bevat een titel, een teller van het aantal taken, en een knop om een nieuwe taak toe te voegen.

### Item.tsx
- Weergeeft een individuele taak binnen een StatusCategory.
- Bestaat uit geneste componenten zoals de StatusButton en een TextInput voor de taaknaam.

## Nested Components

##### TextInput.tsx
- Een tekstinvoerveld voor het invoeren of bewerken van de naam van een taak.
- Is een nested component in de `Item` component.

##### StatusButton.tsx
- Een knop waarmee de status van een taak kan worden gewijzigd (bijvoorbeeld van `Todo` naar `In Progress`).
- Is een nested component in de `Item` component.

