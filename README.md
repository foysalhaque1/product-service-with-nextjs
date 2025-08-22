Project Description

This is a Car Parts Service website built with Next.js. It allows users to browse car parts, view detailed service information, and manage bookings. Admin or authorized users can add new products (car parts) through a protected dashboard. The project is connected to a MongoDB database for product and service data storage.


Setup & installation:

1.Create a new Next.js app:npx create-next-app@latest car-parts-service
2.Navigate into the project folder – Move into the directory where the project files are located.

3.Install dependencies – Run npm install to install all required packages from package.json.

4.Configure environment variables – Create a .env.local file and add values like database URI, authentication secret, etc.

5.Run the development server – Start the Next.js development server with npm run dev.

6.Open the app in browser – Visit http://localhost:3000 to view the project.


Route Summery

/ → Homepage with car parts/services overview.

/services → List of all car services offered.

/services/[id] → Service details page with description, price, and facilities.

/products/add → Protected route to add new car service(only for logged-in users).

/signin → User login with credentials.

/register → User registration page.

