1) Explain the differences between client-side routing and server-side routing.
Server-side routing happens when a link is clicked and a new page is requested from the server.  These requests cause the whole page to refresh, which may provide for a less efficient experience for the user, since unnecessary data can be requested.  However, since this has been the standard for a long time, search engines are optimized for server-side routed pages, which can be a pro for those concerned with SEO.

Client-side routing happens when the route is handled internally by the JavaScript that is loaded on the page.  Only the changes to the request are rendered, and the entire webpage doesn't have to be reloaded.  Since less data is processed, this can make a webpage faster and smoother for the user.  However, this requires that the whole website or web app be loaded initially, which may potentially mean that data that will never be needed is loaded as well, and therefore the intial page load may be less fast.

2) Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
The HTTP Methods that are mapped to the CRUD acronym are: POST (Create), GET (Read), PUT (Update), DELETE (Delete).

3) Mention three tools we can use to make AJAX requests.
Three tools we can use to make AJAX requests are: Axios, jQuery, and Fetch.