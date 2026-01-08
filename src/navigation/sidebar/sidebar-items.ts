import {
  Activity,
  Banknote,
  BookOpen,
  Box,
  ChartBar,
  CheckCircle2,
  Code,
  Cpu,
  Database,
  FileCheck,
  FileCode,
  Fingerprint,
  GitBranch,
  History,
  LayoutDashboard,
  type LucideIcon,
  MessageSquareText,
  PlayCircle,
  PlusCircle,
  Search,
  Share2,
  Sparkles,
  Table,
  Terminal,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
    ],
  },
  {
    id: 1.1,
    label: "Intelligence Platform",
    items: [
      {
        title: "Intelligence Platform",
        url: "#",
        icon: Sparkles,
        subItems: [
          {
            title: "Prompt Discovery",
            url: "/dashboard/prompt-discovery/new",
            icon: PlusCircle,
          },
          {
            title: "Processing Hub",
            url: "/dashboard/document-processing",
            icon: PlayCircle,
          },
          {
            title: "Insight Chat",
            url: "/dashboard/insight-chat",
            icon: MessageSquareText,
          },
          {
            title: "Prompt Registry",
            url: "/dashboard/prompt-registry",
            icon: Search,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Prompt 管理平台（Web）",
    items: [
      {
        title: "Prompt Registry（配置层）",
        url: "/dashboard/prompt-studio/templates",
        icon: BookOpen,
        subItems: [
          {
            title: "Prompt 元数据",
            url: "/dashboard/prompt-studio/templates/my",
            icon: Sparkles,
          },
          {
            title: "Prompt DSL",
            url: "/dashboard/prompt-studio/templates/categories",
            icon: FileCode,
          },
          {
            title: "Schema 定义",
            url: "/dashboard/prompt-studio/templates/team",
            icon: Box,
          },
          {
            title: "存储策略",
            url: "/dashboard/prompt-studio/templates/market",
            icon: Database,
          },
        ],
      },
      {
        title: "Prompt Compiler（编译层）",
        url: "/dashboard/prompt-studio/compiler",
        icon: Code,
        subItems: [
          {
            title: "Prompt → LLM 指令",
            url: "/dashboard/prompt-studio/compiler/instruction",
            icon: Terminal,
          },
          {
            title: "Prompt → Schema",
            url: "/dashboard/prompt-studio/compiler/schema",
            icon: FileCode,
          },
          {
            title: "Prompt → 执行 Pipeline",
            url: "/dashboard/prompt-studio/compiler/pipeline",
            icon: GitBranch,
          },
        ],
      },
      {
        title: "Prompt Runtime（执行层）",
        url: "/dashboard/prompt-studio/tasks",
        icon: Cpu,
        subItems: [
          {
            title: "LLM 调用管理",
            url: "/dashboard/prompt-studio/tasks/active",
            icon: Activity,
          },
          {
            title: "文档解析",
            url: "/dashboard/prompt-studio/tasks/pending",
            icon: FileCheck,
          },
          {
            title: "LangExtract 校验",
            url: "/dashboard/prompt-studio/tasks/validation",
            icon: CheckCircle2,
          },
          {
            title: "RunLog & Trace",
            url: "/dashboard/prompt-studio/tasks/history",
            icon: History,
          },
        ],
      },
      {
        title: "Knowledge Persistence（知识沉淀）",
        url: "/dashboard/prompt-studio/data-exploration",
        icon: Database,
        subItems: [
          {
            title: "PostgreSQL（结构化事实）",
            url: "/dashboard/prompt-studio/data-exploration/table",
            icon: Table,
          },
          {
            title: "Graph（关系）",
            url: "/dashboard/prompt-studio/data-exploration/graph",
            icon: Share2,
          },
          {
            title: "Vector（语义向量）",
            url: "/dashboard/prompt-studio/data-exploration/vector",
            icon: Search,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Pages",
    items: [
      {
        title: "Authentication",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Login v1", url: "/auth/v1/login", newTab: true },
          { title: "Login v2", url: "/auth/v2/login", newTab: true },
          { title: "Register v1", url: "/auth/v1/register", newTab: true },
          { title: "Register v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
];
