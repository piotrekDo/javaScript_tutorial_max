const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

function csvToArray(str, delimiter = ",") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  return rows;
  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  //   const arr = rows.map(function (row) {
  //     const values = row.split(delimiter);
  //     const el = headers.reduce(function (object, header, index) {
  //       object[header] = values[index];
  //       return object;
  //     }, {});
  //     return el;
  //   });

  // return the array
  console.log(arr);
  return arr;
}

myForm.addEventListener("submit", function (e) {
  const bodyEl = document.querySelector("body");
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const text = e.target.result;
    const data = csvToArray(text);
    const dataParser = new RowParser(data);
    const section = dataParser.parse();
    bodyEl.append(section);
    // document.write(JSON.stringify(data));
  };

  reader.readAsText(input);
});

class RowParser {
  data = [];
  constructor(data) {
    this.data = data;
  }

  parse() {
    this.data = this.data.map(element => {
      const values = element.split(",");
      const row = new Row(values[0], values[1], values[2]);
      return row;
    });
    const section = document.createElement("section");
    section.className = "results";
    this.data.forEach(row => section.append(row.render()));
    return section;
  }
}

class Row {
  name;
  role;
  country;

  constructor(name, role, country) {
    this.name = name;
    this.role = role;
    this.country = country;
  }

  render() {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
            ${this.name}, ${this.role}, ${this.country}
        `;
    return row;
  }
}
