## HTTP Servers
A server is a hardware or software that pushes and pulls data across a network. A server's purpose is to send data to a client. A client can request data from a server, and the server processes that request and responds with the desired data.

HTTP (Hyper-Text Transfer Protocol) : The process of exchanging hypertext between clients and servers.
## HTTP Requests
## Request Verbs / Methods
- `GET` : Retrieve a resource, such as a html page
- `POST` : Create a new resource
- `PUT` : Overwrite a resource
- `PATCH` : Edit a resource
- `DELETE` : Delete a resource
### Request Line
`GET /:user_id/posts HTTP/1.1`
- First we have the **Method**, the action we would like to perform
- The **URI (Uniform Resource Indicator)** for the requested resource
- the **HTTP version**, usually 1.1 or 2
### Headers
Key/value pairs that define how the server might process the request.
### Body
Where we send data that cannot fit in a header and/or is to complex for the URI
## HTTP Responses
### Status Line
`HTTP/1.1 200 OK`
- The **HTTP Version**
- The **Status Code** : A code that indicates how the request went
- The **Reason-Phrase** : A Description of the Status Code
### Headers
Key/value pairs that define how the client might process the response.
### Body
Requested resources such as HTML, CSS, JS or a cat jpeg.
### Status Codes
- 100s : Informational
- 200s : Successes
- 300s : Redirects
- 400s : Client Errors, you messed up
- 500s : Server Errors, they messed up