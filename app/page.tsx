'use client'

import { useState } from 'react'
import { Upload, ChevronRight, Lightbulb, BookOpen, PenTool, BarChart, Zap, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import '/app/globals.css';

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
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    week: 3,
    subject: 'Artificial Intelligence',
    time: '11:00 AM - 12:30 PM',
    description: 'Introduction to core concepts of machine learning and its applications.'
  }
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

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'create' | 'review' | null>(null)
  const [prompt, setPrompt] = useState('')
  const [subject, setSubject] = useState('')
  const [gradeLevel, setGradeLevel] = useState('')
  const [learningMethod, setLearningMethod] = useState('')
  const [generatedMaterial, setGeneratedMaterial] = useState<any | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({})
  const [quizProgress, setQuizProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<any | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setActiveSection('review')
      toast({
        title: "File Uploaded Successfully",
        description: `${event.target.files[0].name} has been uploaded for review.`,
      })
      // Simulating analysis results
      setAnalysisResults({
        improvements: [
          "Add more visual aids to support key concepts",
          "Expand on practical applications of the theory",
          "Include more interactive elements to engage students",
          "Simplify complex terminology for better understanding"
        ],
        resources: [
          { name: "Online Simulation Tool", url: "https://www.example-simulation.com" },
          { name: "Advanced Concepts in Education", author: "J. Smith" },
          { name: "Practical Applications in the Real World", platform: "EduTube" }
        ],
        quizSuggestions: [
          "What is the main principle discussed in the material?",
          "How does this concept apply to real-world scenarios?",
          "What are the three key components of the theory presented?",
          "Explain the relationship between X and Y as described in the material.",
          "What potential challenges might arise when implementing this approach?"
        ],
        stats: {
          readability: 85,
          engagement: 72,
          comprehensiveness: 90
        }
      })
    }
  }

  const handleGenerateMaterial = () => {
    if (!subject || !gradeLevel || !learningMethod) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before generating material.",
        variant: "destructive",
      })
      return
    }

    const exampleLesson = {
      title: "Introduction to Basic Arithmetic",
      sections: [
        {
          title: "Addition",
          content: "Addition is the process of combining two or more numbers. We use the '+' symbol for addition.",
          example: "5 + 3 = 8",
          image: "https://as1.ftcdn.net/v2/jpg/01/20/65/24/1000_F_120652460_7uPT2p82zWUDTkdB1PFYfWNeawRg4jJ1.jpg"
        },
        {
          title: "Subtraction",
          content: "Subtraction is the process of taking one number away from another. We use the '-' symbol for subtraction.",
          example: "10 - 4 = 6",
          image: "https://www.shutterstock.com/shutterstock/photos/2020019123/display_1500/stock-vector-educational-math-children-game-subtraction-for-kids-math-worksheet-vector-illustration-2020019123.jpg"
        },
        {
          title: "Multiplication",
          content: "Multiplication is repeated addition. We use the '×' symbol for multiplication.",
          example: "3 × 4 = 12 (which is the same as 4 + 4 + 4)",
          image: "https://maths.olympiadsuccess.com/assets/images/maths_square_dictionary/tmss.jpg"
        },
        {
          title: "Division",
          content: "Division is the process of splitting a number into equal parts. We use the '÷' symbol for division.",
          example: "12 ÷ 3 = 4",
          image: "https://media.gcflearnfree.org/ctassets/topics/228/div_4_1_illustration_1.png"
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
    toast({
      title: "Material Generated",
      description: "Your custom educational material has been created successfully.",
    })
  }

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }))
    setQuizProgress(prev => Math.min(100, prev + 25))
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
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
                  <Button onClick={handleGenerateMaterial} className="w-full">
                    <Lightbulb className="mr-2 h-4 w-4" /> Generate Material
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Review Existing Material</CardTitle>
                <CardDescription>Upload a file to review and get suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center w-full mb-6">
                  <label htmlFor="dropzone-file-review" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors duration-300">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, or TXT (MAX. 10MB)</p>
                    </div>
                    <input id="dropzone-file-review" type="file" className="hidden" onChange={handleFileUpload} />
                  </label>
                </div>
                {analysisResults && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Analysis Results</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="improvements">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            Suggested Improvements
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-2">
                            {analysisResults.improvements.map((improvement: string, index: number) => (
                              <li key={index}>{improvement}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="resources">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Additional Resources
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-2">
                            {analysisResults.resources.map((resource: any, index: number) => (
                              <li key={index}>
                                {resource.name}
                                {resource.url && (
                                  <a href={resource.url} className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                    (Link)
                                  </a>
                                )}
                                {resource.author && <span className="ml-1">by {resource.author}</span>}
                                {resource.platform && <span className="ml-1">on {resource.platform}</span>}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="quiz">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <PenTool className="mr-2 h-4 w-4" />
                            Quiz Suggestions
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-decimal pl-6 space-y-2">
                            {analysisResults.quizSuggestions.map((question: string, index: number) => (
                              <li key={index}>{question}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="stats">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <BarChart className="mr-2 h-4 w-4" />
                            Content Statistics
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <Label>Readability Score</Label>
                              <Progress value={analysisResults.stats.readability} className="mt-2" />
                              <span className="text-sm text-gray-500">{analysisResults.stats.readability}%</span>
                            </div>
                            <div>
                              <Label>Engagement Level</Label>
                              <Progress value={analysisResults.stats.engagement} className="mt-2" />
                              <span className="text-sm text-gray-500">{analysisResults.stats.engagement}%</span>
                            </div>
                            <div>
                              <Label>Comprehensiveness</Label>
                              <Progress value={analysisResults.stats.comprehensiveness} className="mt-2" />
                              <span className="text-sm text-gray-500">{analysisResults.stats.comprehensiveness}%</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <AnimatePresence>
            {activeSection === 'create' && generatedMaterial && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{generatedMaterial.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {generatedMaterial.sections.map((section: any, index: number) => (
                        <Collapsible key={index}>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {section.title}
                              <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="mb-2">{section.content}</p>
                                <p className="font-semibold">Example: {section.example}</p>
                              </div>
                              <div className="flex justify-center items-center">
                                <img src={section.image} alt={`${section.title} illustration`} className="max-w-full h-auto rounded-lg shadow-md" />
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
                      <Progress value={quizProgress} className="mb-4" />
                      <div className="grid gap-4">
                        {generatedMaterial.quiz.map((quizItem: any, index: number) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="text-base flex items-center">
                                <PenTool className="mr-2 h-4 w-4" />
                                {quizItem.question}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <RadioGroup value={selectedAnswers[index]} onValueChange={(value) => handleAnswerSelect(index, value)}>
                                {quizItem.options.map((option: string, optionIndex: number) => (
                                  <div key={optionIndex} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                                    <RadioGroupItem value={option} id={`q${index}-option${optionIndex}`} />
                                    <Label htmlFor={`q${index}-option${optionIndex}`} className="flex-grow cursor-pointer">{option}</Label>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Class</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.slice(0, 2).map((classItem) => (
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

          <Card>
            <CardHeader>
              <CardTitle>Recent Evaluations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {evaluations.slice(0, 1).map((evaluation, index) => (
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
  )
}