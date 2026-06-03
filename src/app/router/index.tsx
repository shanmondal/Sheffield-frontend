import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/shared/layouts/MainLayout';

import { HomePage } from '@/features/home/pages/HomePage';
import { ProductsPage } from '@/features/products/pages/ProductsPage';
import { BlogPage } from '@/features/blog/page/BlogPage';
import { ContactPage } from '@/features/contact/pages/ContactPage';

// Product Detail Pages
import { FrictionSawPage } from '@/features/products/pages/FrictionSawPage';

import { SegmentalPage } from '@/features/products/pages/SegmentalPage';
import { TctPage } from '@/features/products/pages/TctPage';

import HotsawPage from '@/features/products/pages/HotsawPage';
import HssPage from '@/features/products/pages/HssPage';
import { PlateSawPage } from '@/features/products/pages/PlateSawPage';
import { RepairMachineryPage } from '@/features/repairing/pages/RepairMachineryPage';
import { PowerGrinderPage } from '@/features/repairing/pages/PowerGrinderPage';
import { PowerFlamePage } from '@/features/repairing/pages/PowerFlamePage';
import { MasterGrinderPage } from '@/features/repairing/pages/MasterGrinderPage';
import { PowerRollPage } from '@/features/repairing/pages/PowerRollPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'reparing',
        element: <RepairMachineryPage />,
      },
      {
  path: "repair-machinery/powergrinder",
  element: <PowerGrinderPage />,

},{
  path: "repair-machinery/powerflame",
  element: <PowerFlamePage />,
},
{
  path: "repair-machinery/mastergrinder",
  element: <MasterGrinderPage />,
},
{
  path: "repair-machinery/powerroll",
  element: <PowerRollPage />,
},
      {
        path: 'products/friction-saw',
        element: <FrictionSawPage />,
      },

      {
        path: 'products/hot-saw',
        element: <HotsawPage />,
      },

      {
        path: 'products/high-speed-steel',
        element: <HssPage />,
      },

      {
        path: 'products/segmental',
        element: <SegmentalPage />,
      },

      {
        path: 'products/tct',
        element: <TctPage />,
      },

      {
        path: 'products/plate-saw',
        element: <PlateSawPage />,
      },

      {
        path: 'blog',
        element: <BlogPage />,
      },

      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
