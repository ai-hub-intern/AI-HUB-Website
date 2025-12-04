const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
<title>{{newsletter_title}}</title>
<style>
body,div{font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#595959;background-color:#062D47}
div div{background-color:transparent}
[data-layout=true]{margin:0 auto;max-width:600px}
p{padding-top:5px;line-height:1.35;mso-line-height-rule:exactly}
.intro{margin:0;color:#887d75;font-size:16px}
.mailfooter p{color:#fff;font-size:12px}
.mailfooter a{color:#fff}
h1{font-size:40px;line-height:1.2;margin:0}
.title{color:#006EC7;font-size:18px;font-weight:700}
.teaser{padding-bottom:10px}
.btn{display:inline-block;text-decoration:none;background-color:#0065b8;color:#fff;padding:9px 20px;border-radius:20px;font-weight:700}
.btn--ghost{background:transparent;color:#0065b8;border:1px solid #0065b8}
.section{background:#fff}
.section--alt{background:#f3f2f1}
.hero{background:#006ec7;color:#fff}
.hero h1{color:#fff}
.category{font-weight:700;text-transform:uppercase;padding-bottom:5px}
@media only screen and (max-width:768px){.hide-on-mobile{display:none!important}}
</style>
<!--[if gte mso 9]>
<xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
<![endif]-->
</head>
<body style="margin:0;padding:0;background:#062D47;">
  <div data-layout="true">
    <!-- Preheader text -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      {{preheader_text}}
    </div>

    <!-- View in browser (optional) -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f2f1">
      <tr>
        <td align="center" style="padding:10px 0;">
          <a href="{{view_in_browser_url}}" style="font-size:10px;color:#000;text-decoration:underline;">Im Browser anzeigen</a>
        </td>
      </tr>
    </table>

    <!-- Hero -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="hero" background="{{hero_background_image}}" style="background:url('{{hero_background_image}}') no-repeat 50% 50%/cover;">
      <tr>
        <td style="padding:30px 20px;">
          <img src="{{logo_url}}" alt="Logo" width="112" style="display:block;border:0;margin:0 0 120px 0;max-width:100%;">
          <h1>{{hero_headline}}</h1>
        </td>
      </tr>
    </table>

    <!-- Intro and CTA to blog -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="section">
      <tr>
        <td style="padding:15px 15px 5px 15px;">
          <p style="color:#006ec7;font-weight:700;font-size:18px;margin:0 0 6px 0;">{{greeting_line}}</p>
          <p class="intro">{{intro_text}}</p>
          <a class="btn btn--ghost" href="{{primary_cta_url}}" target="_blank">{{primary_cta_label}}</a>
        </td>
      </tr>
    </table>

    <!-- Articles loop: n8n will repeat TR for each item in items -->
    <!-- BEGIN: items -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="section--alt">
      <tr>
        <td style="padding:15px;">
          <div class="category">{{item.category}}</div>
          <div style="padding-bottom:10px;color:#595959;">{{item.date}} von {{item.author}}</div>
          <div class="title">{{item.title}}</div>
          <div class="teaser"><p>{{item.teaser}}</p></div>
          <a class="btn" href="{{item.url}}" target="_blank">Mehr erfahren</a>
        </td>
      </tr>
    </table>
    <!-- END: items -->

    <!-- Promo block (optional) -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" background="{{promo_background_image}}" style="background:#0065b8 url('{{promo_background_image}}') no-repeat 50% 50%/cover;">
      <tr>
        <td style="padding:10px 10px 25px 10px;">
          <p style="color:#fff;font-size:24px;font-weight:700;margin:0 0 8px 0;">{{promo_headline}}</p>
          <p style="color:#fff;font-weight:700;margin:0 0 12px 0;">{{promo_text}}</p>
          <a class="btn" href="{{promo_cta_url}}" target="_blank" style="background:transparent;border:2px solid #fff;">{{promo_cta_label}}</a>
        </td>
      </tr>
    </table>

    <!-- Footer -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0065b8" class="mailfooter">
      <tr>
        <td style="padding:10px 10px 0 10px;">
          <p><span>Dorothea Leclaire | Colonia-Allee 4711 | 50123 Köln | info@leclaire.de | www.muster.de</span></p>
          <p><span>Sie erhalten diese E-Mail, weil Sie sich auf unserer Website für Informationen, einen Newsletter, ein Event oder einen Download registriert haben. Falls Sie keine weiteren E-Mails von uns wünschen, können Sie der Verwendung Ihrer Daten jederzeit widersprechen. Weitere Informationen finden Sie in unserer </span><a href="{{privacy_url}}"><u>Datenschutzerklärung</u></a><span>.</span></p>
          <p><span>Weniger Nachrichten erhalten oder komplett abbestellen? Jetzt </span><a href="{{profile_url}}"><u>Profil bearbeiten</u></a></p>
        </td>
      </tr>
    </table>
  </div>

  <!-- Tracking pixel (optional) -->
  {{#if tracking_pixel_url}}<img src="{{tracking_pixel_url}}" width="0" height="0" style="display:none;border:0;" alt=""/>{{/if}}
</body>
</html>`;

// Template-Engine Funktion
function replaceAll(str, map) {
  return Object.entries(map).reduce((s, [k, v]) => 
    s.replaceAll(`{{${k}}}`, String(v ?? '')), str);
}

// Datum formatieren
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('de-DE', options);
  } catch (error) {
    return dateString; // Fallback auf Original-String
  }
}

// Kategorie aus URL oder Titel extrahieren
function extractCategory(title, url) {
  // Einfache Kategorisierung basierend auf Keywords
  const titleLower = title.toLowerCase();
  const urlLower = url.toLowerCase();
  
  if (titleLower.includes('ki') || titleLower.includes('ai') || titleLower.includes('machine learning')) {
    return 'KI & Technologie';
  } else if (titleLower.includes('digital') || titleLower.includes('transformation')) {
    return 'Digitalisierung';
  } else if (titleLower.includes('software') || titleLower.includes('entwicklung')) {
    return 'Softwareentwicklung';
  } else if (titleLower.includes('projekt') || titleLower.includes('management')) {
    return 'Projektmanagement';
  } else {
    return 'Allgemein';
  }
}

// Autor aus URL oder Standard extrahieren
function extractAuthor(url) {
  // Hier können Sie eine Logik implementieren, um Autoren aus URLs zu extrahieren
  // oder eine Datenbank mit URL-zu-Autor-Mapping verwenden
  return 'adesso Team';
}

// RSS-Daten verarbeiten und auf 4 Artikel begrenzen
const rssItems = $input.all();
const maxArticles = 4;
const processedItems = rssItems.slice(0, maxArticles).map((item, index) => {
  const data = item.json;
  
  return {
    category: extractCategory(data.title, data.link),
    date: formatDate(data.pubDate),
    author: extractAuthor(data.link),
    title: data.title,
    teaser: data.contentSnippet || data.content,
    url: data.link
  };
});

// Newsletter-Daten zusammenstellen
const newsletterData = {
  newsletter_title: "Newsletter " + new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' }),
  preheader_text: "Die neuesten Artikel aus unserem Blog - automatisch generiert",
  view_in_browser_url: "https://www.ihre-website.de/newsletter/{{newsletter_id}}",
  logo_url: "https://www.ihre-website.de/images/logo.png",
  hero_background_image: "https://www.ihre-website.de/images/header-bg.jpg",
  hero_headline: "Die neuesten Blog-Artikel",
  greeting_line: "Hallo {{variable_vorname}}",
  intro_text: "Entdecken Sie die neuesten Artikel aus unserem Blog. Diese Auswahl wurde automatisch aus unserem RSS-Feed generiert.",
  primary_cta_label: "Alle Artikel anzeigen",
  primary_cta_url: "https://www.adesso.de/de/news/blog/",
  promo_background_image: "https://www.ihre-website.de/images/promo-bg.jpg",
  promo_headline: "Exklusives Webinar",
  promo_text: "Melden Sie sich jetzt für unser kostenloses Webinar an",
  promo_cta_label: "Jetzt anmelden",
  promo_cta_url: "https://www.ihre-website.de/webinar",
  privacy_url: "https://www.ihre-website.de/datenschutz",
  profile_url: "https://www.ihre-website.de/profil",
  tracking_pixel_url: "https://www.ihre-website.de/track/{{newsletter_id}}",
  items: processedItems
};

// Artikel-Loop verarbeiten
const beginTag = '<!-- BEGIN: items -->';
const endTag = '<!-- END: items -->';
const begin = template.indexOf(beginTag);
const end = template.indexOf(endTag);

let html = template;

if (begin !== -1 && end !== -1 && end > begin) {
  const head = template.slice(0, begin);
  const loop = template.slice(begin + beginTag.length, end).trim();
  const tail = template.slice(end + endTag.length);

  // Artikel-HTML generieren
  const items = processedItems.map((item) => {
    return replaceAll(loop, {
      'item.category': item.category,
      'item.date': item.date,
      'item.author': item.author,
      'item.title': item.title,
      'item.teaser': item.teaser,
      'item.url': item.url,
    });
  }).join('\n');

  html = head + items + tail;
}

// Alle anderen Platzhalter ersetzen
html = replaceAll(html, {
  newsletter_title: newsletterData.newsletter_title,
  preheader_text: newsletterData.preheader_text,
  view_in_browser_url: newsletterData.view_in_browser_url,
  logo_url: newsletterData.logo_url,
  hero_background_image: newsletterData.hero_background_image,
  hero_headline: newsletterData.hero_headline,
  greeting_line: newsletterData.greeting_line,
  intro_text: newsletterData.intro_text,
  primary_cta_label: newsletterData.primary_cta_label,
  primary_cta_url: newsletterData.primary_cta_url,
  promo_background_image: newsletterData.promo_background_image,
  promo_headline: newsletterData.promo_headline,
  promo_text: newsletterData.promo_text,
  promo_cta_label: newsletterData.promo_cta_label,
  promo_cta_url: newsletterData.promo_cta_url,
  privacy_url: newsletterData.privacy_url,
  profile_url: newsletterData.profile_url,
  tracking_pixel_url: newsletterData.tracking_pixel_url,
});

// Personalisierung (falls gewünscht)
if (newsletterData.recipient_name) {
  html = html.replace('{{variable_vorname}}', newsletterData.recipient_name);
}

return [{ 
  json: { 
    html, 
    subject: newsletterData.newsletter_title,
    recipient_email: newsletterData.recipient_email,
    recipient_name: newsletterData.recipient_name,
    article_count: processedItems.length
  } 
}];
