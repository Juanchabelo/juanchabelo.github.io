(function(){
    
    const sliders = [...document.querySelectorAll('.tematicas__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTematicas = document.querySelector('.tematicas__body--show').dataset.id;
        value = Number(currentTematicas);
        value+= add;


        sliders[Number(currentTematicas)-1].classList.remove('tematicas__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('tematicas__body--show');

    }

})();