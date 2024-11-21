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
import { BookOpen, Clock, Lightbulb, PenTool, Users, Beaker, FileText, Leaf } from 'lucide-react'

export default function GeneratedLessonPlan() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Exploring Photosynthesis: Nature's Energy Factory</h1>
          <p className="text-xl text-muted-foreground">Grade Level: 7th Grade Science</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Explain the process of photosynthesis and its importance</span>
            </li>
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Identify key components (light, water, CO2, chlorophyll)</span>
            </li>
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Describe the basic chemical equation for photosynthesis</span>
            </li>
            <li className="flex items-start space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <span>Design and conduct a simple photosynthesis experiment</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-purple-600" />
            <CardTitle className="text-xl">Lesson Timeline (80 minutes)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="warmup">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-yellow-600" />
                  <span>1. Warm Up: Plant Energy Brainstorm</span>
                  <Badge variant="secondary">10 mins</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Form small groups (3-4 students each)</li>
                  <li>Groups brainstorm how plants might get energy</li>
                  <li>Share ideas, create class mind map on board</li>
                  <li>Discuss common ideas and misconceptions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="instruction">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-red-600" />
                  <span>2. Direct Instruction: Photosynthesis Basics</span>
                  <Badge variant="secondary">20 mins</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Introduce "photosynthesis" and its etymology</li>
                  <li>Present equation: 6CO2 + 6H2O + light → C6H12O6 + 6O2</li>
                  <li>Explain each component's role</li>
                  <li>Use leaf diagram, highlight chloroplasts and chlorophyll</li>
                  <li>Discuss importance for life (O2 production, food chain)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guided">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <PenTool className="w-5 h-5 text-blue-600" />
                  <span>3. Guided Practice: Leaf Model Creation</span>
                  <Badge variant="secondary">20 mins</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Pairs create leaf model (paper, markers, pipe cleaners)</li>
                  <li>Label key parts: chloroplasts, stomata, veins</li>
                  <li>Pairs explain models to another pair</li>
                  <li>Teacher provides feedback, addresses misconceptions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="independent">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <Beaker className="w-5 h-5 text-green-600" />
                  <span>4. Independent Practice: Experiment Design</span>
                  <Badge variant="secondary">20 mins</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Introduce variables (light, CO2, temperature)</li>
                  <li>Students choose one variable to investigate</li>
                  <li>Design experiment using aquatic plants (e.g., Elodea)</li>
                  <li>Write hypothesis and outline procedure</li>
                  <li>Begin setup if time allows</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="exit">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <span>5. Exit Ticket: Photosynthesis Importance</span>
                  <Badge variant="secondary">10 mins</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-sm pl-6">
                  <li>Write 3-5 sentences on importance of photosynthesis</li>
                  <li>Include at least two specific reasons</li>
                  <li>Collect tickets for assessment</li>
                  <li>Share responses if time allows</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Tabs defaultValue="materials">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="extensions">Extensions</TabsTrigger>
        </TabsList>
        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Materials Needed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Whiteboard and markers for mind mapping</li>
                <li>Leaf cross-section diagram</li>
                <li>Construction paper, markers, pipe cleaners</li>
                <li>Aquatic plants (e.g., Elodea)</li>
                <li>Experiment materials (light sources, CO2 sources, thermometers)</li>
                <li>Exit ticket worksheets or digital form</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assessment">
          <Card>
            <CardHeader>
              <CardTitle>Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Formative: Observe discussions and group work</li>
                <li>Formative: Assess leaf models for accuracy</li>
                <li>Formative: Review experiment designs</li>
                <li>Summative: Evaluate exit tickets</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="extensions">
          <Card>
            <CardHeader>
              <CardTitle>Extensions and Adaptations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Advanced: Explore light-dependent and light-independent reactions</li>
                <li>Struggling: Provide simplified photosynthesis diagram to annotate</li>
                <li>Extension: Connect to climate change and deforestation</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardFooter className="flex justify-between py-2">
          <Link href="/">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
          <Button size="sm">Download Lesson Plan</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

