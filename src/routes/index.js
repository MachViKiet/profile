

// import AccountManager from '~/pages/Dashboard/AccountManager'

// // Define the routes
// const router = createBrowserRouter([
//   {
//     element: <AppRoute> <AppLayout /> </AppRoute>,
//     children: [
//       {
//         element: (<AdminRoute> <DashboardLayout /> </AdminRoute>),
//         children: [
//           {
//             path: '/dashboard',
//             element: <Suspense fallback={<Loading />}><Dashboard /></Suspense>,
//           },
//           {
//             path: '/chat_generator',
//             element: <Suspense fallback={<Loading />}><AdminChat /></Suspense>,
//           },
//           {
//             path: '/knowledge_bases',
//             element: <KnowledgeBase />,
//           },
//           {
//             element: <DashboardWithSubNavLayout />,
//             children: [
//               {
//                 path: '/knowledge_bases/:id/',
//                 element: <Suspense fallback={<Loading />}><Datasets /></Suspense>,
//               },
//               {
//                 path: '/knowledge_bases/configuration/:id',
//                 element: <KnowledgeBaseConfiguration />,
//               },
//               {
//                 path: '/knowledge_bases/retrieval_testing/:id',
//                 element: <KnowledgeBaseRetrievalTesting />,
//               }
//             ]
//           },
//           {
//             path: '/knowledge_bases/:collection/:id',
//             element: <Suspense fallback={<Loading />}><DatasetDetail /></Suspense>,
//           },
//           {
//             path: '/models_manager',
//             element: <ModelsManager />,
//           },
//           {
//             path: '/user_accounts',
//             element: <Suspense fallback={<Loading />}><AccountManager /></Suspense>,
//           },
//           {
//             path: '/setting',
//             element: <Setting />,
//           },
//           {
//             path: '/admin_profile',
//             element: <AdminProfile />,
//           },
//         ],
//       },
//     ]
//   },
//   {
//     path: "*", // Bất kỳ đường dẫn nào không khớp sẽ đi tới trang lỗi
//     element: <UnknowPage />,
//   },
// ],
//   {
//     future: {
//       v7_relativeSplatPath: true, // Enables relative paths in nested routes
//       v7_fetcherPersist: true,   // Retains fetcher state during navigation
//       v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
//       v7_partialHydration: true, // Supports partial hydration for server-side rendering
//       v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
//       v7_starttransition: true
//     },
//   });

// export default router;
