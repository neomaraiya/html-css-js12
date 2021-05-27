console.log('hello!');

const cardID = document.getElementById('cards');

const observer = new IntersectionObserver(entries => {
  console.log(entries[0].isIntersecting);
  if (entries[0].isIntersecting) {
    const image = cardID.children[0];
    const imageSrc = image.dataset.src;
    console.log(imageSrc);
    image.setAttribute('src', imageSrc);
    return (cardID.style.background = 'red');
  }
  return (cardID.style.background = 'green');
}, {});

observer.observe(cardID);
