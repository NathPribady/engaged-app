'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"
import { BookOpen, FileText, Layout, PenTool, Clock, HelpCircle, MessageSquare } from 'lucide-react'
import '/app/globals.css'

export default function Dashboard() {
  const preparationCards = [
    { title: "Create New Material", description: "Customize and generate educational content with real-world contextualization", link: "/preparation/generate-material", icon: <FileText />, color: "bg-red-100" },
    { title: "Create Lesson Plan", description: "Develop structured lesson plans, based on scientific and constructivist method", link: "/preparation/lesson-plan", icon: <PenTool />, color: "bg-green-100" },
    { title: "Interactive Lesson", description: "Transform pre-reading materials into interactive lessons", link: "/interactive-lesson", icon: <BookOpen />, color: "bg-purple-100" },
    { title: "Review My Slides", description: "Upload and review your presentation slides, we provide data-driven insightful feedback", link: "/preparation/review-slides", icon: <Layout />, color: "bg-blue-100" },
    { title: "Socratic Dialogue", description: "Prepare for hard questions from student and test your knowledge using Socratic method!", link: "/preparation/socratic-dialogue", icon: <MessageSquare />, color: "bg-indigo-100" },
    { title: "Activities Generator", description: "Create engaging activites for assessments and discussions", link: "/preparation/activities-generator", icon: <HelpCircle />, color: "bg-yellow-100" },
  ]

  const upcomingClasses = [
    {
      id: '1',
      title: 'Introduction to React',
      week: 1,
      subject: 'Web Development',
      time: '10:00 AM - 11:30 AM',
      description: 'Learn the basics of React and component-based architecture.'
    },
    {
      id: '2',
      title: 'Data Structures: Arrays and Linked Lists',
      week: 2,
      subject: 'Computer Science',
      time: '2:00 PM - 3:30 PM',
      description: 'Explore fundamental data structures and their implementations.'
    },
  ]
  
  const evaluations = [
    {
      name: "Introduction to Psychology",
      week: 3,
      time: "Mon, Wed 10:00 AM - 11:30 AM",
      description: "Fundamental concepts of psychology and human behavior",
      score: 85,
    },
    {
      name: "Calculus I",
      week: 5,
      time: "Tue, Thu 2:00 PM - 3:30 PM",
      description: "Limits, derivatives, and basic integration techniques",
      score: 92,
    },
  ]

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Preparation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preparationCards.map((card, index) => (
            <Link href={card.link} key={index} passHref>
              <Card className="flex items-center p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className={`p-3 rounded-full ${card.color}`}>
                  {card.icon}
                </div>
                <div className="ml-4">
                  <CardTitle className="text-lg font-semibold">{card.title}</CardTitle>
                  <CardDescription className="text-sm">{card.description}</CardDescription>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">Live Class</h2>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold">{classItem.title}</h3>
                      <p className="text-sm text-gray-500">Week {classItem.week} - {classItem.subject}</p>
                      <div className="flex items-center mt-1 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {classItem.time}
                      </div>
                      <p className="mt-2 text-sm">{classItem.description}</p>
                      <Link href={`/live-class/content`} passHref>
                        <Button variant="outline" className="mt-2 w-full">
                          Start Class
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
                <Link href="/live-class" passHref>
                  <Button variant="link" className="w-full mt-4">
                    See More Classes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Evaluation</h2>
            <Card>
              <CardHeader>
                <CardTitle>Recent Evaluations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {evaluations.map((evaluation, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold">{evaluation.name}</h3>
                      <p className="text-sm text-gray-500">Week {evaluation.week}</p>
                      <div className="flex items-center mt-1 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {evaluation.time}
                      </div>
                      <p className="mt-2 text-sm">{evaluation.description}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm font-medium mr-2">Score:</span>
                        <Progress value={evaluation.score} className="flex-grow" />
                        <span className="ml-2 text-sm font-medium">{evaluation.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/evaluation" passHref>
                  <Button className="w-full mt-4">
                    View All Evaluations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}