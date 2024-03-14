from flask import Flask,request, jsonify
from flask_mail import Mail,Message
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = "tsfyguaistyatuis589566875623568956"

app.config['MAIL_SERVER'] = "smtp.googlemail.com"

app.config['MAIL_PORT'] = 587

app.config['MAIL_USE_TLS'] = True

app.config['MAIL_USERNAME'] = "ysuniaga1981@gmail.com"

app.config['MAIL_PASSWORD'] = "abgkzxvjfuctdkfp"

mail = Mail(app)


@app.route("/send_email",methods=["GET"])
def send_email():
	email = request.args.get("email")
	print(email)
	msg_title = "This is a test email"
	sender = "noreply@app.com"
	msg = Message(msg_title,sender=sender,recipients=[email])
	msg_body = "This is the email body"
	msg.body = ""
	data = {
		'app_name': "REBWAR AI",
		'title': msg_title,
		'body': msg_body,
	}


	try:
		mail.send(msg)

		return jsonify({
			"playload": "success",
			"status": "200",
			"error": None
		})
	except Exception as e:
		return jsonify({
			"playload": "Error",
			"status": "404",
			"error": e
		})

if __name__ == "__main__":
	app.run(debug=True)























