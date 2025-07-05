import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: {
    id: string;
    name: string;
    avatar?: string;
  };
  labels: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const priorityColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
};

const TaskCard = ({ task }: { task: Task }) => (
  <Card className="mb-3 hover:shadow-md transition-all duration-200 cursor-pointer border-0 bg-card">
    <CardContent className="p-4 space-y-3">
      <div className="flex items-start justify-between">
        <h4 className="font-medium text-sm leading-tight">{task.title}</h4>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <MoreHorizontal className="h-3 w-3" />
        </Button>
      </div>
      
      {task.description && (
        <p className="text-xs text-muted-foreground line-clamp-2">
          {task.description}
        </p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          <Badge 
            variant="outline" 
            className={cn("text-xs px-2 py-0", priorityColors[task.priority])}
          >
            {task.priority}
          </Badge>
          {task.labels.map((label) => (
            <Badge key={label} variant="secondary" className="text-xs px-2 py-0">
              {label}
            </Badge>
          ))}
        </div>
        
        <Avatar className="h-6 w-6">
          <AvatarImage src={task.assignee.avatar} />
          <AvatarFallback className="text-xs">
            {task.assignee.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
    </CardContent>
  </Card>
);

export default function KanbanBoard() {
  const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      color: 'border-l-muted-foreground',
      tasks: [
        {
          id: '1',
          title: 'Design user interface mockups',
          description: 'Create wireframes and high-fidelity designs for the new dashboard',
          priority: 'high',
          assignee: { id: '1', name: 'Ananya' },
          labels: ['Design', 'UI/UX']
        },
        {
          id: '2',
          title: 'Set up development environment',
          description: 'Configure local development setup with all necessary tools',
          priority: 'medium',
          assignee: { id: '2', name: 'Annie' },
          labels: ['Development', 'Setup']
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'border-l-warning',
      tasks: [
        {
          id: '3',
          title: 'Implement authentication system',
          description: 'Add login, logout, and user session management',
          priority: 'high',
          assignee: { id: '3', name: 'Devika' },
          labels: ['Backend', 'Security']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      color: 'border-l-accent',
      tasks: [
        {
          id: '4',
          title: 'Code review for API endpoints',
          description: 'Review and test new REST API implementations',
          priority: 'medium',
          assignee: { id: '4', name: 'Raichel' },
          labels: ['Review', 'API']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'border-l-success',
      tasks: [
        {
          id: '5',
          title: 'Project setup and initial configuration',
          description: 'Initialize project structure and basic configurations',
          priority: 'low',
          assignee: { id: '1', name: 'Ananaya' },
          labels: ['Setup', 'Configuration']
        }
      ]
    }
  ];

  return (
    <div className="flex space-x-6 h-full overflow-x-auto pb-6">
      {columns.map((column) => (
        <div key={column.id} className="flex-shrink-0 w-80">
          <Card className={cn("h-full border-0 shadow-sm", column.color, "border-l-4")}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {column.title}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {column.tasks.length}
                  </Badge>
                </CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-0">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
              
              <Button 
                variant="ghost" 
                className="w-full mt-2 border-2 border-dashed border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add task
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}