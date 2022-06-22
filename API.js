const dadosFilmes = {
"results": [
    {
        "backdrop_path": "/dBt0DoFfbhOI4ypUfRj1uTq623M.jpg",
        "id": 521029,
        "original_language": "en",
        "original_title": "Annabelle Comes Home",
        "overview": "Determinados a impedir que Annabelle cause ainda mais estragos, os demonologistas Ed e Lorraine Warren levam a boneca possuída até a sala de artefatos em sua casa, colocando-a em \"segurança\" em um vidro sagrado e recorrendo à santa bênção de um padre. Mas, uma noite profana de terror os aguarda, pois Annabelle desperta os espíritos malignos da sala, que agora almejam um novo alvo: a filha de 10 anos do casal Warren, Judy, e seus amigos.",
        "popularity": 107.009,
        "poster_path": "/m8h2gz4El6bvYpDjyQhb7R49rSp.jpg",
        "release_date": "2019-06-26",
        "title": "Annabelle 3: De Volta para Casa",
        "vote_average": 6.4,
      },
      {
        "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
        "id": 646385,
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes para trazer à tona segredos do passado mortal da cidade.",
        "popularity": 486.607,
        "poster_path": "/2PYQKeDhFwP5IX7EnIpCComBqj8.jpg",
        "release_date": "2022-01-12",
        "title": "Pânico",
        "vote_average": 6.8,
      },
      {
        "backdrop_path": "/g15PR8eQV9DehSWlagvdnJZqoRq.jpg",
        "id": 602734,
        "original_language": "en",
        "original_title": "Spiral: From the Book of Saw",
        "overview": "Sob o comando do veterano da polícia Marcus, o detetive Ezekiel \"Zeke\" Banks se une ao seu parceiro novato Willem para desvendar uma série de assassinatos terríveis que estão acontecendo na cidade. Durante as investigações, Zeke acaba se envolvendo no mórbido jogo do assassino.",
        "popularity": 145.145,
        "poster_path": "/jJ7eIqsVLtRwLCX6KeJNeQYjPar.jpg",
        "release_date": "2021-05-12",
        "title": "Espiral: O Legado de Jogos Mortais",
        "video": false,
        "vote_average": 6.1,
      },
      {
        "backdrop_path": "/roYyPiQDQKmIKUEhO912693tSja.jpg",
        "id": 447332,
        "original_language": "en",
        "original_title": "A Quiet Place",
        "overview": "Em uma fazenda dos Estados Unidos, uma família do meio-oeste é perseguida por uma entidade fantasmagórica assustadora. Para se protegerem, eles devem permanecer em silêncio absoluto, a qualquer custo, pois o perigo é ativado pela percepção do som.",
        "popularity": 90.483,
        "poster_path": "/70XFvmFRrdVxAjne5f3ItwRBtuQ.jpg",
        "release_date": "2018-04-03",
        "title": "Um Lugar Silencioso",
        "video": false,
        "vote_average": 7.4,
      },
      {
        "backdrop_path": "/vZ7EVk7FaNEWYqlVWbFLHP8Z0LU.jpg",
        "id": 419430,
        "original_language": "en",
        "original_title": "Get Out",
        "overview": "Agora que Chris e sua namorada, Rose, chegaram à fase de conhecer os pais no namoro, ela o convida para um fim de semana no interior com Missy e Dean. A princípio, Chris acha que o comportamento excessivamente agradável dos dois como tentativas nervosas de lidar com o relacionamento inter-racial da filha, mas, conforme o fim de semana avança, uma série de descobertas cada vez mais perturbadoras o levam a uma verdade que ele jamais poderia ter imaginado.",
        "popularity": 74.765,
        "poster_path": "/A0RoSZh8PEYJgDMgM2EV7Ycz3dR.jpg",
        "release_date": "2017-02-24",
        "title": "Corra!",
        "video": false,
        "vote_average": 7.6,
      },
   ]
}

const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response);
    localStorage.setItem('db_films', data.target.response);

    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++)
    {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
            <div class="card col-2" id="card">
                        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <p class="card-text">${filme.overview}</p>
                        <a href="detalhes_API.html?id=${filme.id}" class="btn btn-primary">Mais Detalhes</a>
                        </div>
            </div>
        `
    }
    document.getElementById('listaFilmes').innerHTML = dadosHTML

}

const mostraErro = (data) => {
    alert('Erro na Requisição');
}

const init = () => {

    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=087d17986fc0d7091b71292d036a8bb7&language=pt-BR&query=batman"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();

}





document.body.onload = init