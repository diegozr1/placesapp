from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
	print("yo soy el dueño")
	return("que haces?")

if __name__ == '__main__':
	app.run(debug=True)
