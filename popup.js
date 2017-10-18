document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        console.log("clisked!");
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = document.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'POST';
        var i = document.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        document.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);