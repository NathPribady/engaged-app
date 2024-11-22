import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SlidersHorizontal, Lightbulb, Users, Presentation, ThumbsUp, Target, Puzzle } from 'lucide-react'

export default function ReviewMySlides() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Slide Deck Review: Ecosystems and Biodiversity</h1>
          <p className="text-xl text-muted-foreground">Grade Level: 9th Grade Biology</p>
        </div>
        <Presentation className="w-16 h-16 text-blue-500" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start space-x-2">
              <SlidersHorizontal className="w-5 h-5 text-blue-500 mt-0.5" />
              <span>Total Slides: 15</span>
            </li>
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Main Topics: Ecosystem components, Food webs, Biodiversity</span>
            </li>
            <li className="flex items-start space-x-2">
              <Target className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Learning Objectives: Clearly stated on slide 2</span>
            </li>
            <li className="flex items-start space-x-2">
              <Users className="w-5 h-5 text-purple-500 mt-0.5" />
              <span>Student Engagement: Moderate, room for improvement</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Presentation className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-xl">Slide-by-Slide Review</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="intro">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Slides 1-3: Introduction and Objectives</span>
                  <Badge variant="secondary">Constructivist Score: 3/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Strong visuals on title slide, captures attention</li>
                  <li>Clear learning objectives, but could be more student-centered</li>
                  <li>Consider adding a slide for students to share prior knowledge</li>
                  <li>Suggestion: Include a concept map for students to fill in throughout the lesson</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ecosystem">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Slides 4-7: Ecosystem Components</span>
                  <Badge variant="secondary">Constructivist Score: 4/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Excellent use of real-world examples and images</li>
                  <li>Interactive element on slide 6 promotes critical thinking</li>
                  <li>Consider adding a slide for student-generated examples</li>
                  <li>Suggestion: Incorporate a brief think-pair-share activity</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="foodweb">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Slides 8-11: Food Webs</span>
                  <Badge variant="secondary">Constructivist Score: 4/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Strong visual representation of food web concepts</li>
                  <li>Slide 10's interactive food web builder is excellent</li>
                  <li>Consider adding a slide for students to create their own food webs</li>
                  <li>Suggestion: Include a real-world problem for students to solve using food web knowledge</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="biodiversity">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Slides 12-14: Biodiversity</span>
                  <Badge variant="secondary">Constructivist Score: 3/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Good introduction to biodiversity concepts</li>
                  <li>Slide 13 could benefit from more interactive elements</li>
                  <li>Consider adding a slide for local biodiversity exploration</li>
                  <li>Suggestion: Incorporate a brief research activity on endangered species</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="conclusion">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Slide 15: Conclusion and Assessment</span>
                  <Badge variant="secondary">Constructivist Score: 2/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Summary is clear, but lacks student involvement</li>
                  <li>Assessment questions are too recall-focused</li>
                  <li>Consider adding a slide for student reflection on their learning</li>
                  <li>Suggestion: Replace multiple-choice questions with an open-ended problem-solving task</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Tabs defaultValue="strengths">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="improvements">Areas for Improvement</TabsTrigger>
          <TabsTrigger value="engagement">Increasing Engagement</TabsTrigger>
        </TabsList>
        <TabsContent value="strengths">
          <Card>
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Clear learning objectives presented at the beginning</li>
                <li>Excellent use of visuals and real-world examples</li>
                <li>Interactive food web builder promotes active learning</li>
                <li>Logical flow of content from ecosystems to biodiversity</li>
                <li>Incorporation of some interactive elements throughout</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="improvements">
          <Card>
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Increase opportunities for student-generated content</li>
                <li>Enhance the conclusion to involve more student reflection</li>
                <li>Revise assessment to focus on higher-order thinking skills</li>
                <li>Add more local and relevant examples to biodiversity section</li>
                <li>Incorporate more collaborative learning opportunities</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Increasing Student Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Add a KWL (Know, Want to know, Learned) chart at the beginning and end</li>
                <li>Incorporate more think-pair-share activities throughout</li>
                <li>Include a mini-project where students design their own ecosystem</li>
                <li>Add digital polling or quizzing tools for real-time feedback</li>
                <li>Integrate a role-playing activity related to ecosystem management</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Puzzle className="w-6 h-6 text-indigo-600" />
            <CardTitle>Alignment with Constructivist Principles</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-green-500" />
              <span>Activates prior knowledge through real-world examples</span>
            </li>
            <li className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-green-500" />
              <span>Encourages active learning with interactive elements</span>
            </li>
            <li className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-yellow-500" />
              <span>Some opportunities for collaborative learning, but could be expanded</span>
            </li>
            <li className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-yellow-500" />
              <span>Attempts to contextualize learning, but could be more student-centered</span>
            </li>
            <li className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-red-500" />
              <span>Limited opportunities for student reflection and metacognition</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardFooter className="flex justify-between py-2">
          <Link href="/">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
          <Button size="sm">Download Full Review</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

