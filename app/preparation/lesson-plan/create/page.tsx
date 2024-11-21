'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const learningActivities = [
  { id: 'lecture', label: 'Lecture' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'studentPresentation', label: 'Student Presentation' },
  { id: 'game', label: 'Game' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'debate', label: 'Debate' },
  { id: 'discussion', label: 'Discussion' },
  { id: 'caseStudy', label: 'Case Study' },
  { id: 'conceptMapping', label: 'Concept Mapping' },
  { id: 'realWorldProjects', label: 'Real-world Projects' },
  { id: 'reflectionJournal', label: 'Reflection Journal' },
]

export default function LessonPlan() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    topic: '',
    learningGoals: '',
    learningActivities: [] as string[],
    additionalPrompt: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (activityId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      learningActivities: checked
        ? [...prev.learningActivities, activityId]
        : prev.learningActivities.filter(id => id !== activityId)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log(formData)
    // For now, we'll just log the data and pretend to redirect
    router.push('/preparation/lesson-plan/generated')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-900">Create Lesson Plan</h2>
              <p className="text-gray-500 text-sm">Develop structured lesson plans, based on scientific and constructivist method</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="topic">Describe the Topic</Label>
                <Input
                  id="topic"
                  name="topic"
                  placeholder="Enter the main topic of your lesson"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="learningGoals">Learning Goals</Label>
                <Textarea
                  id="learningGoals"
                  name="learningGoals"
                  placeholder="Outline the key learning objectives for this lesson"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Learning Activities</Label>
                <div className="grid grid-cols-2 gap-2">
                  {learningActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={activity.id}
                        checked={formData.learningActivities.includes(activity.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(activity.id, checked as boolean)}
                      />
                      <label
                        htmlFor={activity.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {activity.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="additionalPrompt">Additional Prompt</Label>
                <Textarea
                  id="additionalPrompt"
                  name="additionalPrompt"
                  placeholder="Any additional instructions or context for the lesson plan"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between px-6 pb-6">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Generate Lesson Plan</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

