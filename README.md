# Linkme Service
A web-server (with HTTP APIs) that handles all tasks required for a linkme service.

-----
# Steps to run:
1. Install Node.js version ```10.19.1```
2. Install MongoDB Community Server edition version ```3.3.5```.
3. On command line type ```mongo``` and hit enter. (Will run Mongo on its default port ```27017```)
5. Go to root directory of *linkme* project.
6. On command line type ```npm install``` and hit enter.
7. On command line type ```npm start``` and hit enter.
- Yay! 🎉 our server is up and running on default port ```3000```.
- Go through below docs, to understand the ```Entities``` and supported ```API```'s.
- Optional: You can also run test cases by ```npm test```.

-----

## Assumptions

- This is a similar to linktree 
- No auth service is developed, it is assumed that user is logged in. 
- To know which user is hitting the API we are adding userId for the post request in ProductRating API.
- Every *user can add any number of links*. 


## Explanation

- As per the, linkme service it is should be  read-heavy than compared to writes. At peak times, if a  product a trending the writes can be heavy. 
-  We will focus on retrieval of ratings. Hence, as it is **read heavy**. 
-  Also among all the NOSQL DB's we have chosen *MongoDB* document data store, because it provides atomicity at the document level & is strongly consistent (providing CP of the CAP theorem).

----

## Entities:

- User, Links are the 2 collections formed.

---

## Schema 

- Used https://github.com/arb/celebrate for schema validation.

---

# API

### User API 

**1.  Add User API**
    
- API: ```localhost:3000/user```
- HTTP method: POST
- Adds new user in the DB

    ```
    Example using cURL

    curl --location --request POST "{{url}}/user" \
    --header "Content-Type: application/json" \
    --data "{
	\"userName\": \"Piyush Nalawade\"
    }"  

    ```
    ```
    Success response
    Status code: 200 OK
    
    {
        "success": true,
        "message": "Success"
    }   
    ```

    ```
    Success response
    Status code: 409 Conflict
    
    {
        "success": false
    }   
    ```


