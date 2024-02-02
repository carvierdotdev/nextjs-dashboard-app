## Summary of all chapter until Chapter 10

> This is from: [Summary of work done](https://nextjs.org/learn/dashboard-app/partial-prerendering#summary)

To recap, you've done a few things to optimize data fetching in your application, you've:

1. Created a database in the same region as your application code to reduce latency between your server and database.
2. Fetched data on the server with React Server Components. This allows you to keep expensive data fetches and logic on the server, reduces the client-side JavaScript bundle, and prevents your database secrets from being exposed to the client.
3. Used SQL to only fetch the data you needed, reducing the amount of data transferred for each request and the amount of JavaScript needed to transform the data in-memory.
4. Parallelize data fetching with JavaScript - where it made sense to do so.
5. Implemented Streaming to prevent slow data requests from blocking your whole page, and to allow the user to start interacting with the UI without waiting for everything to load.
6. Move data fetching down to the components that need it, thus isolating which parts of your routes should be dynamic in preparation for Partial Prerendering.

## Summary of Chapter 11: Adding Search and Pagination

In this chapter, you'll learn how to handle search and pagination using URL search parameters instead of client state¹. You'll fetch data on the server and use the `useRouter` router hook for smoother, client-side transitions¹.

### Key Concepts and Implementations

- **Search Feature**: After introducing the search feature, the table displays only 6 invoices at a time. This is because the `fetchFilteredInvoices()` function in `data.ts` returns a maximum of 6 invoices per page¹.

- **Adding Pagination**: Pagination allows users to navigate through the different pages to view all the invoices¹. You'll implement pagination using URL params, just like you did with search¹.

- **Client Component**: The `<Pagination/>` component is a Client Component¹. You don't want to fetch data on the client as this would expose your database secrets¹. Instead, you fetch the data on the server, and pass it to the component as a prop¹.

- **Fetch Invoices Pages**: The `fetchInvoicesPages` function returns the total number of pages based on the search query¹. For example, if there are 12 invoices that match the search query, and each page displays 6 invoices, then the total number of pages would be 2¹.

- **Create Page URL**: You'll create a new function inside the `<Pagination>` Component called `createPageURL`¹. Similarly to the search, you'll use `URLSearchParams` to set the new page number, and `pathname` to create the URL string¹.

- **Reset Page Number**: When the user types a new search query, you want to reset the page number to 1¹. You can do this by updating the `handleSearch` function in your `<Search>` component¹.

By the end of this chapter, you'll have implemented search and pagination using URL Params and Next.js APIs¹. This will significantly enhance the user experience of your dashboard app¹.

Source: Conversation with Bing, 2/2/2024
(1) Learn Next.js: Adding Search and Pagination | Next.js. https://nextjs.org/learn/dashboard-app/adding-search-and-pagination.
(2) Learn Next.js | Next.js. https://nextjs.org/learn/dashboard-app.
(3) Learn Next.js: Adding Authentication | Next.js. https://nextjs.org/learn/dashboard-app/adding-authentication.