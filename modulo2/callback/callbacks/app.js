const somar = (n1, n2) => n1 + n2;

const subtrair = (n1, n2) => n1 - n2;

const dividir = (n1, n2) => n1 / n2;

const multiplicar =  (n1, n2) => n1 / n2;

const calculadora = (n1, n2, operacao) => operacao(n1, n2);

// console.log(calculadora(20, 45, somar))

const dobro = (num) => num * 2;

const triplo = (num) => num * 3;

function aplicar(num, operacao) {
    console.log(operacao(num)) 
}

// aplicar(5, dobro)
/*
A primeira função deverá se chamar adicionarHttp , a mesma, receberá por parâmetro uma URL que será concatenada com a String "http://" no começo da URL e em seguida retornará esse valor. A segunda função se chamará processar  e receberá uma lista de sites web e uma função. A função processar  retornará um array contendo todos os resultados aplicando a função que foi passada.
*/

function adicionarHttp(url) {
    return 'http://' + url    
  
}

function processar(a,  callback){   
    const mode = []  
  
    mode.push(callback(a))
    
     console.log(mode)  
    
  }
  
  processar(["www.google.com", "www.yahoo.com"], adicionarHttp)



