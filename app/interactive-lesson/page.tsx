import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import '/app/globals.css' 

type Lesson = {
  id: string
  title: string
  description: string
  createdAt: string
}

export default function LessonsList() {
  // This would typically come from an API or database
  const lessons: Lesson[] = [
    {
      id: '1',
      title: "Newton's Laws of Motion",
      description: "An interactive lesson on the fundamental principles of classical mechanics.",
      createdAt: "2023-06-01"
    },
    {
      id: '2',
      title: "Introduction to Photosynthesis",
      description: "Explore the process of how plants convert light energy into chemical energy.",
      createdAt: "2023-06-02"
    },
    {
      id: '3',
      title: "The Water Cycle",
      description: "Learn about the continuous movement of water within the Earth and atmosphere.",
      createdAt: "2023-06-03"
    }
  ]

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Interactive Lessons</h1>
        <Link href="/interactive-lesson/create" passHref>
          <Button>Create New Lesson</Button>
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id}>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>Created on {lesson.createdAt}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
              <Link href={`/interactive-lesson/view`} passHref>
                <Button variant="outline">View Lesson</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}