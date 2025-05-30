const listaStorage = localStorage.getItem("listaLivros");
let listaLivros = [];
if (listaStorage) {
  listaLivros = JSON.parse(listaStorage);
}

function clicarSalvar() {
  console.log("Clicou para salvar");

  const titulo = document.getElementById("input_title").value;
  const subtitulo = document.getElementById("input_subtitle").value;
  const autor = document.getElementById("input_authors").value;
  const editora = document.getElementById("input_publisher").value;
  const sinopse = document.getElementById("input_synopsis").value;
  const ano = document.getElementById("input_year").value;
  const paginas = document.getElementById("input_page_count").value;
  const categorias = document.getElementById("input_subjects").value;
  const capaURL = document.getElementById("input_cover_url").value;

  const novoLivro = {
    titulo,
    subtitulo,
    autor,
    editora,
    sinopse,
    ano,
    paginas,
    categorias,
    capaURL
  };

  listaLivros.push(novoLivro);
  console.log(listaLivros);
  localStorage.setItem("listaLivros", JSON.stringify(listaLivros));
  alert("Livro salvo com sucesso!");
}

function configurarEventos() {
  const botaoSalvar = document.getElementById("botao_salvar");
  botaoSalvar.addEventListener("click", clicarSalvar);
}

window.addEventListener("load", configurarEventos);