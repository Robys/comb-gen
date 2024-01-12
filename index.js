function AutoGame() {
  var facil =
    "01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25";
    
  var sorte =
    "01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30";
  
  var quina =
    "01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53;54;55;26;57;58;59;60;61;62;63;64;65;66;67;68;69;70;71;72;73;74;75;76;67;78;79;80";

  var time =
    "01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53;54;55;26;57;58;59;60;61;62;63;64;65;66;67;68;69;70;71;72;73;74;75;76;67;78;79;80";
  
  var mega =
    "01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53;54;55;26;57;58;59;60";

  var auto = document.getElementById("auto-game").value;
  var games = document.getElementById("gam_input_2").value;
  var values = "";
  var limit = 0;

  switch (auto) {
    case "mega":
      values = mega;
      limit = 6;
      break;
    case "facil":
      values = facil;
      limit = 15;
      break;
    case "sorte":
      values = sorte;
      limit = 7;
      break;
    case "quina":
      values = quina;
      limit = 5;
      break;
    case "time":
      values = time;
      limit = 10;
      break;
  

    default:
      values = facil;
      limit = 15;
      break;
  }
  Generate(games,values,limit)
}

function Generate(games, values, limit) {
  var sliced = values.split(";");
  var card = [];
  for (var i = 0; i < games; i++) {
    if (i > games + 1) break;

    var x = shuffle(sliced).slice(0, limit);
    x.sort((a, b) => a - b);
    card.push(x);
    
  }

  UpdateTable(card);
}

function UpdateTable(card) {
  var table_body = document.getElementById("comb_table_body");

  card.forEach((element, index) => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const rowText = document.createTextNode(index);
    const cellText = document.createTextNode(
      element.map((n) => {
        return ` ${n} `;
      })
    );
    row.appendChild(rowText);
    cell.appendChild(cellText);
    row.appendChild(cell);
    table_body.appendChild(row);
  });
}

function Main() {
  var values = document.getElementById("num_input").value;

  var games = document.getElementById("gam_input").value;

  var limit = document.getElementById("lim_input").value;

  Generate(games, values, limit);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

//6;10;59;4;34;13;38;2;17;23;7;42;29;12;43;27;49;32;30;05
