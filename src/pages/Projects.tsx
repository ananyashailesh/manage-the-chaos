import DashboardLayout from '@/components/DashboardLayout';
import ProjectCard from '@/components/ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const allProjects = [
    {
      id: '1',
      name: 'Mobile App Redesign',
      description: 'Complete redesign of the mobile application interface with modern UI/UX principles',
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
      description: 'RESTful API development for the new platform with comprehensive documentation',
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
      description: 'Corporate website with modern design and SEO optimization',
      progress: 90,
      status: 'completed' as const,
      dueDate: 'Nov 30, 2024',
      teamMembers: [
        { id: '6', name: 'Frank Miller' },
        { id: '7', name: 'Grace Lee' }
      ],
      tasksCompleted: 9,
      totalTasks: 10
    },
    {
      id: '4',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      progress: 25,
      status: 'active' as const,
      dueDate: 'Mar 15, 2025',
      teamMembers: [
        { id: '8', name: 'Helen Clark' },
        { id: '9', name: 'Ian Cooper' },
        { id: '10', name: 'Jane Foster' }
      ],
      tasksCompleted: 5,
      totalTasks: 20
    },
    {
      id: '5',
      name: 'Data Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time analytics',
      progress: 10,
      status: 'on-hold' as const,
      dueDate: 'Apr 30, 2025',
      teamMembers: [
        { id: '11', name: 'Kevin Lopez' },
        { id: '12', name: 'Lisa Wang' }
      ],
      tasksCompleted: 2,
      totalTasks: 15
    }
  ];

  const activeProjects = allProjects.filter(p => p.status === 'active');
  const completedProjects = allProjects.filter(p => p.status === 'completed');
  const onHoldProjects = allProjects.filter(p => p.status === 'on-hold');

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage and track all your projects in one place
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">{activeProjects.length}</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">{completedProjects.length}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Projects Content */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">
              All Projects
              <Badge variant="secondary" className="ml-2">
                {allProjects.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="active">
              Active
              <Badge variant="secondary" className="ml-2">
                {activeProjects.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed
              <Badge variant="secondary" className="ml-2">
                {completedProjects.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="on-hold">
              On Hold
              <Badge variant="secondary" className="ml-2">
                {onHoldProjects.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="on-hold">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {onHoldProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Projects;