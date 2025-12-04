# AI Chat Interface mit Ollama

Eine moderne, responsive Chat-Interface-Anwendung mit direkter Anbindung an Ollama und erweiterten System-Prompt-Funktionen.

## 🚀 Features

- **Moderne UI**: Responsives Design mit ansprechendem Gradient-Hintergrund
- **Ollama Integration**: Direkte Verbindung zu lokalen Ollama-Modellen
- **System Prompts**: Anpassbare System-Prompts mit vorgefertigten Presets
- **Modell-Auswahl**: Dynamische Auswahl verfügbarer Ollama-Modelle
- **Echtzeit-Chat**: Sofortige Antworten mit Typing-Indikator
- **Konversationsspeicher**: Vollständiger Chat-Verlauf während der Session
- **Responsive Design**: Optimiert für Desktop und Mobile

## 📋 Voraussetzungen

1. **Ollama installiert**: [Ollama Download](https://ollama.ai/download)
2. **Mindestens ein Modell**: z.B. `ollama pull llama3.2`
3. **Ollama Server läuft**: `ollama serve`

## 🛠️ Installation & Setup

### 1. Ollama installieren
```bash
# Für Windows: Installer von https://ollama.ai/download herunterladen
# Für macOS: brew install ollama
# Für Linux: curl -fsSL https://ollama.ai/install.sh | sh
```

### 2. Modell herunterladen
```bash
# Empfohlene Modelle
ollama pull llama3.2        # Schnell und effizient
ollama pull llama3.1        # Größer, mehr Funktionen
ollama pull mistral         # Alternativer Ansatz
ollama pull codellama       # Speziell für Code
ollama pull phi3           # Kompakt und schnell
```

### 3. Ollama Server starten
```bash
ollama serve
```
Der Server läuft standardmäßig auf `http://localhost:11434`

### 4. Chat-Interface öffnen
- Öffnen Sie `chat-interface.html` in Ihrem Browser
- Die Anwendung prüft automatisch die Verbindung zu Ollama

## 🎯 Nutzung

### System Prompts
Das Interface bietet vier vordefinierte System-Prompt-Presets:

1. **📝 Standard Assistent**: Allgemeine Hilfe und Unterstützung
2. **💻 Code Experte**: Spezialisiert auf Programmierung und Softwareentwicklung
3. **🎨 Kreativer Schreiber**: Für kreative Texte und Storytelling
4. **📊 Daten Analyst**: Für Datenanalyse und Statistiken

Sie können auch eigene System Prompts in der Textarea eingeben.

### Chat-Funktionen
- **Nachricht senden**: Enter-Taste oder Send-Button
- **Neue Zeile**: Shift + Enter
- **Chat löschen**: "Chat löschen" Button im Header
- **Modell wechseln**: Dropdown-Menü in der Sidebar

### Verbindungsstatus
- 🟢 **Grün**: Erfolgreich mit Ollama verbunden
- 🔴 **Rot**: Keine Verbindung zu Ollama

## 🔧 Konfiguration

### API-Endpoint ändern
Falls Ollama auf einem anderen Port oder Server läuft:
```javascript
// In der Datei chat-interface.html, Zeile ~90
const OLLAMA_API_URL = 'http://localhost:11434'; // Hier ändern
```

### Neue System-Prompt-Presets hinzufügen
```javascript
// In der Datei chat-interface.html, Zeile ~100
const systemPrompts = {
    // Bestehende Presets...
    custom: 'Ihr eigener System-Prompt hier'
};
```

Dann im HTML den entsprechenden Button hinzufügen:
```html
<button class="preset-btn" onclick="setSystemPrompt('custom')">🔧 Eigener Preset</button>
```

## 🚨 Fehlerbehebung

### "Ollama ist nicht verfügbar"
1. Prüfen Sie, ob Ollama installiert ist: `ollama --version`
2. Starten Sie den Ollama-Server: `ollama serve`
3. Testen Sie die API: `curl http://localhost:11434/api/tags`

### "Keine Modelle gefunden"
1. Laden Sie ein Modell herunter: `ollama pull llama3.2`
2. Prüfen Sie verfügbare Modelle: `ollama list`

### CORS-Fehler
Ollama sollte standardmäßig CORS für localhost erlauben. Falls Probleme auftreten:
```bash
# Ollama mit CORS-Einstellungen starten
OLLAMA_ORIGINS="*" ollama serve
```

### Browser-Kompatibilität
- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt

## 📱 Mobile Nutzung

Das Interface ist vollständig responsiv und optimiert für:
- Smartphones (ab 320px Breite)
- Tablets (ab 768px Breite)
- Desktop (ab 1024px Breite)

Auf mobilen Geräten wird die Sidebar über dem Chat-Bereich angezeigt.

## 🔒 Sicherheit & Datenschutz

- **Lokale Verarbeitung**: Alle Daten bleiben auf Ihrem Computer
- **Keine Cloud-Verbindung**: Direkter Zugriff auf lokale Ollama-Installation
- **Session-basiert**: Chat-Verlauf wird nicht permanent gespeichert

## 🤝 Mitwirken

Verbesserungsvorschläge und Fehlermeldungen sind willkommen! Das Interface kann leicht erweitert werden um:
- Weitere System-Prompt-Presets
- Chat-Export-Funktionen
- Erweiterte Modell-Konfigurationen
- Themes und Anpassungen

## 📄 Lizenz

Dieses Projekt ist Open Source und kann frei verwendet und modifiziert werden.
