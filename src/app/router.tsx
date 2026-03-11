import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/Home/HomePage';
import DashboardLayout from '../components/navigation/DashboardLayout';
import SSLCHome from '../pages/sslc/SSLCHome';
import SSLCSubjectHome from '../pages/sslc/SubjectHome';
import SSLCChapterPage from '../pages/sslc/ChapterPage';
import PlusOneHome from '../pages/plusone/PlusOneHome';
import PlusOneSubjectHome from '../pages/plusone/SubjectHome';
import PlusOneChapterPage from '../pages/plusone/ChapterPage';
import DARSHome from '../pages/dars/DARSHome';
import DARSSubjectHome from '../pages/dars/SubjectHome';
import DARSChapterPage from '../pages/dars/ChapterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sslc',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <SSLCHome />,
          },
          {
            path: ':subjectId',
            element: <SSLCSubjectHome />,
          },
          {
            path: ':subjectId/:chapterId',
            element: <SSLCChapterPage />,
          },
        ],
      },
      {
        path: '/plusone',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <PlusOneHome />,
          },
          {
            path: ':subjectId',
            element: <PlusOneSubjectHome />,
          },
          {
            path: ':subjectId/:chapterId',
            element: <PlusOneChapterPage />,
          },
        ],
      },
      {
        path: '/dars',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <DARSHome />,
          },
          {
            path: ':subjectId',
            element: <DARSSubjectHome />,
          },
          {
            path: ':subjectId/:chapterId',
            element: <DARSChapterPage />,
          },
        ],
      },
      // Other routes will be added here
    ],
  },
]);
