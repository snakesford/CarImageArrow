const Flicker = (content, dock) => {
  var position = 0;
  var length = content.length;

  const displayContent = () => {
    var html = "<h2>" + content[position].name + "</h2>\r\n";
    html += '<img class="flickerImage" src="' + content[position].image + '">\r\n';
    html += '<p>' + content[position].description + '</p>\r\n';
    dock.innerHTML = html;
  }

  displayContent();

  return {
    leftClick: function() {
      position = (position + 1) % length;
      displayContent();
    },
    rightClick: function() {
      position = (position - 1 + length) % length;
      displayContent()
    }
  };
}