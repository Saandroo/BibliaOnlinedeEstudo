function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(campoPesquisa == ""){
      section.innerHTML = "<p><b>Digite o texto para carregar a pesquisa.<b></p>"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let palavra = "";
    let tags = "";
  
    
    
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      palavra = dado.palavra.toLowerCase()
      tags = dado.tags.toLowerCase()
     
      if (titulo.includes(campoPesquisa) || palavra.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo} ${dado.capitulo}:${dado.versiculo}</h2>
          <p class="descricao-meta">
            <b>${dado.palavra}</b>
          </p>
          <div class="mais-info">
            <a href=${dado.link} target="_blank"><b>Estudo completo</b></a>
          </div>
        </div>
      `;
        
      }
  
      // Cria um novo elemento div para cada resultado
      
    }
    
    if(!resultados) {
      resultados = "<p><b>Nada foi encontrado<b></p>"

    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }





