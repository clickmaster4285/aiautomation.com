// app/solutions/layout.tsx
import { ReactNode } from 'react';
import { solutionLinkIndex } from '@/lib/solution-link-index';
import { SolutionContextLinks } from '@/components/solutions/SolutionContextLinks';

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
      <SolutionContextLinks index={solutionLinkIndex} />
    </div>
  );
}