import DashboardLayout from '@/components/DashboardLayout';
import ProjectCard from '@/components/ProjectCard';
import KanbanBoard from '@/components/KanbanBoard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, Users, CheckCircle2, Calendar, Plus } from 'lucide-react';

const Index = () => {
  const mockProjects = [
    {
      id: '1',
      name: 'Mobile App Redesign',
      description: 'Complete redesign of the mobile application interface',
      progress: 75,
      status: 'active' as const,
      dueDate: 'Dec 15, 2024',
      teamMembers: [
        { id: '1', name: 'Alice Johnson' },
        { id: '2', name: 'Bob Smith' },
        { id: '3', name: 'Carol Davis' }
      ],
      tasksCompleted: 12,
      totalTasks: 16
    },
    {
      id: '2',
      name: 'Backend API Development',
      description: 'RESTful API development for the new platform',
      progress: 45,
      status: 'active' as const,
      dueDate: 'Jan 20, 2025',
      teamMembers: [
        { id: '4', name: 'David Wilson' },
        { id: '5', name: 'Eve Brown' }
      ],
      tasksCompleted: 8,
      totalTasks: 18
    },
    {
      id: '3',
      name: 'Marketing Website',
      description: 'Corporate website with modern design',
      progress: 90,
      status: 'completed' as const,
      dueDate: 'Nov 30, 2024',
      teamMembers: [
        { id: '6', name: 'Frank Miller' },
        { id: '7', name: 'Grace Lee' }
      ],
      tasksCompleted: 9,
      totalTasks: 10
    }
  ];

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2 from last month',
      icon: BarChart3,
      color: 'text-primary'
    },
    {
      title: 'Completed Tasks',
      value: '89',
      change: '+12% from last week',
      icon: CheckCircle2,
      color: 'text-success'
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+3 new members',
      icon: Users,
      color: 'text-accent'
    },
    {
      title: 'Due This Week',
      value: '7',
      change: '2 overdue',
      icon: Calendar,
      color: 'text-warning'
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-muted/30 ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400">
            <TabsTrigger value="projects">Projects Overview</TabsTrigger>
            <TabsTrigger value="board">Kanban Board</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Projects</h2>
              <Button variant="outline" size="sm">
                View All Projects
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="board" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Project Board</h2>
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </div>
            
            <KanbanBoard />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Index;
