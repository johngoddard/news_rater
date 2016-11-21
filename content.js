
// setInterval(() => {
//   const links = document.querySelectorAll('a');
//
//   for (let i = 0; i < links.length; i++) {
//     let currLink = links[i];
//     console.log(currLink.href);
//     console.log(/https:\/\/facebook.com/.test(currLink.href));
//
//     if(!(/facebook.com/.test(currLink.href))) {
//       links[i].style.backgroundColor = 'red';
//     }
//   }
// }, 500);

  const links = document.querySelectorAll('a');

  for (let i = 0; i < links.length; i++) {
    let currLink = links[i];

    if(currLink.onmouseover) {
      console.log(currLink);

      console.log("MOUSE OVER!");
    }
  }
