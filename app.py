from flask import Flask,request, jsonify
from flask_mail import Mail,Message
from flask_cors import CORS
from cerberus import Validator
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import re

app = Flask(__name__)
CORS(app)
limiter = Limiter(get_remote_address)
limiter.init_app(app)


app.config['SECRET_KEY'] = "tsfyguaistyatuis589566875623568956"

app.config['MAIL_SERVER'] = "smtp.googlemail.com"

app.config['MAIL_PORT'] = 587

app.config['MAIL_USE_TLS'] = True

app.config['MAIL_USERNAME'] = "ysuniaga1981@gmail.com"

app.config['MAIL_PASSWORD'] = "abgkzxvjfuctdkfp"

mail = Mail(app)



SCHEMA_CREATE_USER = {
    "last_name": {"type": "string", "required": True, "minlength": 2},
    "first_name":{"type": "string", "required": True, "minlength": 2},
}



@app.before_request
def validate_customer():
	if request.path=="/send_email" and request.method=="GET":
		regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
		print(re.fullmatch(regex, request.args["email"])==None)
		data = {
			"last_name": request.args.get("last_name"),
			"first_name": request.args.get("first_name")
		}
		checking = Validator(SCHEMA_CREATE_USER) 
		if re.fullmatch(regex, request.args["email"])==None:
			return {
				"payload": "Invalid email",
				"error": checking.errors
			}
		if not checking.validate(data):
			return {
				"payload": None,
				"error": checking.errors
			}   





@app.route("/send_email",methods=["GET"])
@limiter.limit("5/minute")
def send_email():
	data_rec = {
		"email": request.args.get("email"),
		"last_name": request.args.get("last_name"),
		"first_name": request.args.get("first_name"),
		"phone": request.args.get("phone"),
		"message": request.args.get( "message")
	}

	msg_title = "This is a test email"
	sender = "noreply@app.com"
	msg = Message(msg_title,sender=sender,recipients=['ysuniaga1981@gmail.com'])
	msg_body = "This is the email body"
	msg.body = f"Contact person information: \n"\
			   f"Full name: {data_rec['first_name']} {data_rec['last_name']} \n"\
	 	 	   f"Email: {data_rec['email']} \n"\
	 		   f"Phone number: {data_rec['phone']} \n"\
	 		   f"Message number: {data_rec['message']} "
	data = {
	 	'app_name': "REBWAR AI",
	 	'title': msg_title,
	 	'body': msg_body,
	}
	try:
		mail.send(msg)
		return jsonify({
	 		"playload": msg.body,
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























