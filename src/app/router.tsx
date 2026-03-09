import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/Home/HomePage';
import DashboardLayout from '../components/navigation/DashboardLayout';
import SSLCHome from '../pages/sslc/SSLCHome';
import MathematicsHome from '../pages/sslc/mathematics/MathematicsHome';
import ChapterPage from '../pages/sslc/mathematics/ChapterPage';
import PlusOneHome from '../pages/plusone/PlusOneHome';
import PlusOneSubjectHome from '../pages/plusone/SubjectHome';
import PlusOneChapterPage from '../pages/plusone/ChapterPage';

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
            path: 'mathematics',
            element: <MathematicsHome />,
          },
          {
            path: 'mathematics/:chapterId',
            element: <ChapterPage />,
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
      // Other routes will be added here
    ],
  },
]);
