function clickHandler(){
    console.log('> button clicked:' + new Date());
}


    var addBtnElem =  document.body.querySelector('#addBtn');
    addBtnElem.addEventListener('click',clickHandler);



// function () {}