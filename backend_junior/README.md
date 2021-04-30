## The Problem

Each endpoint holds some data, but someone made a mistake and shuffled it.
Thankfully, all users ids are still here ! 
You have to fix it ! For that, you have to make a backup of each endpoint locally (one json file per endpoint),
then compile them in one file, sanitize the data, store it locally and upload it on JsonBox.

Here are the endpoints : 
GET : https://recrutement-practice-default-rtdb.firebaseio.com/informations.json
```json
{
  "$userId" : {
    "name":"L43t1t14"
  }
}
```
GET : https://recrutement-practice-default-rtdb.firebaseio.com/jobs.json
```json
{
  "$userId" : {
    "job": "Developer"
  }
}
```
GET : https://recrutement-practice-default-rtdb.firebaseio.com/users.json
````json
{
  "$userId":{
    "city": "pArIs",
    "age": 26
  }
}
````
Be careful when you sanitize the data because : 
- if user name is "#ERROR", you have to skip it and pick the name in another table
- name vowel are replaced by number (e by 3, a by 4, i by 1 and o by 0).
- cities are not written in a proper way (there are some letters in uppercase in the middle of the word, but they should only be at the beginning)
- You have to delete all `null` or `undefined` fields in the sanitize format
Some informations like name are injected in the bad table, so you've to sort them :
- always take the name in users, and if missing, pick it in an other table if available
- always take the age in informations, and if missing, pick it in an other table

FIY, the output should look like results.json.


### Bonus : 
Create a unit test, that compare your result to the results.json file. 

