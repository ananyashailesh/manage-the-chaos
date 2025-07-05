import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { MoreHorizontal, Users, Calendar, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    progress: number;
    status: 'active' | 'completed' | 'on-hold';
    dueDate: string;
    teamMembers: Array<{
      id: string;
      name: string;
      avatar?: string;
    }>;
    tasksCompleted: number;
    totalTasks: number;
  };
}

const statusColors = {
  active: 'bg-success text-success-foreground',
  completed: 'bg-primary text-primary-foreground',
  'on-hold': 'bg-warning text-warning-foreground',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Status and Due Date */}
        <div className="flex items-center justify-between">
          <Badge className={statusColors[project.status]} variant="secondary">
            {project.status}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {project.dueDate}
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        {/* Tasks */}
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle2 className="mr-1 h-3 w-3" />
          {project.tasksCompleted}/{project.totalTasks} tasks completed
        </div>

        {/* Team Members */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Team</span>
          </div>
          <div className="flex -space-x-2">
            {project.teamMembers.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="text-xs">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {project.teamMembers.length > 3 && (
              <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                <span className="text-xs text-muted-foreground">
                  +{project.teamMembers.length - 3}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}