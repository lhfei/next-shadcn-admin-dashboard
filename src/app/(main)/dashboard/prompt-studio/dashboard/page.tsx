import { RecentActivity } from "./_components/recent-activity";
import { TemplateRecommendations } from "./_components/template-recommendations";
import { TodoList } from "./_components/todo-list";
import { WelcomeBanner } from "./_components/welcome-banner";

export default function PromptStudioDashboard() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <WelcomeBanner />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
        {/* Left Column: Shortcuts & Todos */}
        <div className="flex flex-col gap-4 md:col-span-8">
          <TemplateRecommendations />
          <div className="grid gap-4 md:grid-cols-2">{/* Placeholder for future cards or charts */}</div>
        </div>

        {/* Right Column: Todo & Activity */}
        <div className="flex flex-col gap-4 md:col-span-4">
          <TodoList />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
