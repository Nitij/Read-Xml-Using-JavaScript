// const myRequest = new Request('./xml/');
// const myInit = {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/xml' },
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     console.log(response.blob());
//   });

document.getElementById('fileInput').addEventListener('change', selectedFileChanged => {
  if (this.files.length === 0) {
    console.log('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload =  fileReadCompleted => {
    // when the reader is done, the content is in reader.result.
    console.log(reader.result);
  };
  
  reader.readAsText(this.files[0]);
});