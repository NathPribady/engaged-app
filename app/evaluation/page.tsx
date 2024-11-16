import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import '/app/globals.css'

const classes = [
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
  {
    name: "World History",
    week: 4,
    time: "Mon, Wed, Fri 1:00 PM - 2:00 PM",
    description: "Major events and developments in global history",
    score: 78,
  },
  {
    name: "Introduction to Computer Science",
    week: 6,
    time: "Tue, Thu 11:00 AM - 12:30 PM",
    description: "Basic programming concepts and algorithms",
    score: 88,
  },
]

function getScoreColor(score: number) {
  if (score >= 90) return "bg-green-500"
  if (score >= 80) return "bg-blue-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

export default function FinishedClasses() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Evaluation - Finished Classes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gray-100">
              <CardTitle className="flex justify-between items-center">
                <span>{cls.name}</span>
                <Badge variant="secondary">Week {cls.week}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600 mb-2">{cls.time}</p>
              <p className="mb-4">{cls.description}</p>
              <div className="flex justify-between items-center mb-4">
                <Badge>Finished</Badge>
                <span className={`px-2 py-1 rounded-full text-white text-sm ${getScoreColor(cls.score)}`}>
                  Score: {cls.score}
                </span>
              </div>
              <Link href="/class-improvement" passHref>
                <Button className="w-full">Improve your teaching!</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}