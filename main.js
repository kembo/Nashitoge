function goToTweetPage(text) {
  var url = "https://twitter.com/intent/tweet";
  url += "?hashtags=Nashitoge";
  url += "&text=" + encodeURI(text);
  url += "&url=" + encodeURI(document.URL);
  window.open(url);
}

function nashitoge() {
  var box = document.getElementById('nashitoge-text')
  var text = box.value;
  text = "私は「" + text + "」を成し遂げました！";
  goToTweetPage(text);
  box.value = ""
}

document.getElementById('nashitoge-btn').addEventListener('click', nashitoge);
