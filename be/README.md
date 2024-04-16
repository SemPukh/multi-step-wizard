# To start the app do the following

add <code>.env</code>

<code>npm i</code>

<code>npm start</code>

---

additionally, you would probably want to fill DB with questions.

In this case, you can send query using postman with these data

url <code>http://localhost:${PORT}/questions/many</code>

method <code>POST</code>

body (raw - JSON) - <code>
[
{
"text": "How are you doing?",
"order": 1,
"type": "input",
"options": [],
},
{
"text": "Select mood that you had today (multichoice)",
"order": 2,
"type": "multiChoice",
"options": [
"Excited",
"Calm",
"Sad"
],
},
{
"text": "Describe yourself with one word",
"order": 3,
"type": "input"
},
{
"text": "How old are you?",
"order": 4,
"type": "numeric"
},
{
"text": "Do you happen to speak foreign language?",
"order": 5,
"type": "singleChoice",
"options": ["Yes", "No"]
},
{
"text": "Are you good at finding words to describe your feelings?",
"order": 6,
"type": "singleChoice",
"options": ["No", "Rarely", "Sometimes", "Usually", "Yes"]
},
{
"text": "How much time do you spend on the computer on average per day?",
"order": 7,
"type": "singleChoice",
"options": ["Less than 30 minutes", "1 to 2 hours", "3 to 4 hours", "More than 4 hours"]
},
{
"text": "What do you use the computer for?",
"order": 8,
"type": "multiChoice",
"options": ["Browsing internet", "Learning", "Work", "Gaming", "Other"]
},
{
"text": "What is your best friend's name?",
"order": 9,
"type": "input"
},
{
"text": "What do you think was your best year?",
"order": 10,
"type": "numeric"
}
]
</code>

---

Some endpoints are not used on FE, they exist just to configure questions with postman
