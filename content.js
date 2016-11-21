
setInterval(() => {
  const links = document.querySelectorAll('a');
  const weirdStuff = document.getElementsByClassName('_52c6');

  for (let i = 0; i < links.length; i++) {
    let currLink = links[i];

    if (currLink.getAttribute("onmouseover")) {
      console.log('mouse');
      console.log(currLink.getAttribute("onmouseover"));
      console.log(currLink);
    }
  }

}, 9000);
