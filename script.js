  //add the links that you want to cycle through.
  var urls = [
    'https://api.whatsapp.com/send?phone=xsssxxxxx',
    'https://api.whatsapp.com/send?phone=xxxxxx',
    'https://api.whatsapp.com/send?phone=xxxxxxxxx'
];

//
function pickTheLink() {
    //function to run the random math with the urls
    var url = urls[Math.floor(Math.random() * urls.length)];
    //redirects to the website, opening a new window
    window.open(url, '_blank');
}