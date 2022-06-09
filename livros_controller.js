function AdicionarLivros(){
const UsaOrdem = $('#Ordem').is(":checked");
const UsaPrecos = $('#precos').val();

    if(UsaPrecos == 1){
        if(!UsaOrdem){
            JavaScriptSemPreco(); 
        }   
    };
    
    //Se usa a Ordem
    if (UsaOrdem) { 
        LivroOrdemAlfabetica()
    } else if(UsaPrecos == 2) {
            JavaScriptMenorPreco();
    } else if(UsaPrecos == 3){ 
            JavaScriptMaiorPreco();
        }
    }
