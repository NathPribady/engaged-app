'use client'

import { useState } from 'react'
import { Upload, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import '/app/globals.css';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'create' | 'review' | null>(null)
  const [prompt, setPrompt] = useState('')
  const [subject, setSubject] = useState('')
  const [gradeLevel, setGradeLevel] = useState('')
  const [learningMethod, setLearningMethod] = useState('')
  const [generatedMaterial, setGeneratedMaterial] = useState<any | null>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({})

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setActiveSection('review')
      // Here you would typically handle the file upload to your server
      console.log('File uploaded:', event.target.files[0].name)
    }
  }

  const handleGenerateMaterial = () => {
    // In a real application, you would send the prompt and options to your backend or AI service
    console.log('Generating material with:', { subject, gradeLevel, learningMethod, prompt })
    // For this example, we'll set a pre-defined lesson with more interactive elements
    const exampleLesson = {
      title: "Introduction to Basic Arithmetic",
      sections: [
        {
          title: "Addition",
          content: "Addition is the process of combining two or more numbers. We use the '+' symbol for addition.",
          example: "5 + 3 = 8",
          image: "/placeholder.svg?height=200&width=200"
        },
        {
          title: "Subtraction",
          content: "Subtraction is the process of taking one number away from another. We use the '-' symbol for subtraction.",
          example: "10 - 4 = 6",
          image: "/placeholder.svg?height=200&width=200"
        },
        {
          title: "Multiplication",
          content: "Multiplication is repeated addition. We use the '×' symbol for multiplication.",
          example: "3 × 4 = 12 (which is the same as 4 + 4 + 4)",
          image: "/placeholder.svg?height=200&width=200"
        },
        {
          title: "Division",
          content: "Division is the process of splitting a number into equal parts. We use the '÷' symbol for division.",
          example: "12 ÷ 3 = 4",
          image: "/placeholder.svg?height=200&width=200"
        }
      ],
      quiz: [
        {
          question: "What is 7 + 8?",
          options: ["13", "14", "15", "16"],
          correctAnswer: "15"
        },
        {
          question: "If you have 15 apples and give away 6, how many do you have left?",
          options: ["7", "8", "9", "10"],
          correctAnswer: "9"
        },
        {
          question: "What is 5 × 6?",
          options: ["25", "30", "35", "40"],
          correctAnswer: "30"
        },
        {
          question: "If you have 20 candies and want to share them equally among 4 friends, how many candies will each friend get?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "5"
        }
      ]
    }
    setGeneratedMaterial(exampleLesson)
    setActiveSection('create')
  }

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }))
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Card className="w-full mb-6">
          <CardHeader>
            <CardTitle>Create New Material</CardTitle>
            <CardDescription>Customize and generate educational content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="subject">Class Subject</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Select value={gradeLevel} onValueChange={setGradeLevel}>
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select a grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elementary">Elementary School</SelectItem>
                    <SelectItem value="middle">Middle School</SelectItem>
                    <SelectItem value="high">High School</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="method">Learning Method</Label>
                <Select value={learningMethod} onValueChange={setLearningMethod}>
                  <SelectTrigger id="method">
                    <SelectValue placeholder="Select a learning method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual</SelectItem>
                    <SelectItem value="auditory">Auditory</SelectItem>
                    <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                    <SelectItem value="reading">Reading/Writing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="prompt">Custom Prompt (Optional)</Label>
                <Textarea
                  id="prompt"
                  placeholder="Enter additional instructions or requirements for the material"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              <Button onClick={handleGenerateMaterial}>Generate Material</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mb-6">
          <CardHeader>
            <CardTitle>Review Existing Material</CardTitle>
            <CardDescription>Upload a file to review and get suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file-review" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, or TXT (MAX. 10MB)</p>
                </div>
                <input id="dropzone-file-review" type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      {activeSection === 'create' && generatedMaterial && (
        <Card className="w-full mb-6">
          <CardHeader>
            <CardTitle>{generatedMaterial.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {generatedMaterial.sections.map((section: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                <Collapsible key={index}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {section.title}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="mb-2">{section.content}</p>
                        <p className="font-semibold">Example: {section.example}</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src={section.image} alt={`${section.title} illustration`} className="max-w-full h-auto" />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4">Pop Quiz</h3>
              <div className="grid gap-4">
                {generatedMaterial.quiz.map((quizItem: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{quizItem.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup value={selectedAnswers[index]} onValueChange={(value) => handleAnswerSelect(index, value)}>
                        {quizItem.options.map((option: string, optionIndex: number) => (
                          <div key={optionIndex} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`q${index}-option${optionIndex}`} />
                            <Label htmlFor={`q${index}-option${optionIndex}`}>{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      )}

      {activeSection === 'review' && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>Review the suggestions for your material</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  What can be improved
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <ul className="list-disc pl-4">
                  <li>Consider adding more visual aids to support key concepts</li>
                  <li>Expand on the practical applications of the theory</li>
                  <li>Include more interactive elements to engage students</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="mt-4">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  Additional resource suggestions
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <ul className="list-disc pl-4">
                  <li>Online simulation tool: www.example-simulation.com</li>
                  <li>Supplementary reading: Advanced Concepts in Education by J. Smith</li>
                  <li>Video series: Practical Applications in the Real World on EduTube</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="mt-4">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  Pop quiz suggestions
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <div className="grid gap-4">
                  {[
                    "What is the main principle discussed in the material?",
                    "How does this concept apply to real-world scenarios?",
                    "What are the three key components of the theory presented?",
                    "Explain the relationship between X and Y as described in the material.",
                    "What potential challenges might arise when implementing this approach?"
                  ].map((question, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup>
                          {['Option A', 'Option B', 'Option C', 'Option D'].map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`q${index}-option${optionIndex}`} />
                              <Label htmlFor={`q${index}-option${optionIndex}`}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      )}
    </>
  )
}