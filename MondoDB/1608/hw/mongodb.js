// 1. צרו db בשם homework

// use homework

// 2. צרו collection בשם comments

// db.createCollection('comments')

// 3. הכניסו ל-collection את כל המידע מהכתובת https://jsonplaceholder.typicode.com/comments

// db.comments.insertMany([])

// 4. התחברו ל-mongo מ-node בעזרת המודול mongodb כמו שראינו בשיעור

// 5. הכניסו ל-comments collection תגובה חדשה שלכם (או תגובות חדשות)

// db.comments.insertOne({})

// 6. החזירו את כל התגובות של postId=6

// db.comments.find({postId: 6}).pretty()

// 7. החזירו את מספר התגובות הקיימות ל-postId=7 (בעזרת count)

// db.comments.find({postId: 7}).count()

// 8. החזירו את כל התגובות של הפוסטים 1 ו-2

// db.comments.find({$or: [{postId: 1},{postId:2}]}).pretty();

// 9. מחקו את כל התגובות של postId=8

// db.comments.remove({postId: 8})

// 10. מה ה-id של התגובה המכילה את ה-email= Claudia@emilia.ca

// db.comments.find({email: 'Claudia@emilia.ca'}).projection({id: 1, _id: 0})

// 11. החליפו מייל לתגובה מסעיף 10

// db.comments.update({id: 97}, {$set:{email: 'Sophie changed email'}})

// 12. עדכנו את טקסט התגובה עם id=11

// db.comments.update({id: 11}, {$set:{body: 'Sophie changed body'}})

// למתקדמים:

// 13. בכמה תגובות מופיעה המילה הבאה ״aliquam״ ב-body

// db.comments.find({body:/aliquam/}).count()

// למתקדמים מאוד:

// 14. כמה תגובות יש לכל פוסט

// db.comments.find().forEach(function(doc){print('PostId: '+ doc.postId + ' Count: ' + db.comments.find({postId: doc.postId}).count())})
