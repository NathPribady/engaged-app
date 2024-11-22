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
import { Activity, Lightbulb, Book, Rocket, Users, Brain, Target, Clock } from 'lucide-react'

export default function ActivitiesGenerator() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Activities Generator: Newton Laws of Motion</h1>
          <p className="text-xl text-muted-foreground">Based on your uploaded slides</p>
        </div>
        <Activity className="w-16 h-16 text-blue-500" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Material Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start space-x-2">
              <Book className="w-5 h-5 text-blue-500 mt-0.5" />
              <span>Topic: Newton Three Laws of Motion</span>
            </li>
            <li className="flex items-start space-x-2">
              <Target className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Grade Level: 11th Grade Physics</span>
            </li>
            <li className="flex items-start space-x-2">
              <Clock className="w-5 h-5 text-purple-500 mt-0.5" />
              <span>Estimated Time: 90 minutes</span>
            </li>
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Key Concepts: Inertia, Force, Action-Reaction</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-xl">Generated Activities</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="first-law">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Activity 1: Inertia in Action</span>
                  <Badge variant="secondary">First Law</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p><strong>Objective:</strong> Demonstrate Newton First Law of Motion</p>
                  <p><strong>Materials:</strong> Smooth table or desk, small objects (coins, cards), paper</p>
                  <p><strong>Procedure:</strong></p>
                  <ol className="list-decimal list-inside space-y-1 text-sm pl-6">
                    <li>Place a small object on a piece of paper on a smooth surface.</li>
                    <li>Quickly pull the paper out from under the object.</li>
                    <li>Observe and discuss why the object remains in place.</li>
                    <li>Repeat with different objects and speeds.</li>
                  </ol>
                  <p><strong>Discussion:</strong> How does this demonstrate the law of inertia?</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="second-law">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Activity 2: Force and Acceleration</span>
                  <Badge variant="secondary">Second Law</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p><strong>Objective:</strong> Explore the relationship between force, mass, and acceleration</p>
                  <p><strong>Materials:</strong> Toy cars of different masses, ramp, stopwatch</p>
                  <p><strong>Procedure:</strong></p>
                  <ol className="list-decimal list-inside space-y-1 text-sm pl-6">
                    <li>Set up a ramp at a fixed angle.</li>
                    <li>Release cars of different masses from the top of the ramp.</li>
                    <li>Measure the time it takes each car to reach the bottom.</li>
                    <li>Calculate and compare the acceleration of each car.</li>
                  </ol>
                  <p><strong>Discussion:</strong> How does mass affect acceleration when the force (gravity) is constant?</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="third-law">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <span>Activity 3: Rocket Balloon Race</span>
                  <Badge variant="secondary">Third Law</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p><strong>Objective:</strong> Illustrate Newton Third Law of Motion</p>
                  <p><strong>Materials:</strong> Balloons, string, straws, tape</p>
                  <p><strong>Procedure:</strong></p>
                  <ol className="list-decimal list-inside space-y-1 text-sm pl-6">
                    <li>Thread a string through a straw and tie it between two points.</li>
                    <li>Inflate a balloon and clip it closed without tying.</li>
                    <li>Tape the balloon to the straw on the string.</li>
                    <li>Release the clip and observe the balloon's movement.</li>
                  </ol>
                  <p><strong>Discussion:</strong> Explain how this demonstrates action-reaction pairs.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Tabs defaultValue="engagement">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="engagement">Engagement Strategies</TabsTrigger>
          <TabsTrigger value="assessment">Assessment Ideas</TabsTrigger>
          <TabsTrigger value="differentiation">Differentiation</TabsTrigger>
        </TabsList>
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Start with a brief video showing real-world applications of Newton Laws</li>
                <li>Use digital simulations to visualize forces and motion</li>
                <li>Incorporate a "Physics in Sports" discussion to relate concepts to students' interests</li>
                <li>Create a "Newton Laws Scavenger Hunt" around the school or classroom</li>
                <li>Encourage students to create and share social media-style posts explaining each law</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assessment">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Concept mapping: Students create visual representations of Newton Laws</li>
                <li>Lab report: Detailed write-up of one of the hands-on activities</li>
                <li>Video project: Students record and explain real-life examples of each law</li>
                <li>Problem-solving quiz: Apply laws to calculate force, mass, or acceleration</li>
                <li>Peer teaching: Students explain concepts to classmates and answer questions</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="differentiation">
          <Card>
            <CardHeader>
              <CardTitle>Differentiation Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Provide visual aids and manipulatives for kinesthetic learners</li>
                <li>Offer choice in activity participation and assessment methods</li>
                <li>Use tiered assignments with varying levels of complexity</li>
                <li>Implement think-pair-share strategies for collaborative learning</li>
                <li>Provide extension activities for advanced students, such as researching applications in engineering</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            <CardTitle>Learning Outcomes</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-2">After completing these activities, students should be able to:</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Explain each of Newton Three Laws of Motion in their own words</span>
            </li>
            <li className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Identify real-world examples of each law in action</span>
            </li>
            <li className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Predict the motion of objects based on applied forces</span>
            </li>
            <li className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Design simple experiments to demonstrate Newton Laws</span>
            </li>
            <li className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Apply Newton Laws to solve basic physics problems</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardFooter className="flex justify-between py-2">
          <Link href="/">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
          <Button size="sm">Download Activities</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

