function goToTweetPage(text) {
  var url = "https://twitter.com/intent/tweet";
  url += "?hashtags=Nashitoge";
  url += "&text=" + encodeURI(text);
  url += "&url=" + encodeURI(document.URL);
  window.location.href = url;
}

function nashitoge() {
  var text = document.getElementById('nashitoge-text').value;
  text = "「" + text + "」を成し遂げました！";
  goToTweetPage(text)
}

document.getElementById('nashitoge-btn').addEventListener('click', nashitoge);
