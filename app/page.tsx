'use client'

import { useState } from 'react'
import { Upload, ChevronRight, Lightbulb, BookOpen, PenTool, BarChart, Zap, Clock, FileUp } from 'lucide-react'
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
import { useRouter } from 'next/navigation'
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
    time: "Mon, Wed, Fri 1:00 PM - 3:00 PM",
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
  const [activeSection, setActiveSection] = useState<'create' | 'review' | null>(null) /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [prompt, setPrompt] = useState('')
  const [subject, setSubject] = useState('')
  const [gradeLevel, setGradeLevel] = useState('')
  const [generatedMaterial, setGeneratedMaterial] = useState<any | null>(null) /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({})
  const [quizProgress, setQuizProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<any | null>(null) /* eslint-disable  @typescript-eslint/no-explicit-any */
  const router = useRouter();

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
          "Add more real-world examples to illustrate each law of motion",
          "Include interactive simulations to demonstrate the laws in action",
          "Expand on the historical context of Newton's discoveries",
          "Provide more mathematical problems to reinforce understanding of F = ma"
        ],
        resources: [
          { name: "Interactive Physics Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=motion" },
          { name: "The Principia: Mathematical Principles of Natural Philosophy", author: "Isaac Newton" },
          { name: "Newton's Laws of Motion in Action", platform: "YouTube - Crash Course Physics" }
        ],
        quizSuggestions: [
          "Explain how Newton's First Law of Motion applies to a car coming to a stop at a red light.",
          "Calculate the force required to accelerate a 1000 kg car from 0 to 100 km/h in 10 seconds.",
          "Describe an example of Newton's Third Law of Motion in everyday life.",
          "How does mass affect the acceleration of an object when a constant force is applied?",
          "Explain why a rocket can propel itself in the vacuum of space using Newton's Third Law."
        ],
        stats: {
          readability: 85,
          engagement: 72,
          comprehensiveness: 90
        }
      })
    }
  }

  const handleFileUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      
      // Simulate file upload and redirection
      toast({
        title: "File Uploaded Successfully",
        description: `${file.name} has been uploaded. Redirecting to lesson creation...`,
      })
      
      // Redirect to the interactive lesson creation page
      setTimeout(() => {
        router.push('/interactive-lesson/create')
      }, 500)
    }
  }

  const handleGenerateMaterial = () => {
    if (!subject || !gradeLevel) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before generating material.",
        variant: "destructive",
      })
      return
    }

    const exampleLesson = {
      title: "Newton's Laws of Motion",
      sections: [
        {
          title: "First Law of Motion",
          content: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
          example: "A book sitting on a table remains at rest until a force (like a push) acts on it.",
          image: "https://media.geeksforgeeks.org/wp-content/uploads/20210307125042/Firstlawofmotion.PNG"
        },
        {
          title: "Second Law of Motion",
          content: "The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object.",
          example: "F = ma (Force equals mass times acceleration)",
          image: "https://media.geeksforgeeks.org/wp-content/uploads/20240804223932/Newtons-second-Law-of-Motion.webp"
        },
        {
          title: "Third Law of Motion",
          content: "For every action, there is an equal and opposite reaction.",
          example: "When a bird flies, it pushes air downwards (action) and the air pushes the bird upwards (reaction).",
          image: "https://media.geeksforgeeks.org/wp-content/uploads/20230314153559/Reaction-of-Alcohols-First-law-of-motion-and-Latent-heat-(Feedback).png"
        }
      ],
      quiz: [
        {
          question: "What happens to an object in motion according to Newton's First Law?",
          options: ["It always slows down", "It stays in motion with the same speed and direction", "It accelerates", "It changes direction"],
          correctAnswer: "It stays in motion with the same speed and direction"
        },
        {
          question: "What does F = ma represent in Newton's Second Law?",
          options: ["Force equals mass times area", "Force equals momentum times acceleration", "Force equals mass times acceleration", "Force equals motion times action"],
          correctAnswer: "Force equals mass times acceleration"
        },
        {
          question: "What is the relationship between action and reaction in Newton's Third Law?",
          options: ["Action is greater than reaction", "Reaction is greater than action", "Action and reaction are equal and opposite", "Action and reaction are independent"],
          correctAnswer: "Action and reaction are equal and opposite"
        },
        {
          question: "Which law of motion explains why a rocket can propel itself in space?",
          options: ["First Law", "Second Law", "Third Law", "Fourth Law"],
          correctAnswer: "Third Law"
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
                            {analysisResults.resources.map((resource: any, index: number) => ( /* eslint-disable  @typescript-eslint/no-explicit-any */
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

          <Card>
              <CardHeader>
                <CardTitle>Create Interactive Lesson</CardTitle>
                <CardDescription>Transform your PDF material into an engaging pre-class activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center w-full mb-6">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors duration-300">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FileUp className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 10MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" accept=".pdf" className="hidden" onChange={handleFileUpload2} />
                  </label>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Upload your PDF material to create an interactive lesson. You will be redirected to the lesson creation page after upload.
                </p>
              </CardContent>
            </Card>

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
                      {generatedMaterial.sections.map((section: any, index: number) => ( /* eslint-disable  @typescript-eslint/no-explicit-any */
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
                        {generatedMaterial.quiz.map((quizItem: any, index: number) => ( /* eslint-disable  @typescript-eslint/no-explicit-any */
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