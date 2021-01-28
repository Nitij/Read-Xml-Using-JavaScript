const myRequest = new Request('./xml/');
const myInit = {
  method: 'GET',
  headers: { 'Content-Type': 'application/xml' },
};

fetch(myRequest, myInit)
  .then((response) => {
    console.log(response.blob());
  });