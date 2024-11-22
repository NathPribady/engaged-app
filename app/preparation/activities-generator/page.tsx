import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Puzzle, Microscope, Globe, Calculator, Beaker, PenTool, Users, Clock } from 'lucide-react'

const activities = [
  {
    id: 1,
    title: "Ecosystem in a Bottle",
    subtitle: "Create a self-sustaining ecosystem to observe over time",
    subject: "Biology",
    grade: "9th Grade",
    duration: "45 minutes",
    icon: Microscope,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 2,
    title: "Historical Figure Debate",
    subtitle: "Role-play and debate as significant historical figures",
    subject: "History",
    grade: "10th Grade",
    duration: "60 minutes",
    icon: Users,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: 3,
    title: "Real-world Geometry Scavenger Hunt",
    subtitle: "Find geometric shapes and calculate their properties",
    subject: "Mathematics",
    grade: "8th Grade",
    duration: "40 minutes",
    icon: Calculator,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    title: "Build a Simple Circuit",
    subtitle: "Hands-on activity to understand electrical circuits",
    subject: "Physics",
    grade: "7th Grade",
    duration: "50 minutes",
    icon: Puzzle,
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 5,
    title: "Poetry Exquisite Corpse",
    subtitle: "Collaborative poetry writing exercise",
    subject: "English",
    grade: "11th Grade",
    duration: "30 minutes",
    icon: PenTool,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
]

export default function ActivitiesGeneratorList() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Activities Generator</h1>
        <Link href="/preparation/activities-generator/create">
          <Button>Generate New Activity</Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div key={activity.id} className="relative p-6 rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-3 ${activity.color}`}>
                <activity.icon className={`w-6 h-6 ${activity.iconColor}`} />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">{activity.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.subtitle}
                </p>
                <div className="pt-2 space-y-1">
                  <p className="text-sm flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <strong>Subject:</strong> {activity.subject}
                  </p>
                  <p className="text-sm flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <strong>Grade:</strong> {activity.grade}
                  </p>
                  <p className="text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <strong>Duration:</strong> {activity.duration}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/preparation/activities-generator/generated`}>
                <Button variant="outline" className="w-full">View Activity</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

