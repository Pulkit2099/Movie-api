Click on the "Send" button to send the POST request to add a movie.
Test the "GET /get-all" endpoint:
Create a new request in Postman.
Set the request type to "GET."
Enter the URL for the "GET /get-all" endpoint: http://localhost:3000/get-all
Click on the "Send" button to send the GET request to fetch all movies.
Test the "GET /get-single" endpoint:
Create a new request in Postman.
Set the request type to "GET."
Enter the URL for the "GET /get-single" endpoint: http://localhost:3000/get-single
Add the query parameter "id" with a movie ID value. For example, if the movie ID is "MOVIE_ID_HERE," set the key-value as id: MOVIE_ID_HERE.
Click on the "Send" button to send the GET request to fetch a single movie.
Test the "GET /get-paginated" endpoint:
Create a new request in Postman.
Set the request type to "GET."
Enter the URL for the "GET /get-paginated" endpoint: http://localhost:3000/get-paginated
Add the query parameters "page" and "size" with appropriate values. For example, to fetch the second page with 10 records per page, set the key-values as page: 2 and size: 10.
Click on the "Send" button to send the GET request to fetch paginated movies.


//note replace this url with my deployed server url
