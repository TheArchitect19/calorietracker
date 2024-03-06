function generatePDF() {
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Add content to the PDF document
    doc.text("Nutrition Data", 10, 10);
    // Add more text, tables, charts, etc., as needed
  
    // Save the PDF document
    doc.save("nutrition_data.pdf");
  }
  