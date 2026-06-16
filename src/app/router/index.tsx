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
import AdminLogin from '@/features/admin/pages/AdminLogin';
import AdminLeads from '@/features/admin/pages/AdminLeads';
import AdminLeadDetails from '@/features/admin/pages/AdminLeadDetails';
import TctGeneralPage from '@/features/products/pages/TctGeneralPage';
import TctIndustrialPage from '@/features/products/pages/TctIndustrialPage';
import TctDiyPage from '@/features/products/pages/TctDiyPage';
import TctPanelScoringPage from '@/features/products/pages/TctPanelScoringPage';
import BandsawPage from '@/features/products/pages/BandsawPage';

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
        path: 'reparing/powergrinder',
        element: <PowerGrinderPage />,
      },
      {
        path: 'reparing/powerflame',
        element: <PowerFlamePage />,
      },
      {
        path: 'reparing/mastergrinder',
        element: <MasterGrinderPage />,
      },
      {
        path: 'reparing/powerroll',
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
        path: 'products/tct/general',
        element: <TctGeneralPage />,
      },
      {
        path: 'products/tct/industrial',
        element: <TctIndustrialPage />,
      },
      {
        path: 'products/tct/diy',
        element: <TctDiyPage />,
      },
      {
        path: 'products/tct/panel-scoring',
        element: <TctPanelScoringPage />,
      },
      {
        path: 'products/plate-saw',
        element: <PlateSawPage />,
      },
      {
        path: 'bandsaw',
        element: <BandsawPage />,
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
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/leads',
    element: <AdminLeads />,
  },
  {
    path: '/admin/leads/:id',
    element: <AdminLeadDetails />,
  },
]);
