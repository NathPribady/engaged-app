'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image'
import '/app/globals.css'

type Question = {
  type: 'multiple-choice' | 'short-answer' | 'true-false'
  question: string
  options?: string[]
  correctAnswer: string
}

type TextContent = {
  text: string
  imageUrl?: string
}

type InteractiveElement = {
  type: 'question' | 'discussion' | 'reflection' | 'text-content'
  content: string | Question | TextContent
}

type LessonData = {
  title: string
  description: string
  elements: InteractiveElement[]
}

// This would typically come from an API or database
const lessonData: LessonData = {
  title: "Newton's Laws of Motion",
  description: "An interactive lesson on the fundamental principles of classical mechanics.",
  elements: [
    {
      type: 'text-content',
      content: {
        text: "Newton's First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This law is often referred to as the law of inertia.",
        imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20210307125042/Firstlawofmotion.PNG"
      }
    },
    {
      type: 'question',
      content: {
        type: 'multiple-choice',
        question: "Which of Newton's laws states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force?",
        options: ["First Law", "Second Law", "Third Law", "Fourth Law"],
        correctAnswer: "First Law"
      }
    },
    {
      type: 'discussion',
      content: "Discuss real-life examples where Newton's First Law of Motion is observed. How does this law explain the importance of seatbelts in vehicles?"
    },
    {
      type: 'text-content',
      content: {
        text: "Newton's Second Law of Motion describes the relationship between an object's mass and the amount of force needed to accelerate it. The law is often expressed as F = ma, where F is the net force applied, m is the mass of the object, and a is the acceleration.",
        imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20240804223932/Newtons-second-Law-of-Motion.webp"
      }
    },
    {
      type: 'question',
      content: {
        type: 'true-false',
        question: "Newton's Second Law of Motion states that the acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object.",
        correctAnswer: "True"
      }
    },
    {
      type: 'text-content',
      content: {
        text: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction. This means that in every interaction, there is a pair of forces acting on the two interacting objects.",
        imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20230314153559/Reaction-of-Alcohols-First-law-of-motion-and-Latent-heat-(Feedback).png"
      }
    },
    {
      type: 'reflection',
      content: "Reflect on how Newton's Third Law of Motion applies in your daily life. Provide at least two examples and explain your reasoning."
    }
  ]
}

export default function StudentLessonView() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    if (currentPage < lessonData.elements.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const renderElement = (element: InteractiveElement) => {
    switch (element.type) {
      case 'text-content':
        return (
          <div>
            <p>{(element.content as TextContent).text}</p>
            {(element.content as TextContent).imageUrl && (
              <div className="mt-4">
                <Image
                  src={(element.content as TextContent).imageUrl || ''}
                  alt="Content illustration"
                  width={400}
                  height={200}
                />
              </div>
            )}
          </div>
        )
      case 'question':
        const question = element.content as Question
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Question</h3>
            <p className="mb-4">{question.question}</p>
            {question.type === 'multiple-choice' && (
              <RadioGroup>
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            {question.type === 'true-false' && (
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true">True</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false">False</Label>
                </div>
              </RadioGroup>
            )}
            {question.type === 'short-answer' && (
              <Textarea placeholder="Enter your answer here" className="min-h-[100px]" />
            )}
          </div>
        )
      case 'discussion':
      case 'reflection':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</h3>
            <p className="mb-4">{element.content as string}</p>
            <Textarea placeholder={`Enter your ${element.type} here`} className="min-h-[100px]" />
          </div>
        )
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{lessonData.title}</h1>
        <p className="text-gray-600">{lessonData.description}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Page {currentPage + 1} of {lessonData.elements.length}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderElement(lessonData.elements[currentPage])}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentPage === 0}>Previous</Button>
        <Button onClick={handleNext} disabled={currentPage === lessonData.elements.length - 1}>Next</Button>
      </div>
    </div>
  )
}