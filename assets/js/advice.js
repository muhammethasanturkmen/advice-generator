let advices = [];


  function renderTodos() {
    rast.innerHTML = `<h4>ADVICE # ${advices.slip.id}</h4>
    <h3>“${advices.slip.advice}”</h3>`;    
  }

  btn.addEventListener('click',init);

  function init() {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(res => {
        advices = res;
        renderTodos();
      })
  }
  init(); 