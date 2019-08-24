const URL = "https://nashitoge.net/";
const DEFAULT_TEMPLATE = "{{me}}は「{{text}}」を成し遂げ{{gobi}}！";
const DEFAULT_ME = "私"
const DEFAULT_GOBI = "ました"
const TAG_PATTERNS = {
  "me": /\{\{ *me *\}\}/g,
  "text": /\{\{ *text *\}\}/g,
  "gobi": /\{\{ *gobi *\}\}/g
};

function detectQueries() {
  var result = {};
  let sep = /^([^=]+)(?:=( *.+))?$/
  let queryText = window.location.search.substring(1);
  if (queryText.length > 0) {
    queryText.split('&').forEach((t) => {
      let matches = t.match(sep);
      if (matches && matches[2] == undefined) {
        result[matches[1]] = true;
      }
      else {
        result[matches[1]] = decodeURI(matches[2]);
      }
    });
  }
  return result;
}

const Queries = detectQueries();

function goToTweetPage(text) {
  let url = "https://twitter.com/intent/tweet";
  url += "?hashtags=Nashitoge";
  url += "&text=" + encodeURI(text);
  url += "&url=" + encodeURI(URL);
  window.open(url);
}

function applyTemplate(template, me, text, gobi) {
  return (template.replace(TAG_PATTERNS["text"], text)
                  .replace(TAG_PATTERNS["me"],   me)
                  .replace(TAG_PATTERNS["gobi"], gobi) );
}

function nashitoge() {
  let box = document.getElementById('nashitoge-text')
  let text = box.value;
  let me = Queries["me"] || DEFAULT_ME;
  let gobi = Queries["gobi"] || DEFAULT_GOBI;
  let template = Queries["template"] || DEFAULT_TEMPLATE;
  goToTweetPage(applyTemplate(template, me, text, gobi));
  box.value = ""
}

window.onload = function () {
  document.getElementById('nashitoge-btn').addEventListener('click', nashitoge);
}
