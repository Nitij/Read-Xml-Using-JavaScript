// const myRequest = new Request('./xml/');
// const myInit = {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/xml' },
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     console.log(response.blob());
//   });

document.getElementById('fileInput').addEventListener('change', function selectedFileChanged() {
  if (this.files.length === 0) {
    console.log('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function fileReadCompleted() {
    //console.log(reader.result);

   

  };

 
  for( const file of fileInput.files){

      let parser = new DOMParser();
      let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
      let books = xmlDOM.querySelectorAll('vUnCom');
      let books2 = xmlDOM.querySelectorAll('dhEmi');

      let row = document.createElement('tr');

      //Data
      let td = document.createElement('td');
      td.innerText = books.children[0].innerHTML;
      row.appendChild(td);

      //  Valor
      td = document.createElement('td');
      td.innerText = books2.children[1].innerHTML;
      row.appendChild(td);
      
      tableBooks.children[1].appendChild(row);
  }

   

  //reader.readAsText(this.files[0]);
  // let parser = new DOMParser();
  // let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
  // let books = xmlDOM.querySelectorAll('book');

  



});