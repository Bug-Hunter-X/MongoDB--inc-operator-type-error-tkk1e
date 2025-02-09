```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateMany({}, {$inc: {field1: 1}});
```