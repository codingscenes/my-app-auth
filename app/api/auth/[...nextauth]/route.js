/*
    This file is used to handle the api requests for the auth route
    It is used by the next-auth library to handle the authentication
    of the user

    The functions GET and POST are used to handle the requests
    for the route
    API routes are server-side routes, meaning they run on the server
    API REQUESTS HANDLERS (in our next app) MUST BE ASYNCHRONOUS
    if we have any outside webservice that needs to talk to our next application we can create route handler like this to handle get and post.
    We usually do not have to create these whenever we are just working with the next app with react code directly inside here,
    because if we ever need to reach out to  our server to change data or get data, we usually use server actions instead of api routes. So we do have to create route handler like this for personal use so it is not only for accessing outside services.
*/

// export async function GET() {}

// export async function POST() {}

import { GET, POST } from '@/auth';
export { GET, POST };
