// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
 let greetings = {
    Afrikaans: "Hallo, wêreld!",
    Albanian: "Pershëndetje Botë",
    Arabic: "أهلاً بالعالم	(Ahlan bil 'Alam)",
    Armenian: "Բարե՛ւ, աշխարհ։	(barev ash'kharh)",
    Azeri: "Salam Dünya",
    Czech: "Ahoj Světe!",
    "Basque/Euskara": "Kaixo mundua!",
    Belarusian: "Прывітанне свет	(Pryvitannie sviet)",
    Bemba: "Shani Mwechalo!",
    Bengali: "Shagatam Prithivi!",
    Bosnian: "Zdravo Svijete!",
    Bulgarian: "Здравей, свят!	(Zdrav'ei svi'at)",
    Cambodian: "ជំរាបសួរ ពិភពលោក	(chomreabsuor piphoplok)",
    Catalan: "Hola món!",
    Chinese: "你好世界	(nǐ hǎo shì jiè)",
    Cherokee: "ᎣᏏᏲ ᎡᎶᎯ	(O-si-yo E-lo-hi)",
    "Chinook Wawa": "Klahowya Hayas Klaska",
    Croatian: "Bok Svijete!",
    Danish: "Hej, Verden!",
    Dutch: "Hallo, wereld!",
    English: "Hello World!",
    Esperanto: "Saluton mondo!",
    Estonian: "Tere maailm!",
    Finnish: "Hei maailma!",
    French: "Salut le Monde!",
    Frisian: "Hallo, wrâld!",
    Galician: "Ola mundo!",
    German: "Hallo Welt!",
    Greek: "Γεια σου κόσμε!	(Geia soy kosme)",
    Hawaiian: "Aloha Honua",
    Hebrew: "שלום עולם	(Shalom Olam)",
    Hindi: "नमस्ते दुनिया	(namaste duniya)",
    Hmong: "Nyob zoo ntiaj teb.",
    Hungarian: "Helló világ!",
    Icelandic: "Halló heimur!",
    Igbo: "Ndewo Ụwa",
    Indonesian: "Halo Dunia!",
    Irish: "Dia dhaoibh, a dhomhain!",
    Italian: "Ciao Mondo!",
    Japanese: "こんにちは、 世界！	(konnichiwa sekai)",
    Kannada: "ಹಲೋ ವರ್ಲ್ಡ್	(Halō varlḍ)",
    Kiswahili: "Habari dunia!",
    Kikuyu: "Niatia thi!",
    Klingon: "nuqneH",
    Korean: "반갑다 세상아	(bangabda, sesangah)",
    Lao: "ສະບາຍດີ,ໂລກ	(sabaidi olk)",
    Latin: "AVE MVNDE	(ave munde)",
    Latvian: "Sveika, Pasaule!",
    Lithuanian: "Sveikas, Pasauli",
    Lojban: "coi li terdi",
    Luxembourgish: "Moien Welt!",
    Malagasy: "Manao ahoana ry tany!",
    Malayalam: "Namaskaram, lokame",
    Maltese: "Merhba lid-dinja",
    Norwegian: "Hallo verden!",
    Persian: "!سلام دنیا	(Salaam Donyaa!)",
    Polish: "Witaj świecie!",
    Portuguese: "Olá, mundo!",
    Punjabi: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ	(Sati srī akāla duni'ā)",
    Romanian: "Salut lume!",
    Russian: "Здравствуй, мир!	(Zdra'vstvuj mi'r)",
    "Scots Gaelic": "Halò, a Shaoghail!",
    Serbian: "Zdravo Svete!",
    Slovak: "Ahoj, svet!",
    Slovenian: "Pozdravljen svet!",
    Spanish: "¡Hola mundo!",
    Swedish: "Hallå världen!",
    Tagalog: "Kamusta mundo!",
    Tamil: "ஹலோ உலகம்	(Halō ulakam)",
    Telugu: "హలో వరల్డ్	(Halō varalḍ)",
    Thai: "สวัสดีโลก!	(sawadee lok)",
    Turkish: "Merhaba Dünya!",
    Ukrainian: "Привiт, свiте!	(Pryvi't svi'te)",
    Urdu: "ہیلو دنیا والو",
    Vietnamese: "Xin chào thế giới",
    Welsh: "S'mae byd!",
    Yiddish: "העלא וועלט	(hela velt)",
    Zulu: "Sawubona Mhlaba"
};

function addRandomGreeting() {
  // Pick a random language.
  const lang = Object.keys(greetings)[Math.floor(Math.random() * Object.keys(greetings).length)];
  const greeting = greetings[lang];

  // Add it to the page.
  const langDiv = document.getElementById('lang');
  langDiv.innerText = lang;
  const greetingDiv = document.getElementById('greeting');
  greetingDiv.innerText = greeting;
  const button = document.getElementById('button');
  button.innerText = greeting;
}
