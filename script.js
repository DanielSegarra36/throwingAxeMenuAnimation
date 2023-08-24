function menuClick() {
  let hatchet = document.querySelector('#hatchet');
  let hamburger = document.querySelector('#hamburger');

  // Iterate through each child element of the SVG
  for (let i = 0; i < hatchet.children.length; i++) {
    let hatchetPiece = hatchet.children[i];
    let hamburgerPiece = hamburger.children[i];
    // hatchetPiece
    // console.log(`hatchetPiece element ID: ${hatchetPiece.id}`);
    // console.log(`hatchetPiece element path data: ${hatchetPiece.getAttribute('d')}`);
    // console.log(`hatchetPiece element fill color: ${hatchetPiece.getAttribute('fill')}`);
    // // hamburgerPiece
    // console.log(`hamburgerPiece element ID: ${hamburgerPiece.id}`);
    // console.log(`hamburgerPiece element path data: ${hamburgerPiece.getAttribute('d')}`);
    // console.log(`hamburgerPiece element fill color: ${hamburgerPiece.getAttribute('fill')}`);

    let tl = new TimelineMax;

    let nextShape = hatchet.classList.contains('mobile-menu-active') ? hatchetPiece.id : hamburgerPiece.id;

    if(hatchet.classList.contains('mobile-menu-active')){
      tl.to(`#${hatchetPiece.id}`, 1, {
        morphSVG: {
          shape: `#${nextShape}`,
          shapeIndex: 12,
          type: "rotational"
        },
        ease: Power0.easeNone
      })
    }else{
    tl.to('#hatchet', 1, {
      rotation: "+=353",
      ease: Power0.out,
      transformOrigin: "50% 50%"
    })
      .to('#hatchet', 0, {
        rotation: "180deg",
        ease: Linear.easeNone,
        transformOrigin: "50% 50%"
      })
      .to(`#${hatchetPiece.id}`, 1, {
        morphSVG: {
          shape: `#${nextShape}`,
          shapeIndex: 12,
          type: "rotational"
        },
        ease: Power0.easeNone
      })}
    // tl.reverse();
  }
  
  hatchet.classList.toggle('mobile-menu-active');
}