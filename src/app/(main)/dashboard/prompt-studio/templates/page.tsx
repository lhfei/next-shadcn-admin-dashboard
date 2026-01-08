"use client";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { TemplateFilters } from "./_components/template-filters";
import { TemplateGrid } from "./_components/template-grid";
import { TemplateHeader } from "./_components/template-header";
import { TemplateList } from "./_components/template-list";
import { CreationWizard } from "./_components/wizard/creation-wizard";

export default function TemplateLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isCreating, setIsCreating] = useState(false);

  if (isCreating) {
    return <CreationWizard onClose={() => setIsCreating(false)} />;
  }

  return (
    <div className="fade-in flex animate-in flex-col gap-4 p-4 duration-500 md:gap-8 md:p-8">
      <TemplateHeader onNewTemplate={() => setIsCreating(true)} viewMode={viewMode} setViewMode={setViewMode} />

      <TemplateFilters />

      <div className="min-h-0 flex-1">{viewMode === "grid" ? <TemplateGrid /> : <TemplateList />}</div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
