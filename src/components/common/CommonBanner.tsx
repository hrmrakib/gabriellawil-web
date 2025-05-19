import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  path?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function CommonBanner({
  title,
  path,
  breadcrumbs: propBreadcrumbs,
}: PageHeaderProps) {
  // Generate breadcrumbs from path if provided
  const breadcrumbs = propBreadcrumbs || generateBreadcrumbs(path || "");

  // Function to generate breadcrumbs from a path
  function generateBreadcrumbs(path: string): Breadcrumb[] {
    // Remove leading and trailing slashes and split by slash
    const segments = path.replace(/^\/|\/$/g, "").split("/");

    if (segments.length === 1 && segments[0] === "") {
      return [{ label: "Home", href: "/" }];
    }

    // Start with Home
    const result: Breadcrumb[] = [{ label: "Home", href: "/" }];

    // Build up the breadcrumbs
    let currentPath = "";

    segments.forEach((segment) => {
      // Format the segment (capitalize first letter)
      const formattedSegment =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

      // Build the path
      currentPath += `/${segment}`;

      // Add to breadcrumbs
      result.push({
        label: formattedSegment,
        href: currentPath,
      });
    });

    return result;
  }

  return (
    <div className='relative w-full overflow-hidden bg-[url("/banner2.png")] md:bg-[url("/banner.png")] bg-cover bg-center h-[400px]'>
      <div className='h-full w-full bg-black/40 flex items-center justify-between'>
        <div className='h-full md:h-auto container mx-auto flex flex-col md:flex-row items-center'>
          <div className='text-center md:px-4 py-6 md:py-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
              {title}
            </h1>
            <nav aria-label='Breadcrumb'>
              <ol className='flex justify- items-center flex-wrap'>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className='flex items-center'>
                    {index > 0 && (
                      <ChevronRight
                        className='h-4 w-4 mx-2 text-amber-300'
                        aria-hidden='true'
                      />
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className='text-amber-200' aria-current='page'>
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className='text-white hover:text-amber-200 transition-colors'
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className=''></div>
        </div>
      </div>
    </div>
  );
}
