const condicao = document.querySelector('#imc');

document.querySelector('button').onclick = function calculadoraDeIMC(){
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const sexo = document.querySelector('input:checked').value;
    const imc = peso/(altura**2);
    var status = ''

    if (sexo === 'masculino'){
        if (imc < 20.7){
            status = 'Abaixo do Peso';
        }else if(imc < 26.4){
            status = 'Peso Normal';
        }else if(imc < 27.8){
            status = 'Marginalmente Acima do Peso';
        }else if(imc < 31.1){
            status = 'Acima do Peso Ideal';
        }else{
            status = 'Obeso';
        }
    } else if(sexo === 'feminino'){
        if (imc < 19.1){
            status = 'Abaixo do Peso';
        }else if(imc < 25.8){
            status = 'Peso Normal';
        }else if(imc < 27.3){
            status = 'Marginalmente Acima do Peso';
        }else if(imc < 32.3){
            status = 'Acima do Peso Ideal';
        }else{
            status = 'Obeso';
        }
    }

    condicao.value = status;
    stylizing(status);
    console.log(imc);
}

const style ={
    'Abaixo do Peso': 'border border-warning bg-warning text-white',
    'Peso Normal': 'border border-sucess bg-success text-white',
    'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
    'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
    'Obeso': 'border border-danger bg-danger text-white'
};

function stylizing(result){
    condicao.setAttribute('class',`form-control form-control-lg ${style[result]}`); 
}

document.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        calculadoraDeIMC();
    }
})
