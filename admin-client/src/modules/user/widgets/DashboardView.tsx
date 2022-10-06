import React from 'react';
import { Outlet } from 'react-router-dom';
import { Column } from '../../../core/widgets/Column';
import { DashboardToolbar } from './DashboardToolbar';

export function DashboardView() {
  return (
    <Column sx={{ minHeight: "100vh" }}>
      <DashboardToolbar />
      <Outlet />
    </Column>
  );
}
