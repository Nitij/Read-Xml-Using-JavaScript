 let xmlContent = '';
        let tableBooks = document.getElementById('books');
        fetch('./xml/books.xml').then((response)=> {
            response.text().then((xml)=>{
                xmlContent = xml;

                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let books = xmlDOM.querySelectorAll('book');

                books.forEach(bookXmlNode => {

                    let row = document.createElement('tr');

                    //author
                    let td = document.createElement('td');
                    td.innerText = bookXmlNode.children[0].innerHTML;
                    row.appendChild(td);

                    //  title
                    td = document.createElement('td');
                    td.innerText = bookXmlNode.children[1].innerHTML;
                    row.appendChild(td);
                    
                    //price
                    td = document.createElement('td');
                    td.innerText = '$ ' + bookXmlNode.children[3].innerHTML;
                    row.appendChild(td);

                    //description
                    td = document.createElement('td');
                    td.innerText = bookXmlNode.children[5].innerHTML;
                    row.appendChild(td);

                    tableBooks.children[1].appendChild(row);
                    
                });
                
            });
        });    