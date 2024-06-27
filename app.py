from flask import Flask, request, redirect, url_for, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('/index.html')

@app.route('/index')
def index():
   return render_template('/index.html')
   
@app.route('/about_me')
def about_me():
   return render_template('/about_me.html')

@app.route('/experience')
def experience():
   return render_template('/expirience.html')

@app.route('/contacts')
def contacts():
   return render_template('/contacts.html')

# @app.route('/test_endpoint')
# def data():
#     return "TEST"

@app.route('/submit', methods=['POST'])
def submit():
    user_email = request.form['User_email']
    user_message = request.form['User_message']
    
    # Ensure the data directory exists
    if not os.path.exists('data'):
        os.makedirs('data')

    # Write the form data to a file
    with open('data/form_data.txt', 'a') as file:
        file.write(f"Email: {user_email}\n")
        file.write(f"Message: {user_message}\n")
        file.write("-------------\n")
    
    return redirect(url_for('contacts'))
# dfsdfsdf
# dfsdfsdf
app.run(debug=True)





# import cgi
# form = cgi.FieldStorage()
# user_email =  form.getvalue('User_email')
# user_message =  form.getvalue('User_message')
# with open('form_data.txt', 'a') as file:
#     file.write(f"Email: {user_email}\n")
#     file.write(f"Message: {user_message}\n")
#     file.write("-------------\n")

# importing Flask and other modules

# from flask import Flask, request, render_template 

# # Flask constructor
# app = Flask(__name__) 

# # A decorator used to tell the application
# # which URL is associated function
# @app.route('/', methods =["GET", "POST"])
# def gfg():
# 	if request.method == "POST":
# 	# getting input with name = fname in HTML form
# 	first_name = request.form.get("fname")
# 	# getting input with name = lname in HTML form 
# 	last_name = request.form.get("lname") 
# 	return "Your name is "+first_name + last_name
# 	return render_template("form.html")

# if __name__=='__main__':
# app.run()

# from flask import Flask, request, render_template

# app = Flask(__name__)

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         user_email = request.form.get('User_email')
#         user_message = request.form.get('User_message')
#         # Process the form data here (e.g., save to database, send email, etc.)
#         return f'Email: {user_email}, Message: {user_message}'
#     return render_template('form.html')

# @app.route('/create', methods=['GET', 'POST'])
# def create():
#     if request.method == 'POST':
#         # Handle the form submission if necessary
#         pass
#     return render_template('create.html')

# if __name__ == '__main__':
#     app.run(debug=True)
