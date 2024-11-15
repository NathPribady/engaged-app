// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import '/app/globals.css';

interface Class {
  id: string
  title: string
  week: number
  subject: string
  time: string
  description: string
}

const upcomingClasses: Class[] = [
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
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    week: 3,
    subject: 'Artificial Intelligence',
    time: '11:00 AM - 12:30 PM',
    description: 'Introduction to core concepts of machine learning and its applications.'
  }
]

export default function LiveClass() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Upcoming Live Classes</CardTitle>
      </CardHeader>
      <CardContent>
        {upcomingClasses.map((classItem) => (
          <Card key={classItem.id} className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{classItem.title}</h3>
                  <p className="text-sm text-gray-500">Week {classItem.week} - {classItem.subject}</p>
                  <p className="text-sm text-gray-500">{classItem.time}</p>
                  <p className="mt-2">{classItem.description}</p>
                </div>
                <Link href="/live-class/content">
                  <Button>Start Class</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}