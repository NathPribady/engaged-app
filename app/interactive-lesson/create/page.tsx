'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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

export default function CreateInteractiveLesson() {
  const router = useRouter()
  const [lessonTitle, setLessonTitle] = useState("Newton's Laws of Motion")
  const [lessonDescription, setLessonDescription] = useState("An interactive lesson on the fundamental principles of classical mechanics.")
  const [interactiveElements, setInteractiveElements] = useState<InteractiveElement[]>([
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
  ])

  const addInteractiveElement = (type: InteractiveElement['type']) => {
    let newElement: InteractiveElement

    switch (type) {
      case 'question':
        newElement = {
          type: 'question',
          content: {
            type: 'multiple-choice',
            question: '',
            options: ['', '', '', ''],
            correctAnswer: ''
          }
        }
        break
      case 'discussion':
        newElement = { type: 'discussion', content: '' }
        break
      case 'reflection':
        newElement = { type: 'reflection', content: '' }
        break
      case 'text-content':
        newElement = { type: 'text-content', content: { text: '', imageUrl: '' } }
        break
    }

    setInteractiveElements([...interactiveElements, newElement])
  }

  const updateInteractiveElement = (index: number, updatedElement: InteractiveElement) => {
    const updatedElements = [...interactiveElements]
    updatedElements[index] = updatedElement
    setInteractiveElements(updatedElements)
  }

  const removeInteractiveElement = (index: number) => {
    const updatedElements = interactiveElements.filter((_, i) => i !== index)
    setInteractiveElements(updatedElements)
  }

  const handleSaveLesson = () => {
    console.log('Saving lesson:', { lessonTitle, lessonDescription, interactiveElements })
    toast({
      title: "Lesson Saved",
      description: "Your interactive lesson has been saved successfully.",
    })
    router.push('/interactive-lesson')
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Create Interactive Lesson</h1>
        <p className="text-gray-600">Edit and enhance the pre-generated lesson on Newton's Laws of Motion</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="lesson-title">Lesson Title</Label>
                <Input
                  id="lesson-title"
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  placeholder="Enter lesson title"
                />
              </div>
              <div>
                <Label htmlFor="lesson-description">Lesson Description</Label>
                <Textarea
                  id="lesson-description"
                  value={lessonDescription}
                  onChange={(e) => setLessonDescription(e.target.value)}
                  placeholder="Enter lesson description"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>Edit existing elements or add new content, questions, discussions, and reflections to your lesson</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {interactiveElements.map((element, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{element.type.charAt(0).toUpperCase() + element.type.slice(1)} {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {element.type === 'question' && (
                      <div className="space-y-4">
                        <Select
                          value={(element.content as Question).type}
                          onValueChange={(value) => updateInteractiveElement(index, {
                            ...element,
                            content: { ...element.content as Question, type: value as Question['type'] }
                          })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select question type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            <SelectItem value="short-answer">Short Answer</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                          </SelectContent>
                        </Select>
                        <Textarea
                          value={(element.content as Question).question}
                          onChange={(e) => updateInteractiveElement(index, {
                            ...element,
                            content: { ...element.content as Question, question: e.target.value }
                          })}
                          placeholder="Enter your question"
                          className="min-h-[100px]"
                        />
                        {(element.content as Question).type === 'multiple-choice' && (
                          <div className="space-y-2">
                            {(element.content as Question).options?.map((option, optionIndex) => (
                              <Input
                                key={optionIndex}
                                value={option}
                                onChange={(e) => {
                                  const updatedOptions = [...(element.content as Question).options || []]
                                  updatedOptions[optionIndex] = e.target.value
                                  updateInteractiveElement(index, {
                                    ...element,
                                    content: { ...element.content as Question, options: updatedOptions }
                                  })
                                }}
                                placeholder={`Option ${optionIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}
                        <Input
                          value={(element.content as Question).correctAnswer}
                          onChange={(e) => updateInteractiveElement(index, {
                            ...element,
                            content: { ...element.content as Question, correctAnswer: e.target.value }
                          })}
                          placeholder="Correct answer"
                        />
                      </div>
                    )}
                    {(element.type === 'discussion' || element.type === 'reflection') && (
                      <Textarea
                        value={element.content as string}
                        onChange={(e) => updateInteractiveElement(index, { ...element, content: e.target.value })}
                        placeholder={`Enter ${element.type} prompt`}
                        className="min-h-[100px]"
                      />
                    )}
                    {element.type === 'text-content' && (
                      <div className="space-y-4">
                        <Textarea
                          value={(element.content as TextContent).text}
                          onChange={(e) => updateInteractiveElement(index, {
                            ...element,
                            content: { ...(element.content as TextContent), text: e.target.value }
                          })}
                          placeholder="Enter text content"
                          className="min-h-[100px]"
                        />
                        <Input
                          value={(element.content as TextContent).imageUrl}
                          onChange={(e) => updateInteractiveElement(index, {
                            ...element,
                            content: { ...(element.content as TextContent), imageUrl: e.target.value }
                          })}
                          placeholder="Enter image URL (optional)"
                        />
                      </div>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      className="mt-4"
                      onClick={() => removeInteractiveElement(index)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <div className="flex space-x-2">
                <Button onClick={() => addInteractiveElement('text-content')}>
                  <Plus className="h-4 w-4 mr-2" /> Add Text Content
                </Button>
                <Button onClick={() => addInteractiveElement('question')}>
                  <Plus className="h-4 w-4 mr-2" /> Add Question
                </Button>
                <Button onClick={() => addInteractiveElement('discussion')}>
                  <Plus className="h-4 w-4 mr-2" /> Add Discussion
                </Button>
                {/* <Button onClick={() => addInteractiveElement('reflection')}>
                  <Plus className="h-4 w-4 mr-2" /> Add Reflection
                </Button> */}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Link href="/lessons" passHref>
              <Button variant="outline">Back to Lessons</Button>
            </Link>
            <Button onClick={handleSaveLesson}>Save Lesson</Button>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Preview</CardTitle>
              <CardDescription>This is how your lesson will appear to students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">{lessonTitle}</h2>
                <p className="text-gray-600">{lessonDescription}</p>
              </div>
              {interactiveElements.map((element, index) => (
                <div key={index} className="space-y-4">
                  {element.type === 'text-content' && (
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
                  )}
                  {element.type === 'question' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Question {index + 1}</h3>
                      <p className="mb-2">{(element.content as Question).question}</p>
                      {(element.content as Question).type === 'multiple-choice' && (
                        <RadioGroup>
                          {(element.content as Question).options?.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`q${index}-option-${optionIndex}`} />
                              <Label htmlFor={`q${index}-option-${optionIndex}`}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                      {(element.content as Question).type === 'true-false' && (
                        <RadioGroup>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id={`q${index}-true`} />
                            <Label htmlFor={`q${index}-true`}>True</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id={`q${index}-false`} />
                            <Label htmlFor={`q${index}-false`}>False</Label>
                          </div>
                        </RadioGroup>
                      )}
                      {(element.content as Question).type === 'short-answer' && (
                        <Textarea placeholder="Enter your answer here" className="min-h-[100px]" />
                      )}
                    </div>
                  )}
                  {element.type === 'discussion' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Discussion</h3>
                      <p className="mb-2">{element.content as string}</p>
                      <Textarea placeholder="Enter your thoughts here" className="min-h-[100px]" />
                    </div>
                  )}
                  {element.type === 'reflection' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Reflection</h3>
                      <p className="mb-2">{element.content as string}</p>
                      <Textarea placeholder="Enter your reflection here" className="min-h-[100px]" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}