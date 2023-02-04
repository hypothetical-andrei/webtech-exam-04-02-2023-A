#Subiect 3 (2.5 pts)
#TOPIC: REST

# Having the following `app` complete the method `GET` at the enpoint `/homeworks` and the method `GET` at the endpoint `/homeworks/id` so that:


- when GET /homeworks is called without any params it will return all entries in the database (0.5p)
- when GET /homeworks is called with the param pass=true it will return all homeworks that are >= 5 (0.5p)
- when GET /homeworks/id is called with a id not present in the database will return status code `404`(0.5p)
- when GET /homeworks/id is called with a valid id will return a json object (0.5p)
- given that the client only accepts `text/plain` GET /homeworks/id will return only the content
