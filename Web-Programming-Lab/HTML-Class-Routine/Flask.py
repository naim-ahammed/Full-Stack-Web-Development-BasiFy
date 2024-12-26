from flask import Flask, request, render_template, jsonify
import pytesseract
from PIL import Image
from PyPDF2 import PdfReader
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def upload_form():
    return render_template('index2.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    
    if file.filename.endswith('.png') or file.filename.endswith('.jpg'):
        text = extract_text_from_image(file_path)
    elif file.filename.endswith('.pdf'):
        text = extract_text_from_pdf(file_path)
    else:
        return jsonify({"error": "Unsupported file format"}), 400
    
    routine_data = parse_text_to_table(text)
    return jsonify({"routine": routine_data})

def extract_text_from_image(image_path):
    return pytesseract.image_to_string(Image.open(image_path))

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

def parse_text_to_table(text):
    # Implement text parsing logic here to format it into a routine table
    return text.splitlines()

if __name__ == '__main__':
    app.run(debug=True)
