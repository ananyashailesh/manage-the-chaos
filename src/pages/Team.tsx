import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Search, Mail, Phone, MoreHorizontal, UserPlus } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Product Manager',
      email: 'alice@company.com',
      phone: '+1 (555) 123-4567',
      avatar: '',
      status: 'active',
      projects: ['Mobile App Redesign', 'Marketing Website'],
      skills: ['Product Strategy', 'Agile', 'User Research']
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Senior Developer',
      email: 'bob@company.com',
      phone: '+1 (555) 234-5678',
      avatar: '',
      status: 'active',
      projects: ['Backend API Development', 'E-commerce Platform'],
      skills: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: '3',
      name: 'Carol Davis',
      role: 'UX Designer',
      email: 'carol@company.com',
      phone: '+1 (555) 345-6789',
      avatar: '',
      status: 'active',
      projects: ['Mobile App Redesign'],
      skills: ['UI/UX Design', 'Figma', 'Prototyping']
    },
    {
      id: '4',
      name: 'David Wilson',
      role: 'DevOps Engineer',
      email: 'david@company.com',
      phone: '+1 (555) 456-7890',
      avatar: '',
      status: 'active',
      projects: ['Backend API Development'],
      skills: ['AWS', 'Docker', 'CI/CD']
    },
    {
      id: '5',
      name: 'Eve Brown',
      role: 'Frontend Developer',
      email: 'eve@company.com',
      phone: '+1 (555) 567-8901',
      avatar: '',
      status: 'busy',
      projects: ['Marketing Website', 'E-commerce Platform'],
      skills: ['Vue.js', 'CSS', 'JavaScript']
    },
    {
      id: '6',
      name: 'Frank Miller',
      role: 'Marketing Specialist',
      email: 'frank@company.com',
      phone: '+1 (555) 678-9012',
      avatar: '',
      status: 'away',
      projects: ['Marketing Website'],
      skills: ['Digital Marketing', 'SEO', 'Content Strategy']
    }
  ];

  const statusColors = {
    active: 'bg-success text-success-foreground',
    busy: 'bg-warning text-warning-foreground',
    away: 'bg-muted text-muted-foreground'
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Team
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your team members and their roles
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>

        {/* Search and Stats */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search team members..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{teamMembers.length}</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">
                  {teamMembers.filter(m => m.status === 'active').length}
                </div>
                <div className="text-sm text-muted-foreground">Active</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={statusColors[member.status as keyof typeof statusColors]} variant="secondary">
                      {member.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="w-3 h-3 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-3 h-3 mr-2" />
                    {member.phone}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <p className="text-sm font-medium mb-2">Current Projects</p>
                  <div className="flex flex-wrap gap-1">
                    {member.projects.map((project, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;