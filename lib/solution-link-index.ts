import { allSolutions } from "@/content/Solutions";
import { canonicalPath } from "@/lib/canonical";

export type SolutionLink = {
  path: string;
  title: string;
  category: string;
};

export const solutionLinkIndex: SolutionLink[] = allSolutions.map((solution) => ({
  path: canonicalPath(solution.url),
  title: solution.heroHeading || solution.title,
  category: solution.category,
}));
