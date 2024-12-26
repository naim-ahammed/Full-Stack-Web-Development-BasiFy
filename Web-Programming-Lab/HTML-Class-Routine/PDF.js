<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>


pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    pdf.getPage(1).then(page => {
      page.getTextContent().then(textContent => {
        const text = textContent.items.map(item => item.str).join(' ');
        console.log('Extracted Text:', text);
      });
    });
  });
  