# Problem Solving Exercises

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC.svg)](https://tailwindcss.com/)

Een interactieve webapplicatie voor het oefenen van veelvoorkomende algoritmische problemen. Gebouwd met moderne webtechnologieën en een elegante glasmorfisme UI.

Een interactieve webapplicatie voor het oefenen van veelvoorkomende algoritmische problemen. Gebouwd met moderne webtechnologieën en een elegante glasmorfisme UI.

## ✨ Features

- **30+ Oefeningen**: Van basis algoritmen tot geavanceerde problemen
- **Interactief**: Voer inputs in en zie direct resultaten
- **Educatief**: Gedetailleerde uitleg van elk algoritme met voorbeelden, complexiteit en toepassingen
- **Moderne UI**: Glasmorfisme design met transparante elementen en blur effecten
- **Responsief**: Werkt perfect op desktop en mobiele apparaten
- **TypeScript**: Volledig getypt voor betere ontwikkelervaring
- **Vite**: Snelle ontwikkelserver en optimale builds

## 📚 Educatieve Inhoud

Elke oefening bevat uitgebreide educatieve informatie:

- **Probleem Beschrijving**: Duidelijke uitleg van het algoritmische probleem
- **Voorbeelden**: Meerdere input/output voorbeelden met uitleg
- **Algoritme Uitleg**: Stap-voor-stap breakdown van de oplossingsaanpak
- **Complexiteit Analyse**: Tijd- en ruimtecomplexiteit (Big O notatie)
- **Toepassingen**: Praktische use cases en belang in software development

## 🚀 Technologieën

- **Frontend**: React 18 met TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS met custom glasmorfisme effecten
- **Package Manager**: npm

## 📋 Vereisten

- Node.js (versie 18 of hoger)
- npm (komt meegeleverd met Node.js)

## 🛠️ Installatie

1. **Clone de repository**:

   ```bash
   git clone https://github.com/HamedSadim1/problem-solving.git
   cd problem-solving
   ```

2. **Installeer dependencies**:

   ```bash
   npm install
   ```

3. **Start de ontwikkelserver**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Ga naar [http://localhost:5173](http://localhost:5173)

## 📖 Gebruik

- Selecteer een oefening uit de zijbalk
- Voer de vereiste inputs in
- Klik op "Run" om het algoritme uit te voeren
- Bekijk het resultaat direct in de interface
- Lees de gedetailleerde uitleg onderaan elke oefening voor educatieve informatie

## 🏗️ Project Structuur

```text
src/
├── components/
│   ├── exercises.ts          # Oefeningen configuratie en types
│   ├── Header.tsx            # App header component
│   ├── Sidebar.tsx           # Navigatie sidebar
│   ├── MainContent.tsx       # Hoofdinhoud container
│   └── [exercise].tsx        # Individuele oefening componenten (30+)
├── App.tsx                   # Hoofd app component
├── index.tsx                 # App entry point
└── index.css                 # Globale styles
```

## 🎯 Beschikbare Oefeningen

- Two Sum
- Running Sum
- Pivot Index
- Middle Index
- String Ends With
- Fibonacci Sequence
- Palindrome Check
- Reverse Array
- Binary Search
- Valid Parentheses
- Max Subarray Sum
- Anagram Check
- Factorial
- Prime Check
- Longest Common Prefix
- Merge Sorted Arrays
- Climbing Stairs
- Remove Duplicates
- Roman to Integer
- Power of Two
- Happy Number
- Single Number
- Contains Duplicate
- Intersection Arrays
- Move Zeroes
- Majority Element
- FizzBuzz
- Count Primes
- Reverse Integer
- Missing Number

## 🔧 Scripts

- `npm run dev` - Start ontwikkelserver
- `npm run build` - Build voor productie
- `npm run preview` - Preview productie build
- `npm run lint` - Run ESLint

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/nieuwe-oefening`)
3. Commit je veranderingen (`git commit -m 'Voeg nieuwe oefening toe'`)
4. Push naar de branch (`git push origin feature/nieuwe-oefening`)
5. Open een Pull Request

### Nieuwe Oefeningen Toevoegen

1. Maak een nieuw component in `src/components/`
2. Voeg het toe aan `exercises.ts`
3. Update de `Exercise` type
4. Test de functionaliteit

## 📄 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👤 Auteur

**Hamed Sadim** - [GitHub](https://github.com/HamedSadim1)

## 🙏 Erkenningen

- React community voor uitstekende documentatie
- Tailwind CSS voor het geweldige utility-first framework
- Vite voor de snelle build tool
- Alle bijdragers aan de algoritmische problemen

---

Gemaakt met ❤️ voor het leren van algoritmen
