# 🤖 discord-bot-javascript

Güncel `discord.js v14` ile yazılmış, sade ve modüler yapıya sahip bir **Discord bot altyapısıdır.**  
Komut ve event sistemleriyle birlikte kolayca özelleştirilebilir.

```

## 📦 Özellikler

- 🚀 Discord API v10 (Bot API v15) uyumlu
- ⚙️ Komut ve event dosya sistemi
- ✨ ESModule (type: module) desteği
- 📁 Temiz klasör yapısı
- 🧠 Prefix tabanlı komut sistemi

```
```
## 🗂️ Dosya Yapısı

discord-bot-javascript/
├── index.js # Ana bot dosyası
├── config.json # Token ve prefix ayarı
├── package.json # Bağımlılıklar
├── commands/ # Komutlar klasörü
│ └── ping.js # Örnek komut
└── events/ # Eventler klasörü
└── ready.js # Bot hazır olduğunda tetiklenir




## 🚀 Kurulum

> Node.js 18 veya üzeri bir sürüm önerilir.

1. Depoyu klonlayın veya indirin:

git clone https://github.com/whuq3ht/discord-bot-javascript.git
cd discord-bot-javascript

2. Gerekli modülleri yükleyin:
npm install
npm apt-get update

3. Config Json Düzenle:
{
  "token": "BURAYA_BOT_TOKENİNİZİ_YAZIN",
  "prefix": "!"
}


4. Botu başlatın:
npm start & node index.js

🧠 Komut Örneği
!ping
Botun yanıt süresini gösterir:
🏓 Pong! Gecikme: 42ms


